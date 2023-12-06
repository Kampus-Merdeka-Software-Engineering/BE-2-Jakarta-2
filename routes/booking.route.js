const express = require('express');
const router = express.Router();
const controllers = require('../controllers/booking.controls.js');

router.get('/booking', controllers.getAllBookings);
router.post('/booking', controllers.createBooking);

module.exports = {
    router
};