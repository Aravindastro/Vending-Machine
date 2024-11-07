const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');
const Medicine = require('./models/Medicine');
const Pharmacist = require('./models/Pharmacist');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => console.log(err));

const seedDatabase = async () => {
    try {
        await Doctor.insertMany([
            {name: 'Dr. Smith', password: 'pass123' },
            { name: 'Dr. Johnson',password: 'pass234' },
            { name: 'Dr. Williams',password: 'pass345' }
        ]);

        await Patient.insertMany([
            {  name: 'Alice', phoneNumber: '1234567890' },
            // Add 9 more patients with unique IDs, names, and phone numbers
        ]);

        await Medicine.insertMany([
            { tabletName: 'Paracetamol', quantity: 50 },
            { tabletName: 'Ibuprofen', quantity: 30 },
            // Add 8 more medicines with random quantities
        ]);

        await Pharmacist.insertMany([
            { name: 'John Doe', phoneNumber: '9876543210' },
            { name: 'Jane Smith', phoneNumber: '8765432109' }
        ]);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
