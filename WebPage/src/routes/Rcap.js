const express = require('express')
const CapRouter = express.Router()
const axios = require('axios')


CapRouter.get('', async (req, res) => {

    res.render('Rcap');
});



CapRouter.post('', async (req, res) => {
    const { artista, resumen, avatar } = req.body


    await axios.post('http://localhost:3010/capsulas/addCap', {
        artista : artista,
        resumen : resumen,
        avatar : avatar
    })
        .then(function (response) {
            console.log(response);
        })
    //res.redirect("/admin")
});

module.exports = CapRouter;