const express = require("express");
const app = express();

// Midle para poder pasa archivos estaticos al servidor (POR AHORA)
app.use(express.static("public_html"));

// Importacion de routes mainRoute
const mainRoute = require("./src/routes/mainRoutes");
// Importacion de routes mainRoute
const shopRoute = require("./src/routes/shopRoutes"); 

// Llamado de rutas desde app
app.use("/", mainRoute);
app.use("/shop", shopRoute);

// ruta con nombre de pagina web y no con nombre de documento html (POR AHORA)
app.get("/home", (req,res) => res.sendFile(__dirname + "/public_html/index.html"));

app.get("/ping", (req,res) => res.send("pong"));

app.listen(4000,() => console.log("Servidor de BlueLabel funcionando en http://localhost:4000"));