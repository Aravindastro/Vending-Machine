const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    tabletName: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Medicine', medicineSchema);
