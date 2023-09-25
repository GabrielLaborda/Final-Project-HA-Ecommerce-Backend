const express = require('express');
const router = express.Router();
const seederController = require('../controllers/seedersController');

router.post('/', seederController.runSeeders);

module.exports = router;
