const express = require('express');
const cors = require('cors');
const app = express();
const port = 2000;

const bookingRoutes = require('./routes/booking.route');
const homeRoutes = require('./routes/home.route');
const paymentRoutes = require('./routes/payment.models');

app.use(cors());
app.use(express.json());

var { establishConnection } = require('./config/config');
var { migrateSchema } = require('./config/migrate');
establishConnection();
migrateSchema();

app.use('/api', bookingRoutes);
app.use('/api', homeRoutes);
app.use('/api', paymentRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: 'route not found'
    })
});

app.use((req, res) => {
    res.status(500).json({
        message: err.message
    })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});