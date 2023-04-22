const { Router } = require("express");
const { getAll, getId, postRecipe } = require("../handlers/recipeHandler");

const recipe = Router();

recipes.get("/", getAll);
recipes.get("/:id", getId);
recipes.post("/", postRecipe);

module.exports = recipe;
