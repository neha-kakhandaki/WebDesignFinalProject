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
        <div className="container py-5">
            <h1
                className="text-center mb-5"
                style={{
                    fontWeight: 'bold',
                    color: '#6a1b9a',
                    fontFamily: "'Playfair Display', serif",
                }}
            >
                Your Cart
            </h1>

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
                        onClick={() => navigate('/')}
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
                    <div className="col-lg-8">
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
                                        className="d-flex justify-content-between align-items-center mb-4"
                                        style={{
                                            borderBottom: '1px solid #e9ecef',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <div>
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
                                                }}
                                            >
                                                Price: ${item.price}
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-sm"
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
                            className="d-flex justify-content-between align-items-center p-3 rounded shadow"
                            style={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                marginTop: '20px',
                            }}
                        >
                            <h4
                                className="mb-0"
                                style={{
                                    fontWeight: 'bold',
                                    color: '#6a1b9a',
                                    fontFamily: "'Playfair Display', serif",
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
