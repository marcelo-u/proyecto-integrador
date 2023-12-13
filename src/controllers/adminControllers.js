const {addItem, editItem, deleteItem} = require("../models/itemsModels");

const adminControllers = {
    adminGET: (req, res) => { res.render("admin/admin")}, 
    createGET: (req, res) => { res.render("admin/create")},
    editGET: (req, res) => { res.render("admin/edit")},

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