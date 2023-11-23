const shopControlers = {
    shop: (req, res) => { res.send("route for Shop view"); },
    item: (req, res) => { res.send("route to find and retrieve a product from an id"); },
    cart: (req, res) => { res.send("route for Cart view"); }
};
  
module.exports = shopControlers;