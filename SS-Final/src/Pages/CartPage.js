import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }, []);

    const removeItem = (courseId) => {
        const updatedCart = cart.filter((item) => item._id !== courseId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="container py-4">
            {/* Additional Header Section */}
            <div className="mb-5">
                <h1
                    className="text-center"
                    style={{
                        fontWeight: 'bold',
                        color: '#6a1b9a',
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2.5rem',
                    }}
                >
                    Your Cart
                </h1>
                <p
                    className="text-center"
                    style={{
                        color: '#6c757d',
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: '1.2rem',
                        marginTop: '10px',
                    }}
                >
                    This is the Cart Page where you can view your selected items.
                </p>
            </div>

            {/* Main Cart Section */}
            {cart.length === 0 ? (
                <div className="text-center">
                    <p
                        className="lead"
                        style={{
                            color: '#6c757d',
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '1.2rem',
                        }}
                    >
                        Your cart is empty!
                    </p>
                    <button
                        className="btn"
                        onClick={() => navigate('/courses')}
                        style={{
                            backgroundColor: '#6a1b9a',
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: "'Open Sans', sans-serif",
                            padding: '10px 20px',
                            borderRadius: '5px',
                        }}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        {/* Cart Items */}
                        <div
                            className="card mb-4 shadow"
                            style={{
                                borderRadius: '10px',
                                border: 'none',
                            }}
                        >
                            <div className="card-body">
                                {cart.map((item) => (
                                    <div
                                        key={item._id}
                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap"
                                        style={{
                                            borderBottom: '1px solid #e9ecef',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <div style={{ flex: '1', minWidth: '200px' }}>
                                            <h5
                                                className="mb-1"
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: '#6a1b9a',
                                                    fontFamily: "'Playfair Display', serif",
                                                }}
                                            >
                                                {item.name}
                                            </h5>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    color: '#6c757d',
                                                    fontFamily: "'Open Sans', sans-serif",
                                                    fontSize: '0.9rem',
                                                }}
                                            >
                                                Price: ${item.price}
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-sm mt-2 mt-md-0"
                                            onClick={() => removeItem(item._id)}
                                            style={{
                                                backgroundColor: '#dc3545',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontFamily: "'Open Sans', sans-serif",
                                                padding: '5px 10px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Total and Checkout */}
                        <div
                            className="d-flex justify-content-between align-items-center p-3 rounded shadow flex-wrap"
                            style={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                marginTop: '20px',
                            }}
                        >
                            <h4
                                className="mb-3 mb-md-0"
                                style={{
                                    fontWeight: 'bold',
                                    color: '#6a1b9a',
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '1.5rem',
                                }}
                            >
                                Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                            </h4>
                            <button
                                className="btn btn-lg"
                                onClick={handleCheckout}
                                style={{
                                    backgroundColor: '#6a1b9a',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontFamily: "'Open Sans', sans-serif",
                                    padding: '10px 30px',
                                    borderRadius: '5px',
                                    flexShrink: 0,
                                }}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
