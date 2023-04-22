const { Diet } = require("../db");
const getDiests = async (req, res) => {
  try {
    const Alldiet = await Diet.findAll();
    res.status(200).send(Alldiet);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getDiests;

// const express = require("express");
// const router = express.Router();
// const { Diet } = require("../db");

// // Endpoint para obtener todas las dietas
// router.get("/", async (req, res) => {
//   try {
//     // Verificar si existen datos de dietas en la base de datos
//     const diets = await Diet.findAll();

//     if (diets.length === 0) {
//       // Si no hay datos, hacer una petición a la API para obtener las dietas
//       const response = await fetch(
//         "https://api.spoonacular.com/food/ingredients/1000+list"
//       );
//       const data = await response.json();

//       // Guardar las dietas en la base de datos
//       await Diet.bulkCreate(data.map((diet) => ({ name: diet })));

//       // Obtener todas las dietas de la base de datos
//       const allDiets = await Diet.findAll();
//       return res.json(allDiets);
//     }

//     // Si ya existen datos en la base de datos, devolverlos como respuesta
//     return res.json(diets);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Hubo un error al obtener las dietas.");
//   }
// });

// module.exports = router;
