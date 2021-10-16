const express = require('express');
const router = express.Router();

const ExposController = require('../controllers/capsulas.js');
// -----GET-----
router.get('/AllCapsulas', ExposController.getAllCaps );
router.get('/:artista', ExposController.getCapsula );


// -----POST----
router.post('/addCap', ExposController.addCap);

module.exports = router;
