const express = require('express');
const router = express.Router();
const orderStatusControllers = require('../controllers/orderStatusController');
const { expressjwt: checkJwt } = require('express-jwt');

// get all
router.get(
  '/',
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ['HS256'] }),
  orderStatusControllers.index
);
// create one
router.post(
  '/',
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ['HS256'] }),
  orderStatusControllers.store
);
// get one
router.get(
  '/:id',
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ['HS256'] }),
  orderStatusControllers.show
);
// edit one
router.patch(
  '/:id',
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ['HS256'] }),
  orderStatusControllers.update
);
// delete one
router.delete(
  '/:id',
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ['HS256'] }),
  orderStatusControllers.destroy
);

module.exports = router;
