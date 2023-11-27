const shopControlers = {
    shop: (req, res) => { res.send("Ruta para vista Shop"); },
    item: (req, res) => { res.send("Ruta para vista Item con ID"); },
    cart: (req, res) => { res.send("Ruta para vista Cart"); }
};
  
module.exports = shopControlers;