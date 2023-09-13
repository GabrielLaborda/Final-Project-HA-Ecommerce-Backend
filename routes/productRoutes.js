const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

// get all
router.get('/', productControllers.index);
// create one
router.post('/', productControllers.store);
// get one
router.get('/:slug', productControllers.show);
// edit one
router.patch('/:slug', productControllers.update);
// delete one
router.delete('/:slug', productControllers.destroy);

module.exports = router;
