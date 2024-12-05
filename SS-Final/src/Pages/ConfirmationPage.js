import React from 'react';

const ConfirmationPage = () => {
    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{
                minHeight: '80vh',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                padding: '10px',
            }}
        >
            {/* Background GIF */}
            <img
                src="https://i.pinimg.com/originals/9a/2d/47/9a2d47b8b01a4f8fe79ad4f149ef4153.gif" // Replace with your preferred GIF URL
                alt="Background GIF"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            />
            {/* Overlay Content */}
            <div
                className="text-center"
                style={{
                    zIndex: 2,
                    color: 'white',
                    fontFamily: "'Playfair Display', serif",
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                    padding: '20px',
                    background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for better readability
                    borderRadius: '15px',
                    width: '90%', // Adjust width for responsiveness
                    maxWidth: '500px', // Limit max width for larger screens
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem', // Adjust for smaller screens
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    Thank You!
                </h1>
                <p
                    style={{
                        fontSize: '1rem', // Adjust font size for readability
                        marginBottom: '30px',
                        fontFamily: "'Open Sans', sans-serif",
                    }}
                >
                    Your courses have been successfully purchased. Happy learning!
                </p>
                <button
                    className="btn btn-light"
                    style={{
                        color: '#6a1b9a',
                        fontWeight: 'bold',
                        fontFamily: "'Open Sans', sans-serif",
                        padding: '10px 20px',
                        borderRadius: '5px',
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => (window.location.href = '/home')}
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default ConfirmationPage;
