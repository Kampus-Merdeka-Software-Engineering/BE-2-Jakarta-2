const express = require('express');
const bodyParser = require('body-parser');
const { result } = require('lodash');
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
const path = require('path');
const cors = require('cors');

const post = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended:true, limit: '10mb' }));


app.use('/wishlist', wishlistRoutes);
app.use('/penginapan', lodgingRoutes);
app.use('/tempat-liburan', holidaysPlaceRoute);
app.use('/booking', bookingRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/images/:imageName', (req, res) => {
    const { imageName } = req.params;
    const imagePath = path.join(__dirname, '/public/uploads/', imageName);

    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');

    res.sendFile(imagePath);
});

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'))