exports.seed = function (knex) {
  return knex("instructions").insert([
    { step_number: 1, recipe_id: 1, instructions: "melt butter on skillet" },
    { step_number: 2, recipe_id: 1, instructions: "mix eggs and milk" },
    { step_number: 3, recipe_id: 1, instructions: "pour mixture onto skillet" },
    {
      step_number: 4,
      recipe_id: 1,
      instructions: "heat until mixture becomes solid",
    },
    { step_number: 5, recipe_id: 1, instructions: "enjoy!" },
  ]);
};
