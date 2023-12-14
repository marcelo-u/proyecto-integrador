const {getAllOrderBy, addItem, editItem, deleteItem} = require("../models/itemsModels")

const adminControllers = {
    
    adminGET: async (req, res) => { 
        const items = await getAllOrderBy({order_by: "licence_name, product_name"});
//        const items = await getAllOrderBy({licence_name: licence_name, product_name: product_name});
//        const items = await getAllOrderBy({product_id: 'product_id ASC'});
        res.render("admin/admin", {items});
    },
    
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