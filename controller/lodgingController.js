// Import model dan konfigurasi multer
const multer = require('multer');
const Lodging = require('../models/lodgingModel');
const upload = require('../config/multerConfig');

// Definisikan fungsi controller
exports.getLodging = async (req, res) => {
    try {
        const lodgingItems = await Lodging.findAll();
        res.status(200).json(lodgingItems);
    } catch (error) {
        console.error('Gagal mendapatkan lodging: ', error);
        res.status(500).send('Gagal mendapatkan daftar lodging');
    }
};

// Gunakan middleware multer di endpoint addToLodging
exports.addToLodging = async (req, res) => {
    upload.single('image')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // Tangani kesalahan multer jika ada
            return res.status(500).json({ message: 'Multer Error' });
        } else if (err) {
            // Tangani kesalahan lainnya jika ada
            return res.status(500).json({ message: 'Gagal menambahkan Penginapan ke lodging' });
        }

        try {
            const { location_name, date, quota, description, price } = req.body;
            const image = req.file.filename; // Dapatkan nama file yang diunggah

            const newItem = await Lodging.create({ image, location_name, date, quota, description, price });
            res.status(200).send('Penginapan berhasil ditambahkan ke lodging');
        } catch (error) {
            console.error('Gagal menambahkan Penginapan ke lodging: ', error);
            res.status(500).send('Gagal menambahkan Penginapan ke lodging');
        }
    });
};
