import Payment from '../models/payment.js';

// membuat data pembayaran baru
export const createPayment = async (req, res) => {
  const { fullName, email, phoneNumber, paymentMethod } = req.body;
  try {
    const newPayment = await Payment.create({
      fullName,
      email,
      phoneNumber,
      paymentMethod,
    });
    res.status(201).json({ message: 'New payment created', data: newPayment });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// menampilkan semua data pembayaran
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  createPayment,
  getAllPayments
};
