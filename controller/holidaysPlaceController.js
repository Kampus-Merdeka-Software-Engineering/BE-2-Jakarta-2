// Import model dan konfigurasi multer
const multer = require('multer');
const holidaysPlace = require('../models/holidaysPlaceModel');
const upload = require('../config/multerConfig');

// Definisikan fungsi controller
exports.getPlace = async (req, res) => {
    try {
        const holidaysPlaceItems = await holidaysPlace.findAll();

        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        
        res.status(200).json(holidaysPlaceItems);
    } catch (error) {
        console.error('Gagal mendapatkan Holidays Place: ', error);
        res.status(500).send('Gagal mendapatkan daftar Holidays Place');
    }
};

exports.addToPlace = async (req, res) => {
    upload.single('image')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // Tangani kesalahan multer jika ada
            return res.status(500).json({ message: 'Multer Error' });
        } else if (err) {
            // Tangani kesalahan lainnya jika ada
            return res.status(500).json({ message: 'Gagal menambahkan Penginapan ke Holidays Place' });
        }

        try {
            const { location_name, date, quota, description, price } = req.body;
            const image = req.file.filename; // Dapatkan nama file yang diunggah

            res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');


            const newItem = await holidaysPlace.create({ image, location_name, date, quota, description, price });
            res.status(200).send('Penginapan berhasil ditambahkan ke Holidays Place');
        } catch (error) {
            console.error('Gagal menambahkan Penginapan ke Holidays Place: ', error);
            res.status(500).send('Gagal menambahkan Penginapan ke Holidays Place');
        }
    });
};
