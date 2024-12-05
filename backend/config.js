const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/foodBlog'); // Simplified without deprecated options
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

// Define the JWT secret key
const JWT_SECRET = 'your_jwt_secret';

module.exports = { connectDB, JWT_SECRET };
