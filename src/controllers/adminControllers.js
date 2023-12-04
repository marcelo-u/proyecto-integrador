const {addItem, editItem, deleteItem} = require("../models/itemsModels")

const adminControllers = {
    adminGET: (req, res) => { res.send("Ruta para vista Admin")}, 
    createGET: (req, res) => { res.send("Ruta para vista Create")},
    editGET: (req, res) => { res.send("Ruta para vista Edit con ID")},

    createPOST: async (req, res) => { 
        const data = req.body
        const result = await addItem(data);
        res.send(result);
    },
    
    editPUT: async (req, res) => { 
        const id = req.params.id
        const data = req.body
        const result = await editItem({product_id: id}, data);
        res.send(result);
    },
    
    editDELETE: async (req, res) => { 
        const id = req.params.id
        const result = await deleteItem({product_id: id});
        res.send(result); 
    },
};
  
module.exports = adminControllers;