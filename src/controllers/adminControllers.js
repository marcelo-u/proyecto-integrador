const {getAllOrderBy, getOne, getLicences, getCategories, addItem, editItem, deleteItem} = require("../models/itemsModels")

const adminControllers = {
    
    adminGET: async (req, res) => { 
        const items = await getAllOrderBy({order_by: "licence_name, product_name"});
//        const items = await getAllOrderBy({licence_name: licence_name, product_name: product_name});
//        const items = await getAllOrderBy({product_id: 'product_id ASC'});
        res.render("admin/admin", {items});
    },
    
    createGET: (req, res) => { res.render("admin/create")},
    
    editGET: async (req, res) => { 
        const id = req.params.id
        const licences = await getLicences();
        const categories = await getCategories();
        const item = await getOne({product_id: id}); // Desestructuro, ya que sino hay que acceder a las propiedades por posicion [0] del array
        res.render("admin/edit", {item, licences, categories});
    },

    createPOST: async (req, res) => { 
        const data = req.body
        const result = await addItem(data);
        res.send(result);
    },
    
    editPUT: async (req, res) => { 
        const id = req.params.id;
        const data = req.body;
        const result = await editItem({product_id: id}, data);
        // res.send(result); //esta linea solo muestra el msg de edición OK
        res.redirect('/admin');
    },
    
    editDELETE: async (req, res) => { 
        const id = req.params.id;
        const result = await deleteItem({product_id: id});
        // res.send(result); //esta linea solo muestra el msg de edición OK
        res.redirect('/admin');
    },
};
  
module.exports = adminControllers;