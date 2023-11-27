const express = require("express");
const router = express.Router();
const shopControlers = require("../../controllers/shopControlers"); 

router.get("/", shopControlers.shop);
router.get("/item/:id", shopControlers.item);
router.get("/cart", shopControlers.cart);

router.post("shop/item/:id/add", (req, res) => res.send("route to add current item to shop cart"));
router.post("shop/cart", (req, res) => res.send("route to go to the checkout page"));

module.exports = router;
