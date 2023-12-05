const mainControllers = {
    home: (req, res) => { res.render("home")}, 
    contact: (req, res) => { res.render("contact")},
    about: (req, res) => { res.send("Ruta para vista About")},
    faqs: (req, res) => { res.send("Ruta para vista Faqs")},
};
  
module.exports = mainControllers;