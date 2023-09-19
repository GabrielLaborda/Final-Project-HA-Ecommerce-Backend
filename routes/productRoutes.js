const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productController");

router.get("/", productControllers.index);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  productControllers.store
);
router.get("/:slug", productControllers.show);
router.patch(
  "/:slug",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  productControllers.update
);
router.delete(
  "/:slug",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  productControllers.destroy
);

module.exports = router;
