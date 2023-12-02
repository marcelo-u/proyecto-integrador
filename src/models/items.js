const { conn } = require("../config/db");

const getAll = async () => {
   
    const [rows] = await conn.query("SELECT * FROM product;");

    return {rows}
};

const getOne = async (id) => {
    
    const [rows] = await conn.query("SELECT * FROM product WHERE product_id = ?;", id)

    return {rows}
};


module.exports = {
    getAll,
    getOne
}
