const mainControllers = {
    home: (req, res) => { res.send("Ruta para vista Home")}, 
    contact: (req, res) => { res.send("Ruta para vista Contact")},
    about: (req, res) => { res.send("Ruta para vista About")},
    faqs: (req, res) => { res.send("Ruta para vista Faqs")}
};
  
module.exports = mainControllers;