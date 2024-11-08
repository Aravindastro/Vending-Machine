// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
