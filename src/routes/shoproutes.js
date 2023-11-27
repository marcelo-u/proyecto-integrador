const express = require("express");
const router = express.Router();
const shopControllers = require("../../controllers/shopControllers"); 

router.get("/", shopControllers.shop);
router.get("/item/:id", shopControllers.item);
router.get("/cart", shopControllers.cart);

router.post("/item/:id/add", (req, res) => res.send("VERBO:POST Ruta para agregar el item actual al carrito")); //quizas habria que pponer estos metodos en los controladores
router.post("/cart", (req, res) => res.send("VERBO:POST Ruta para ir al carrito de compras"));

module.exports = router;
