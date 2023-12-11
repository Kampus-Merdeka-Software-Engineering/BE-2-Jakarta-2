const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.get('/', bookingController.getBooking);
router.post('/add', bookingController.addToBooking);

module.exports = router;