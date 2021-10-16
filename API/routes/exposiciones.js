const express = require('express');
const router = express.Router();

const ExposController = require('../controllers/exposiciones');
// -----GET-----
router.get('/AllExpos', ExposController.getAllExpos);
router.get('/Expo', ExposController.getExposicion);


// -----POST----
router.post('/addExpo', ExposController.addExpo);

module.exports = router;
