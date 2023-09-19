const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.index
);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.store
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.show
);

router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.update
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderControllers.destroy
);

module.exports = router;
