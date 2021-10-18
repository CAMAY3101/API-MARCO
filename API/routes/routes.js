const express = require('express')
const router = express.Router()

router.use('/users', require('./users'))
router.use('/expos', require('./exposiciones'));
router.use('/capsulas', require('./capsulas'));
router.use('/vguiadas', require('./vguiadas'));

module.exports = router;