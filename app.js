const express = require("express");
const app = express();

require('dotenv').config();

// Importacion Error 404
const NotFound = require("./src/utils/NotFound")

// Importacion de Routes
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

// Middle para parsear los datos recibidos a un formato que entienda el servidor
app.use(express.urlencoded());
app.use(express.json());

// Middle para poder pasa archivos estaticos al servidor (POR AHORA)
app.use(express.static("public"));

// Ruta con nombre de pagina web y no con nombre de documento html (POR AHORA)
app.get("/home", (req,res) => res.sendFile(__dirname + "/public/index.html"));

// Middle llamado de rutas desde app
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// Manejo de error 404
app.use(NotFound);

app.listen(process.env.APP_PORT ,() => console.log(`Servidor de BlueLabel funcionando en http://localhost:${process.env.APP_PORT}`));