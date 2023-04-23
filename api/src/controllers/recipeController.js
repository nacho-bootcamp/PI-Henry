require("dotenv").config();
const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

const cleanArray = (arr) =>
  arr.map((element) => {
    return {
      id: element.id,
      title: element.title,
      summary: element.summary,
      image: element.image,
      created: false,
    };
  });
//------------- buscar todos --------------
const getAllRecipe = async () => {
  const databaseRecipe = await Recipe.findAll();

  const apiRecipeRaw = (
    await axios.get(`${URL_BASE}/complexSearch?apiKey=${API_KEY}`)
  ).data;

  const apiRecipe = cleanArray(apiRecipeRaw);

  return [...databaseRecipe, ...apiRecipe];
};

//----------por name ------------------
const recipeByName = async (name) => {
  const baseRecipe = await Recipe.findAll({
    where: { title: name },
  });
  const apiRecipeRaw = (
    await axios.get(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&query=${name}`)
  ).data;

  const apiRecipe = cleanArray(apiRecipeRaw);

  const filterRecipe = apiRecipe.filter((recipe) =>
    recipe.title.toLowerCase().includes(name.toString().toLowerCase())
  );

  return [...filterRecipe, ...baseRecipe];
};

//------------por Id

const getRecipebyId = async (id, source) => {
  const recipe =
    source === "api"
      ? await axios
          .get(`${URL_BASE}/${id}/information?key=${API_KEY}`)
          .then((response) => {
            const { title, image, summary, healthScore, analyzedInstructions } =
              response.data;
            recipeData = {
              id: id,
              title: title,
              image: image,
              summary: summary,
              healthScore: healthScore,
              instructions: analyzedInstructions[0]?.steps?.map(
                (step) => step.step
              ),
              created: false,
            };
            return recipeData;
          })
      : await Recipe.findByPk(id, {
          include: { model: Diet },
        });
  return recipe;
};

//----------------------------crear una receta-------------------
const createRecipe = async (
  title,
  image,
  summary,
  healthScore,
  instructions,
  created,
  diet
) => {
  const creaRecipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    instructions,
    created,
  });
  if (diet && diet.length > 0) {
    const recipe = await Recipe.findByPk(creaRecipe.id);
    await recipe.addDiets(diet);
  }
};
module.exports = { createRecipe, getRecipebyId, getAllRecipe, recipeByName };
