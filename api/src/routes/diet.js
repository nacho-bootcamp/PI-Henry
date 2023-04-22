const { Router } = require("express");
const getDiet = require("../handlers/dietHandler");

const diets = Router();

diets.get("/", getDiet);

module.exports = diets;
