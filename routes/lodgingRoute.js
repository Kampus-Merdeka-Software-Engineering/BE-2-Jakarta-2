const express = require('express');
const router = express.Router();
const lodgingController = require('../controller/lodgingController');

router.get('/', lodgingController.getLodging);
router.post('/add', lodgingController.addToLodging);

module.exports = router;