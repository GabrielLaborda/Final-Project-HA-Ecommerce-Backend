const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.index); /* Ok, funcionando*/
router.get("/:id", categoryController.show); /* Ok, funcionando*/
router.post(
  "/",
  categoryController.store
); /* Funcionando, falta implementar FORMIDABLE */
router.patch(
  "/:id",
  categoryController.update
); /* Funcionando, falta implementar FORMIDABLE */
router.delete(
  "/:id",
  categoryController.destroy
); /*Ok, funcionando con req.params.id */

module.exports = router;
