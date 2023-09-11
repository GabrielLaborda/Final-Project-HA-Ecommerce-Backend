const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.index); /* Ok, funcionando*/
router.get("/:id", adminController.show); /* Ok, funcionando*/
router.post(
  "/",
  adminController.store
); /* Funcionando, falta implementar FORMIDABLE */
router.patch(
  "/:id",
  adminController.update
); /* Funcionando, falta implementar FORMIDABLE */
router.delete(
  "/:id",
  adminController.destroy
); /*Ok, funcionando con req.params.id */

module.exports = router;