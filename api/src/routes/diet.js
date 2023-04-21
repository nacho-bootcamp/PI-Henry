const { Router } = require("express");

const diets = Router();

diets.get("/", (req, res) => {
  try {
    res.status(203).send("para las dietas");
  } catch (error) {
    res.status(532).send("no se peudo");
  }
});

module.exports = diets;
