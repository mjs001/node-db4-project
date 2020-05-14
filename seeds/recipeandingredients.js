exports.seed = function (knex) {
  return knex("recipeAndIngredients").insert([
    { ingredient_id: 1, recipe_id: 1, quantity: 4 },
    { ingredient_id: 2, recipe_id: 1, quantity: 1 },
    { ingredient_id: 3, recipe_id: 1, quantity: 1 },
  ]);
};
