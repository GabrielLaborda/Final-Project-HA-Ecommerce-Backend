const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.index);
router.get("/:slug", categoryController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  categoryController.store
);
router.patch(
  "/:slug",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  categoryController.update
);
router.delete(
  "/:slug",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  categoryController.destroy
);

module.exports = router;
