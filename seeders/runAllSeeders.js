require('dotenv').config();

async function runAllSeeders() {
  const { mongoose } = require('../db');
  await mongoose.connection.dropDatabase();

  // Seeders:
  await require('./categorySeeders')();
  await require('./completesSeeders')();
  await require('./decksSeeders')();
  await require('./trucksSeeders')();
  await require('./wheelsSeeders')();
  await require('./adminSeeders')();
  await require('./userSeeders')();
  await require('./orderStatusSeeders')();
  await require('./orderSeeders')();

  console.log('[Database] ¡Los datos de prueba fueron insertados!');
}

module.exports = runAllSeeders;
