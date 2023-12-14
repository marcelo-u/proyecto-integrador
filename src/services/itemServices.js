const {getAll, getFiltered, getAllAtributesFiltered} = require("../models/itemsModels")

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

module.exports = {
    getNews, 
    getRelated,
    getItemsFromCategory
}