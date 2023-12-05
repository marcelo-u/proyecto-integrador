const {getAll, getOne} = require("../models/itemsModels")

const shopControllers = {
    
    shopGET: async (req, res) => { 
        const items = await getAll();
        res.render("shop/shop", {items});
    },

    itemGET: async (req, res) => { 
        const id = req.params.id
        const item = await getOne({product_id: id});
        res.render("shop/item", {item});
    },

    cartGET: (req, res) => { res.render("shop/cart")},

    itemPOST: (req, res) => { res.send("VERBO:POST Ruta para agregar el item actual al carrito"); },

    cartPOST: (req, res) => { res.send("VERBO:POST Ruta para hacer la compra"); },
};
  
module.exports = shopControllers;