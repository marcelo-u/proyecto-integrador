const adminControllers = {
    admin: (req, res) => { res.send("Ruta para vista Admin")}, 
    create: (req, res) => { res.send("Ruta para vista Create")},
    edit: (req, res) => { res.send("Ruta para vista Edit con ID")}
};
  
module.exports = adminControllers;