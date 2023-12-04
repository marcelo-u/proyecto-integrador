const {addItem, editItem, deleteItem} = require("../models/itemsModels")

const adminControllers = {
    adminGET: (req, res) => { res.send("Ruta para vista Admin")}, 
    createGET: (req, res) => { res.send("Ruta para vista Create")},
    editGET: (req, res) => { res.send("Ruta para vista Edit con ID")},

    createPOST: (req, res) => {res.send("VERBO:POST Ruta para crear un item nuevo")},
    
    editPUT: (req, res) => {res.send("VERBO:PUT Ruta para editar un item")},
    
    editDELETE: async (req, res) => { 
        const id = req.params.id
        const result = await deleteItem(id);
        res.send(result); 
    },
};
  
module.exports = adminControllers;