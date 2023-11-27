const mainControlers = {
    home: (req, res) => { res.send("route for view Home")}, 
    contact: (req, res) => { res.send("route for view Contact")},
    about: (req, res) => { res.send("route for view About")},
    faqs: (req, res) => { res.send("route for view Faqs")}
};
  
module.exports = mainControlers;