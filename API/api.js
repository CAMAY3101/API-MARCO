const express = require("express");
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

app.use(express.json())


const mong = require("mongoose")
mong.connect('mongodb://localhost:27017/prueba')
    .then(() => {
        console.log("Base Datos Conexión Exitosaa")
    })
    .catch(err => {
        console.log("Error Contactando a BD")
    })





//Get principal
app.get('/', (req, res, next) => {
    res.send('Pagina Principal Api Clase')
    //res.json({message: 'Hello World'})
})


// Web admin

app.set("view engine", "ejs");
app.set("views", __dirname + "/WebViews");

app.get("/admin", (req, res) => {
    res.render("index");
});

//Familia de rutas
app.use(require('./routes/routes'))

//listen
app.listen(port, () => {
    console.log('Escuchando del puerto ' + port)
});


