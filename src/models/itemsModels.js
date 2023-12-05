const { conn } = require("../config/db");
const errorDBhandler = require("../utils/errorHandler")

const getAll = async () => {
    try {
        const [rows] = await conn.query("SELECT * FROM product;");
        return rows
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

// Esta función chequea si existe el item antes de seguir con lo demas, es un getOne abreviado para ser reutilizado
const CheckExistence = async (object) => {
    const [itemExistence] = await conn.query("SELECT * FROM product WHERE ?;", object);
    if (itemExistence.length === 0) {
        throw new Error(`No se encontró el ítem con el ID ${object.product_id}`);
    } 
    return itemExistence
};

const getOne = async (object) => {
    try {
        const item = await CheckExistence(object);
        return item
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

const addItem = async (data) => {
    try {   
        await conn.query(`INSERT INTO product (product_name, product_description, price, stock, discount, 
            sku, dues, image_front, image_back, licence_id, category_id) VALUES (?,?,?,?,?,?,?,?,?,?,?);`,
            [data.product_name, data.product_description, data.price, data.stock, data.discount, 
            data.sku, data.dues, data.image_front, data.image_back, data.licence_id, data.category_id]);
        return `Se ha agregado correctamente el Item`
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

const editItem = async (object, data) => {
    try {
        await CheckExistence(object);
        await conn.query(`UPDATE product SET product_name=?, product_description=?, price=?, stock=?, discount=?, 
            sku=?, dues=?, image_front=?, image_back=?, licence_id=?, category_id=? WHERE ?;`,
            [data.product_name, data.product_description, data.price, data.stock, data.discount, 
            data.sku, data.dues, data.image_front, data.image_back, data.licence_id, data.category_id, object]);
        return `Se ha editado correctamente el Item`;
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

const deleteItem = async (object) => {
    try {
        await CheckExistence(object);
        await conn.query("DELETE FROM product WHERE ?;", object);  
        return `Se ha borrado correctamente el item ${object.product_id}`
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

module.exports = {
    getAll,
    getOne,
    addItem,
    editItem,
    deleteItem,
}
