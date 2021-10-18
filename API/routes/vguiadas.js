const express = require('express');
const router = express.Router();

const VguiadaController = require('../controllers/vguiadas');
// -----GET-----
router.get('/getVguiada', VguiadaController.getVisita);
router.get('/getAllvisitas', VguiadaController.getAllVis);


// -----POST----
router.post('/addVisita', VguiadaController.addVisita);

module.exports = router;