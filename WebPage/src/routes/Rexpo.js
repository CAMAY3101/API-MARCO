const express = require('express')
const ExpoRouter = express.Router()
const axios = require('axios')


ExpoRouter.get('', async (req, res) => {

    res.render('Rexpo');
});



ExpoRouter.post('', async (req, res) => {
    
    const { name, descripcion, fechaI, imagenes } = req.body

    //const arrImgs = imagenes.split(" ");

    await axios.post('http://localhost:3010/expos/addExpo', {
        name : name,
        descripcion : descripcion,
        fechaI : fechaI,
        imagenes: imagenes
    })
        .then(function (response) {
            console.log(response);
        })
    //res.redirect("/admin")
});

module.exports = ExpoRouter;