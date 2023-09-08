const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productController");

router.get("/", productControllers.index);
router.get("/category", productControllers.show);

module.exports = router;
