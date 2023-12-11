const express = require('express');
const router = express.Router();
const HolidaysPlaceController = require('../controller/holidaysPlaceController');

router.get('/', HolidaysPlaceController.getPlace);
router.post('/add', HolidaysPlaceController.addToPlace);

module.exports = router;