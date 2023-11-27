const express = require("express");
const app = express();

// Importacion de routes mainRoute
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

// Midle para poder pasa archivos estaticos al servidor (POR AHORA)
app.use(express.static("public"));

// Middle llamado de rutas desde app
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// Ruta con nombre de pagina web y no con nombre de documento html (POR AHORA)
app.get("/home", (req,res) => res.sendFile(__dirname + "/public/index.html"));

// Manejo de error 404
app.use((req, res) => (
    res.status(404).sendFile(__dirname + "/public/pages/404.html")
));

app.get("/ping", (req,res) => res.send("pong"));

app.listen(4000,() => console.log("Servidor de BlueLabel funcionando en http://localhost:4000"));