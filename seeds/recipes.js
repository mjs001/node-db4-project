exports.seed = function (knex) {
  return knex("recipes").insert([{ recipe: "scrambled eggs" }]);
};
