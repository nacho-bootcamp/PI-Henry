const { Router } = require("express");
const recipeRouter = require("./recipes");
const dietsRouter = require("./diet");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/recipes", recipeRouter);
router.use("/diets", dietsRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
