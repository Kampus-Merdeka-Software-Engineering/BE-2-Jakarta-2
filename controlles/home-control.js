import Home from '../models/home.js';

export const getAllHomeData = async (req, res) => {
  try {
    const homeData = await Home.findAll();
    res.status(200).json(homeData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// menambahkan data baru ke halaman home
export const addHomeData = async (req, res) => {
  const { search, content, holiday, holidayDesc, holidayPrice, holidayRating } = req.body;
  try {
    const newHomeData = await Home.create({
      search,
      content,
      holiday,
      holidayDesc,
      holidayPrice,
      holidayRating
    });
    res.status(201).json({ message: 'New data added to home', data: newHomeData });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  getAllHomeData,
  addHomeData
};
