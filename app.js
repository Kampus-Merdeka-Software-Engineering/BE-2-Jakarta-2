const express = require('express');
const { result } = require('lodash');
const cors = require('cors');
const app = express();
const wishlistController = require('./controller/wishlistController');

app.use(cors());
app.use(express.json());

app.use('/wishlist', wishlistController);

/* app.get('/', (req, res) => res.send('Hello Express!')) */
app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'))