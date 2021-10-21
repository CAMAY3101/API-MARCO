const express = require('express')
const DispoRouter = express.Router()
const axios = require('axios')


DispoRouter.get('', async (req, res) => {

    try{
        const webAPI = await (axios.get(`http://localhost:3010/vguiadas/getVreservadas`));
        //console.log(webAPI.data)
        res.render('dash', {data: webAPI.data});
        //res.send({data: webAPI.data});
    
        } catch(error){
            console.log(error)
        }
    
    
    //res.send(webAPI);
});

module.exports = DispoRouter;