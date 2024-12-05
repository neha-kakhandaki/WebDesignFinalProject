import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

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
                    padding: '50px 0',
                    marginBottom: '30px',
                    fontFamily: "'Playfair Display', serif",
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
                    Culinary Skills & Lifestyle Courses
                </h1>
                <p style={{ fontSize: '1.2rem', fontFamily: "'Open Sans', sans-serif" }}>
                    Master cooking and dietary skills with our expert-led courses.
                </p>
            </div>

            {/* Explore Courses Section */}
            <div
                className="container"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    paddingBottom: '50px',
                    fontFamily: "'Open Sans', sans-serif",
                }}
            >
                <h2
                    className="text-center mb-4"
                    style={{
                        fontSize: '2rem',
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
                            className="col-md-4 col-sm-6 col-12 mb-4"
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
