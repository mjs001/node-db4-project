exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.text("recipe", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.text("ingredient", 128).notNullable();
    })
    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps");
};
