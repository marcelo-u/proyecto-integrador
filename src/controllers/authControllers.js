const authControllers = {
    loginGET: (req, res) => { res.send("Ruta para vista Login")}, 
    registerGET: (req, res) => { res.send("Ruta para vista Register")},
    logoutGET: (req, res) => { res.send("Ruta para vista ¿Login por Logout?")}, //No se si sera asi al final
    
    loginPOST: (req, res) => {res.send("VERBO:POST Ruta para login")},
    registerPOST: (req, res) => {res.send("VERBO:POST Ruta para Register")},
};
  
module.exports = authControllers;