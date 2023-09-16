const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/user", loginController.loginUser);
router.post("/admin", loginController.loginAdmin);

module.exports = router;
