const express = require('express');
const router = express.Router();
const controllers = require('../controllers/payment.models');

router.get('/payment', controllers.getAllPayments);
router.post('/payment', controllers.getAllPayments);

module.exports = {
    router
};