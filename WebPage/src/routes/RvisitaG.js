const express = require('express')
const VisitaRouter = express.Router()
const axios = require('axios')


VisitaRouter.get('', async (req, res) => {

    try {
        res.render('RvisitaG');

    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.error('Error', err.message)
        }
    }

});



VisitaRouter.post('', async(req, res)=>{
    const { Nguia, fecha, hora, Npersonas } = req.body


    await axios.post('http://localhost:3010/vguiadas/addVisita', {
        reservador: "", 
        Nguia: Nguia,
        fecha: fecha,
        hora: hora,
        Npersonas: Npersonas,
        disponible: true
        })
        .then(function (response) {
            console.log(response);
        })
    //res.redirect("/admin")
});

module.exports = VisitaRouter;