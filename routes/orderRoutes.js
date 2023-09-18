const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

// get all
router.get(
  "/",
  // checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ['HS256'] }),
  orderControllers.index
);
// create one
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.store
);
// get one
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.show
);
// edit one
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.update
);
// delete one
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.destroy
);

module.exports = router;
