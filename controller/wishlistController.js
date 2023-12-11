const WishList = require('../models/wishlistModel');

exports.getWishlist = async (req, res) => {
    try {
        const wishlistItems = await WishList.findAll();
        res.status(200).json(wishlistItems);
    } catch (error) {
        console.error('Gagal mendapatkan wishlist: ', error);
        res.status(500).send('Gagal mendapatkan daftar wishlist');
    }
};

exports.addToWishlist = async (req, res) => {
    const { item_name, item_description } = req.body;
    try {
        const newItem = await WishList.create({ item_name, item_description });
        res.status(200).send('Item berhasil ditambahkan ke wishlist');
    } catch (error) {
        console.error('Gagal menambahkan item ke wishlist: ', error);
        res.status(500).send('Gagal menambahkan item ke wishlist');
    }
};
