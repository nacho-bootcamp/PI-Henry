const {
  createRecipe,
  getRecipebyId,
  recipeByName,
  getAllRecipe,
} = require("../controllers/recipeController");

//--------------buscar todos ------------------------
const getAll = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await recipeByName(name) : await getAllRecipe();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//-------------Buscar por Id -------------------------

const getId = async (req, res) => {
  const { id } = req.params;

  try {
    const source = isNaN(id) ? "bdd" : "api";
    const recipeHandler = await getRecipebyId(id, source);
    res.status(200).json(recipeHandler);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//--------------- Post de Recipe ----------------------------
const postRecipe = async (req, res) => {
  const { title, image, summary, healthScore, instructions, created, diet } =
    req.body;

  if (!title || !summary) {
    res.status(404).send("los datos title y summary son necesario");
  } else {
    try {
      const newRecipe = await createRecipe(
        title,
        image,
        summary,
        healthScore,
        instructions,
        created,
        diet
      );
      res.status(201).json(newRecipe);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = {
  getAll,
  getId,
  postRecipe,
};
