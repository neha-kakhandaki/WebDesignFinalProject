import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CourseCard = ({ course, onCartChange }) => {
    const backendUrl = 'http://localhost:5000';
    const [added, setAdded] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = cartData.find((item) => item._id === course._id);
        setAdded(!!cartItem); // Check if the course is in the cart
    }, [course._id]);

    const addToCart = () => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cartData.find((item) => item._id === course._id)) {
            const updatedCart = [...cartData, { ...course, quantity: 1 }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            setAdded(true);
            if (onCartChange) onCartChange(updatedCart); // Notify parent about cart change
        }
    };

    const toggleModal = () => setShowModal(!showModal);

    return (
        <>
            {/* Main Course Card */}
            <div
                className="card shadow-sm"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    height: '100%',
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0px 15px 25px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.2)';
                }}
            >
                {/* Course Image */}
                <img
                    src={`${backendUrl}${course.imageUrl}`}
                    alt={course.name}
                    style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '15px 15px 0 0',
                    }}
                />
                {/* Course Details */}
                <div className="card-body d-flex flex-column">
                    <h5
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#6a1b9a', // Purple text for the title
                            marginBottom: '10px',
                            fontFamily: "'Playfair Display', serif",
                        }}
                    >
                        {course.name}
                    </h5>
                    <p
                        style={{
                            fontSize: '0.95rem',
                            color: '#555',
                            marginBottom: '15px',
                            fontFamily: "'Open Sans', sans-serif",
                        }}
                    >
                        {course.description}
                    </p>
                    <p>
                        <strong>Category:</strong> {course.category}
                    </p>
                    <p>
                        <strong>Difficulty:</strong> {course.difficulty}
                    </p>
                    {/* Price Label */}
                    <p
                        style={{
                            fontWeight: 'bold',
                            color: '#6a1b9a', // Purple text for the price
                            marginBottom: '15px',
                        }}
                    >
                        <strong>Price:</strong> ${course.price}
                    </p>
                    {/* Buttons */}
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-outline-primary"
                            onClick={toggleModal}
                            style={{
                                fontWeight: 'bold',
                                borderRadius: '5px',
                            }}
                        >
                            Course Details
                        </button>
                        {added ? (
                            <button
                                className="btn btn-success"
                                disabled
                                style={{
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    cursor: 'not-allowed',
                                }}
                            >
                                Added to Cart
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={addToCart}
                                style={{
                                    backgroundColor: '#6a1b9a', // Purple button for "Add to Cart"
                                    color: 'white',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#501e78')} // Darker purple on hover
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6a1b9a')}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal for Course Details */}
            <Modal show={showModal} onHide={toggleModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{course.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <strong>Description:</strong> {course.description}
                    </p>
                    <p>
                        <strong>Category:</strong> {course.category}
                    </p>
                    <p>
                        <strong>Difficulty:</strong> {course.difficulty}
                    </p>
                    <p>
                        <strong>Price:</strong> ${course.price}
                    </p>
                    <p>
                        <strong>What You'll Learn:</strong>
                    </p>
                    {course.whatYouLearn && course.whatYouLearn.length > 0 ? (
                        <ul>
                            {course.whatYouLearn.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No additional details provided.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                    {!added && (
                        <Button variant="primary" onClick={addToCart}>
                            Add to Cart
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CourseCard;
