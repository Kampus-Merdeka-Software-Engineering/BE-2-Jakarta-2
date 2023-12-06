const express = require('express');
const router = express.Router();
const controllers = require('../controllers/home.controls');

router.get('/home', controllers.getAllHomeData);
router.post('/home', controllers.addHomeData);

module.exports = {
    router
};