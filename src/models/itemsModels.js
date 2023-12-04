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

const getOne = async (params) => {
    try {
        const [rows] = await conn.query("SELECT * FROM product WHERE ?;", params)
        return rows
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

const addItem = async (data) => {
    try {
        
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

const editItem = async (params) => {
    try {
        
    } catch (error) {
        return errorDBhandler(error);
    } finally {
        conn.releaseConnection();
    }
};

const deleteItem = async (id) => {
    try {
        await conn.query("DELETE FROM product WHERE product_id = ?;", id)
        return `Se ha borrado correctamente el item ${id}`
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
