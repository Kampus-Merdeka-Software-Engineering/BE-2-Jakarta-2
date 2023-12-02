import Booking from '../models/booking.js';

// membuat data booking baru
export const createBooking = async (req, res) => {
  const { name, email, jumlah, catatan } = req.body;
  try {
    const newBooking = await Booking.create({
      name,
      email,
      jumlah,
      catatan,
    });
    res.status(201).json({ message: 'New booking created', data: newBooking });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// menampilkan semua data booking
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  createBooking,
  getAllBookings
};
