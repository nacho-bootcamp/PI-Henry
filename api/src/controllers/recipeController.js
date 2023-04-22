require("dotenv").config();
const { Recipe } = require("../db");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

//------ todas las recetas ----------
// busca de la base de datos
//buscar de la api
//unifica

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
    where: { name: name },
  });
  const apiRecipeRaw = (
    await axios.get(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&query=${name}`)
  ).data;

  const apiRecipe = cleanArray(apiRecipeRaw);

  const filterRecipe = apiRecipe.filter((recipe) => recipe.name == name);

  return [...filterRecipe, ...baseRecipe];
};

//------------por Id

const getRecipebyId = async (id, source) => {
  const recipe =
    source === "api"
      ? await axios
          .get(`${URL_BASE}/${id}/information?key=${API_KEY}`)
          .then((response) => {
            const { name, image, summary, healthScore, analyzedInstructions } =
              response.data;
            recipeData = {
              id: id,
              tile: name,
              image: image,
              summary: summary,
              healthScore: healthScore,
              instructions: analyzedInstructions[0]?.steps?.map(
                (step) => step.step
              ),
            };
            return recipeData;
          })
      : await Recipe.findByPk(id);
  return recipe;
};

//----------------------------crear una receta-------------------
const createRecipe = async (
  title,
  image,
  summary,
  healthScore,
  intructions
) => {
  console.log(Recipe);
  await Recipe.create({ title, image, summary, healthScore, intructions });
  console.log("Recipe created successfully");
};
module.exports = { createRecipe, getRecipebyId, getAllRecipe, recipeByName };
