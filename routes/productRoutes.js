const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

// get all
router.get('/', productControllers.index);
// create one
router.post('/', productControllers.store);
// get one
router.get('/:id', productControllers.show);
// edit one
router.patch('/:id', productControllers.update);
// delete one
router.delete('/:id', productControllers.destroy);

module.exports = router;
