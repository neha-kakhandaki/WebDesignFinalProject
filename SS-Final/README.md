# Spoonful Stories

## Overview
Spoonful Stories is an engaging, React-based food blog website designed for culinary enthusiasts. It serves as a comprehensive platform where users can explore recipes, register for cooking courses, and interact with an AI-powered chatbox for personalized assistance. This platform fosters a vibrant community of food lovers while providing tools for learning and sharing culinary experiences.

The Spoonful Stories platform combines intuitive design and robust functionality to deliver an exceptional user experience. It is built using a modern tech stack, including React for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage.

The platform is equipped with responsive layouts, role-based access, payment integration using the Stripe API, and seamless navigation. Users can interact with content through reviews and ratings, register for cooking courses, and receive tailored advice from the AI-powered chatbox.

---

## Key Features

### For Users
- **Explore Recipes**: Browse a variety of recipes, complete with images, ingredients, and step-by-step instructions.
- **Submit Reviews**: Share experiences by submitting reviews and ratings for recipes.
- **Register for Cooking Courses**: Enroll in exclusive cooking courses.
- **Interact with AI Chatbox**: Get personalized culinary assistance, including recipe recommendations and cooking tips.
- **Mobile-Friendly Interface**: Enjoy seamless accessibility across all devices.

### For Admins
- **Content Management**: Add, edit, or delete recipes and courses as needed.
- **User Management**: Access user data and manage course registrations.
- **Platform Monitoring**: Oversee platform activity and ensure compliance with community standards.

---

## Technology Stack

### Frontend
- **React**: Dynamic and responsive UI.
- **CSS and Bootstrap**: Styling for a visually appealing and responsive experience.

### Backend
- **Node.js and Express.js**: Server-side logic with API framework.

### Database
- **MongoDB**: NoSQL database for storing user data, recipes, reviews, and course registrations.

### Integrations
- **Stripe API**: Secure payment processing for cooking courses.
- **AI API**: Powers the chatbox for tailored suggestions and advice.

---

## Roles and Permissions

### Admin Role
- **Recipe Management**: Add, update, or delete recipes.
- **Course Management**: Create and manage cooking courses.
- **User Monitoring**: Manage user registrations and oversee platform activities.

### User Role
- **Browse Recipes**: View detailed recipes and images.
- **Submit Reviews**: Share opinions and rate recipes.
- **Register for Courses**: Enroll in cooking classes with payment support.
- **Interact with the AI Chatbox**: Receive personalized culinary guidance.

---

## Functional Components

### Frontend Components
- **Cards**: Display recipes and courses in a visually appealing grid format.
- **Carousel**: Highlight featured recipes or upcoming courses.
- **Modal**: Display detailed information or interactions, such as course registration.
- **Offcanvas Navigation**: Provide an intuitive and collapsible menu for navigation.
- **Buttons and Badges**: Enhance interactivity and provide notifications or counters.
- **Tabs**: Organize content into easy-to-access sections, such as reviews or instructions.
- **Progress Bars**: Represent task progress, such as completing a recipe or course.
- **Forms**: Allow users to submit input, such as registering for courses or submitting reviews.

### Backend Architecture
The backend adheres to a RESTful API structure with clearly defined endpoints for:
- **Authentication**: Handles user registration and login with secure password encryption.
- **Recipes**: Provides CRUD operations for recipes.
- **Courses**: Manages courses, including registrations and payments.
- **Reviews**: Allows users to submit and view reviews for recipes.

---