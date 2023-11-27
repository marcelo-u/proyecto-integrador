const authControllers = {
    login: (req, res) => { res.send("Ruta para vista Login")}, 
    register: (req, res) => { res.send("Ruta para vista Register")},
    logout: (req, res) => { res.send("Ruta para vista ¿Login por Logout?")} //No se si sera asi al final
};
  
module.exports = authControllers;