const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: { type: String, required: true }, // Example: "Culinary Skills" or "Dietary & Lifestyle"
    difficulty: { type: String }, // Example: "Beginner", "Intermediate", "Advanced"
    whatYouLearn: { type: [String], required: true }, // Array of strings
});

module.exports = mongoose.model('Course', CourseSchema);
