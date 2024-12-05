require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const { connectDB, JWT_SECRET } = require('./config');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewsRoutes = require('./routes/reviewRoutes'); 
const { authenticate, adminMiddleware } = require('./middleware/authMiddleware');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


console.log('Environment:', process.env.NODE_ENV);

// Serve static files for existing and uploaded images
app.use('/images', express.static(path.join(__dirname, 'public/images'))); // Existing images
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Uploaded images

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads')); // Upload directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Append timestamp to filename
    },
});

const upload = multer({ storage });

// File upload endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
    try {
        res.status(200).json({
            message: 'File uploaded successfully',
            imageUrl: `/uploads/${req.file.filename}`,
        });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ error: 'File upload failed' });
    }
});

// Connect to Database
connectDB();

// Routes
app.use('/api/users', userRoutes); // Public routes for user registration and login
// Course routes (all access controlled inside courseRoutes.js)
app.use('/api/courses', courseRoutes);

app.use('/api/orders', orderRoutes); // Authenticated routes for orders
app.use('/api', reviewsRoutes); // Added reviews route

// Admin-only route example
app.get('/api/admin', authenticate, adminMiddleware, (req, res) => {
    res.status(200).json({ message: 'Welcome, Admin!' });
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 