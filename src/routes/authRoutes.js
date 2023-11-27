const express = require("express");
const router = express.Router();
const authControllers = require("../../controllers/authControllers");

router.get("/login", authControllers.login);
router.get("/register", authControllers.register);
router.get("/logout", authControllers.logout);

router.post("/login", (req, res) => res.send("VERBO:POST Ruta para login")); //quizas habria que pponer estos metodos en los controladores
router.post("/register", (req, res) => res.send("VERBO:POST Ruta para Register"));

module.exports = router;