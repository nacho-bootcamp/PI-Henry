const { Router } = require("express");
const { getAll, getId, postRecipe } = require("../handlers/recipeHandler");

const recipe = Router();

recipe.get("/", getAll);
recipe.get("/:id", getId);
recipe.post("/", postRecipe);

module.exports = recipe;
