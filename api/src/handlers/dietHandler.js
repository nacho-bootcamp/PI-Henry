const allDiets = require("../controllers/dietControllers");

const getDiests = async (req, res) => {
  try {
    const Dietas = allDiets();
    res.status(200).json(Dietas);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getDiests;
