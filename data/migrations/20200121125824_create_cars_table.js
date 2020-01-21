
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 17).unique().index();
    tbl.string('make', 50);
    tbl.string('model', 50);
    tbl.integer('mileage');
    tbl.string('transmission', 20);
    tbl.string('status', 100);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
