const express = require("express");
const router = express.Router();
const adminControllers = require("../../controllers/adminControllers");

router.get("/", adminControllers.admin);
router.get("/create", adminControllers.create);
router.get("/edit/:id", adminControllers.edit);

router.post("/create", (req, res) => res.send("VERBO:POST Ruta para crear un item nuevo")); //quizas habria que pponer estos metodos en los controladores
router.put("/edit/:id", (req, res) => res.send("VERBO:PUT Ruta para editar un item"));
router.delete("/delete/:id", (req, res) => res.send("VERBO:DELETE Ruta para eliminar un item"));

module.exports = router;