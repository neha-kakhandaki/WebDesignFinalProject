const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ['customer', 'admin'], // Restrict values to 'customer' or 'admin'
    default: 'customer', // Default role is 'customer'
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
