const Booking = require('../models/bookingModel');

exports.getBooking = async (req, res) => {
    try {
        const bookingItems = await Booking.findAll();
        res.status(200).json(bookingItems);
    } catch (error) {
        console.error('Gagal mendapatkan booking: ', error);
        res.status(500).send('Gagal mendapatkan daftar booking');
    }
};

exports.addToBooking = async (req, res) => {
    const { name, email, notes, total } = req.body;
    try {
        const newItem = await Booking.create({ name, email, notes, total});
        res.status(200).send('Item berhasil ditambahkan ke booking');
    } catch (error) {
        console.error('Gagal menambahkan item ke booking: ', error);
        res.status(500).send('Gagal menambahkan item ke booking');
    }
};
