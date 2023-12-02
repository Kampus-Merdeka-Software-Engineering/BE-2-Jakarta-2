import Login from '../models/login.js';

// membuat login baru
export const createLogin = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newLogin = await Login.create({ name, email });
    res.status(201).json({ message: 'New login created', data: newLogin });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// menampilkan semua data login
export const getAllLogins = async (req, res) => {
  try {
    const logins = await Login.findAll();
    res.status(200).json(logins);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  createLogin,
  getAllLogins
};
