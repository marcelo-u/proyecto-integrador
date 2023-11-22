const express=require("express");

const app=express();

// Midlle para poder pasa archivos estaticos al servidor
app.use(express.static("public_html"));
// Importacion de routes mainRoute
const mainRoute=require ("./src/routes/mainRoute");
// Importacion de routes mainRoute
const shopRoute=require ("./src/routes/shopRoute");

// ruta con nombre de pagina web y no con nombre de documento html

app.get("/home",(req,res)=>res.sendFile(__dirname + "/public_html/index.html"));

app.get("/ping",(req,res)=>res.send("pong"));

app.listen(4000,()=>console.log("Servidor de BlueLabel funcionando corriendo en http://localhost:4000"));

// Llamado de routas desde app

app.use("/",mainRoute);
app.use("/shop",shopRoute);

