const { Router } = require("express");

const recipe = Router();

recipe.get("/", (req, res) => {
  const { name } = req.query;
  try {
    res.status(267).send("esto es para buscar por query");
  } catch (error) {
    res.status(501).send(`no existe el ${name}`);
  }
});

recipe.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    res.status(243).send("para por id");
  } catch (error) {
    res.status(505).send(`no xiste es ${id}`);
  }
});

recipe.post("/", (req, res) => {
  const { title, image, summary, healthScore, instructions } = req.body;

  try {
    res.status(298).send("creacion exitosa");
  } catch (error) {
    res.status(594).send("no se pudo crear la receta");
  }
});

module.exports = recipe;
