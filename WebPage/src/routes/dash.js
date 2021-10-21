const express = require('express')
const DashRouter = express.Router()
const axios = require('axios')


DashRouter.get('', async (req, res) => {
    res.render('dash');
});

module.exports = DashRouter;