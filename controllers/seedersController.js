const runAllSeeders = require('./../seeders/runAllSeeders');

async function runSeeders(req, res) {
  await runAllSeeders();
  res.status(200).json({ msg: 'The db has been succesfully reset' });
}

module.exports = {
  runSeeders,
};
