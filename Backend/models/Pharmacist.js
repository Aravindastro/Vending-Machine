const mongoose = require('mongoose');

const pharmacistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

module.exports = mongoose.model('Pharmacist', pharmacistSchema);
