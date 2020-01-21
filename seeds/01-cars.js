
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '222XXX333YYY444ZZ', make: 'Dodge', model: 'Dart', mileage: 123}, 
        {id: 2, vin: '666AAA777BBB888CC', make: 'Ford', model: 'Pinto', mileage: 456},
        {id: 3, vin: 'JKLOL555LMAO<3OMG', make: 'Pontiac', model: 'Aztek', mileage: 789},
      ]);
    });
};
