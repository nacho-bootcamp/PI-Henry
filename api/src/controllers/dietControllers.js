const { Diet } = require("../db");

const allDiets = async () => {
  const diets = await Diet.findAll;

  if (diets.length === 0) {
    const response = await axios.get(
      "https://api.spoonacular.com/food/ingredients/1000+list"
    );
    const data = response.data;

    await Diet.bulkCreate(data.map((diet) => ({ name: diet })));

    const todasDiets = await Diet.findAll();
    return todasDiets;
  }
  return diets;
};

module.exports = {
  allDiets,
};
