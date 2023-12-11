const express = require('express');
const bodyParser = require('body-parser');
const { result } = require('lodash');
const cors = require('cors');
const app = express();
const { sequelize, syncModels } = require('./config/db');
const wishlistRoutes = require('./routes/wishlistRoute');
const lodgingRoutes = require('./routes/lodgingRoute');
const holidaysPlaceRoute = require('./routes/holidaysPlaceRoute');
const bookingRoute = require('./routes/bookingRoute');
const wishlistModel = require('./models/wishlistModel');
const holidaysPlaceModel = require('./models/holidaysPlaceModel');
const lodgingModel = require('./models/lodgingModel');
const bookingModel = require('./models/bookingModel');

const post = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended:true, limit: '10mb' }));


app.use('/wishlist', wishlistRoutes);
app.use('/penginapan', lodgingRoutes);
app.use('/tempat-liburan', holidaysPlaceRoute);
app.use('/booking', bookingRoute);

/* app.get('/', (req, res) => res.send('Hello Express!')) */
app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'))