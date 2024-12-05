const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Course = require('../models/Course');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Upload directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// **Fetch All Courses** (Public Access)
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **Add a New Course** (No Authentication)
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, description, price, category, difficulty, whatYouLearn } = req.body;

        if (!name || !description || !price || !category || !difficulty || !whatYouLearn || !req.file) {
            return res.status(400).json({ error: 'All fields are required, including an image' });
        }

        const course = new Course({
            name,
            description,
            price,
            category,
            difficulty,
            whatYouLearn: JSON.parse(whatYouLearn),
            imageUrl: `/uploads/${req.file.filename}`,
        });

        await course.save();
        res.status(201).json({ message: 'Course added successfully!', course });
    } catch (error) {
        console.error('Error adding course:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Update a Course (No Authentication)
router.put('/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, difficulty, whatYouLearn } = req.body;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        // Update only if fields are provided
        course.name = name || course.name;
        course.description = description || course.description;
        course.price = price || course.price;
        course.category = category || course.category;
        course.difficulty = difficulty || course.difficulty;

        if (whatYouLearn) {
            course.whatYouLearn = Array.isArray(JSON.parse(whatYouLearn))
                ? JSON.parse(whatYouLearn)
                : course.whatYouLearn;
        }

        if (req.file) {
            course.imageUrl = `/uploads/${req.file.filename}`;
        }

        await course.save();
        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        console.error('Error updating course:', error.message);
        res.status(500).json({ error: 'Failed to update course' });
    }
});

// **Delete a Course** (No Authentication)
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error.message);
        res.status(500).json({ error: 'Failed to delete course', details: error.message });
    }
});

module.exports = router;
