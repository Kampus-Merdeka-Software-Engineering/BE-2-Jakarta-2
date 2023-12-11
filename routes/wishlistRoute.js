const express = require('express');
const router = express.Router();
const wishlistController = require('../controller/wishlistController');

router.get('/', wishlistController.getWishlist);
router.post('/add', wishlistController.addToWishlist);

module.exports = router;