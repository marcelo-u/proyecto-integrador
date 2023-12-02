const {getAll, getOne} = require("../models/items")

const shopControlers = {
    
    shop: async (req, res) => { 
        const items = await getAll();
        res.send(items); 
    },

    item: async (req, res) => { 
        const id = req.params.id
        const item = await getOne(id);
        res.send(item); 
    },

    
    cart: (req, res) => { res.send("Ruta para vista Cart"); }
};
  
module.exports = shopControlers;