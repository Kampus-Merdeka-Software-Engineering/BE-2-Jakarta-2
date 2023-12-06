const { booking } = require('../models/booking.models');
const { home } = require('../models/home.models');
const { payment } = require('../models/payment.models');

const migrateSchema = async function() {
    await booking.sync()
    await home.sync()
    await payment.sync()
};

module.exports = {
    migrateSchema
};