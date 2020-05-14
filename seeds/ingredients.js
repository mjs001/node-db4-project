exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "eggs" },
    { ingredient_name: "fourth of a stick of butter" },
    { ingredient_name: "milk" },
  ]);
};
