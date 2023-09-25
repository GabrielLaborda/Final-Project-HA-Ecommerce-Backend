require('dotenv').config();

async function runAllSeeders() {
  // Reiniciar la base de datos al correr de nuevo los seeders:
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
  // process.exit();
}

// runAllSeeders();

module.exports = runAllSeeders;
