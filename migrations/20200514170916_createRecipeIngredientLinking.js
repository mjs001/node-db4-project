exports.up = function (knex) {
  return knex.schema.createTable("recipeAndIngredients", (tbl) => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.float("quantity").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipeAndIngredients");
};
