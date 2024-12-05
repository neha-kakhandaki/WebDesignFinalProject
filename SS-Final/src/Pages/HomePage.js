import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../Components/CourseCard';

const HomePage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const { data } = await axios.get('http://localhost:5000/api/courses');
            setCourses(data);
        };

        fetchCourses();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div
                className="text-center"
                style={{
                    background: 'linear-gradient(135deg, #6a1b9a, #8e44ad)', // Purple gradient
                    color: 'white',
                    padding: '40px 20px', // Adjusted padding for smaller screens
                    marginBottom: '30px',
                    fontFamily: "'Playfair Display', serif",
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem', // Smaller font size for better fit
                        fontWeight: 'bold',
                        marginBottom: '15px',
                    }}
                >
                    Culinary Skills & Lifestyle Courses
                </h1>
                <p
                    style={{
                        fontSize: '1rem', // Smaller font size for mobile
                        fontFamily: "'Open Sans', sans-serif",
                    }}
                >
                    Master cooking and dietary skills with our expert-led courses.
                </p>
            </div>

            {/* Explore Courses Section */}
            <div
                className="container"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    paddingBottom: '30px', // Reduced padding for smaller screens
                    fontFamily: "'Open Sans', sans-serif",
                }}
            >
                <h2
                    className="text-center mb-4"
                    style={{
                        fontSize: '1.8rem', // Adjusted font size for responsiveness
                        fontWeight: 'bold',
                        color: '#6a1b9a', // Deep purple for the heading
                        textTransform: 'uppercase',
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: '1px',
                    }}
                >
                    Explore Our Courses
                </h2>
                <div className="row">
                    {courses.map((course) => (
                        <div
                            key={course._id}
                            className="col-lg-4 col-md-6 col-sm-12 mb-4" // Bootstrap grid for responsive layout
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
