const express = require('express')
const DashRouter = express.Router()
const axios = require('axios')


DashRouter.get('', async (req, res) => {
    try{
        const reservadas = await axios.get(`http://localhost:3010/vguiadas/getVreservadas`)
        const disponibles = await axios.get(`http://localhost:3010/vguiadas/getVdisponibles`)

        const ndis = await axios.get('http://localhost:3010/vguiadas/getNumDis')
        const nres = await axios.get('http://localhost:3010/vguiadas/getNumRes')

        //console.log(typeof ndis.data.Ndis)
        //console.log(reservadas.data)
        res.render('dash', { data: reservadas.data, datas2: disponibles.data, Ndisponibles: ndis.data.Ndis, Nreservas: nres.data.Nres})
    
    } catch(error){
        console.log(error)
    }


});

module.exports = DashRouter;