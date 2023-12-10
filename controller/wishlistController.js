const express = require('express');
const connection = require('../config/db');

const router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM wishlist', (err, results) => {
        if (err) {
            console.error('Gagal mengambil daftar wishlist karena ', err);
            res.status(500).send('Gagal mendapatkan daftar wishlist');
            return;
        }
        res.status(200).json(results);
    });
});

router.post('/add', (req, res) => {
    const newItem = {
        item_name: req.body.item_name,
        item_description: req.body.item_description
    }

    connection.query('INSERT INTO wishlist SET ?', newItem, (err, result) => {
        if (err) {
            console.error('Gagal menambahkan item karena ', err);
            res.status(500).send('Gagal menambahkan item ke wishlist');
            return;
        }
        res.status(200).send('Item berhasil ditambahkan ke wishlist');
    })
});

module.exports = router;