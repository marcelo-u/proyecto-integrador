const {getAll, getFiltered, getAllAtributesFiltered, add, edit, deleteOne} = require("../models/itemsModels")

const getNews = async () => {
    const items = await getAll();

    let itemsNews = [];
    items.forEach( item => {
        let fecha_creacion = new Date(item.create_time);
        let fecha_actual = new Date();

        const diferenciaDias = (fecha_actual - fecha_creacion) / (1000 * 60 * 60 * 24);

        if (diferenciaDias < 30) {
            itemsNews.push(item);
        }
    });
    // Caso de que no haya items nuevos en el mes
    if (itemsNews.length === 0) {
        return items
    }
    return itemsNews;
};

const getRelated = async (object) => {
    const items = await getFiltered(object);
    return items
};

const getItemsFromCategory = async (filter) => {
    let items = [];
    min_filter = filter.toLowerCase()

    switch (min_filter) {
    case "all":
        items = await getAll();
        break;
    case "new":
        items = await getNews();
        break;
    default:
        let licence_id = filter;
        licence_id = parseInt(licence_id.replace("licence-", ""));
        items = await getAllAtributesFiltered(licence_id); 
    }

    return items;
};

const addItem = async (item, files) => {
    const itemSchema = {
      product_name: item.name,
      product_description: item.description,
      price: item.price,
      stock: item.stock,
      discount: item.discount,
      sku: item.sku,
      dues: item.dues,
      //para que quede bien, primero se debe seleccionar en la vista la imagen de front y lugo la de back
      //una opcion mas segura es poner en la vista 2 input tipo 'file'
      image_front: '/'+files[0].filename,
      image_back: '/'+files[1].filename,
      licence_id: item.licence,
      category_id: item.category
    }

    return await add([Object.values(itemSchema)]);
}


const editItem = async (item, files, id) => {
    const itemSchema = {
      product_name: item.name,
      product_description: item.description,
      price: item.price,
      stock: item.stock,
      discount: item.discount,
      sku: item.sku,
      dues: item.dues,
      image_front: '/'+files[0].filename,
      image_back: '/'+files[1].filename,
      licence_id: item.licence,
      category_id: item.category
    }
    return await edit(itemSchema, id);
}

const deleteItem = async (id) => {
    return await deleteOne(id);
}

module.exports = {
    getNews, 
    getRelated,
    getItemsFromCategory,
    addItem,
    editItem,
    deleteItem
}