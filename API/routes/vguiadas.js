const express = require('express');
const router = express.Router();

const VguiadaController = require('../controllers/vguiadas');
// -----GET-----
router.get('/getVguiada', VguiadaController.getVisita);
router.get('/getAllvisitas', VguiadaController.getAllVis);

router.get('/getGuias/:fecha/:hora', VguiadaController.getGuias);
router.get('/:fecha', VguiadaController.getHorarios);

//-----UPDATE----
router.post('/update/:reservador/:Nguia/:fecha/:hora/:Npersonas', VguiadaController.updateVisit);

// -----POST----
router.post('/addVisita', VguiadaController.addVisita);


module.exports = router;