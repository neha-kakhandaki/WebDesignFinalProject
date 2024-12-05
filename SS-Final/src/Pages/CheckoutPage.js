import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutPage = () => {
    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState({
        name: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
    });
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);

        if (cartData.length > 0) {
            const fetchPaymentIntent = async () => {
                const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);
                try {
                    const { data } = await axios.post('http://localhost:5000/api/orders/payment', { amount: totalPrice });
                    setClientSecret(data.clientSecret);
                } catch (error) {
                    console.error('Error fetching payment intent:', error.response?.data || error.message);
                }
            };
            fetchPaymentIntent();
        }
    }, []);

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async () => {
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: address.name,
                        email: address.email,
                    },
                },
            });

            if (error) {
                alert(error.message);
                return;
            }

            if (paymentIntent.status === 'succeeded') {
                const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
                await axios.post('http://localhost:5000/api/orders/place-order', {
                    userId: '6748ff586dfab0d021f611bf', // Replace with actual user ID logic
                    items: cart,
                    totalPrice,
                    paymentIntentId: paymentIntent.id,
                });

                alert('Order placed successfully!');
                localStorage.removeItem('cart');
                setCart([]);
                navigate('/confirmation');
            }
        } catch (error) {
            console.error('Order placement error:', error.response?.data || error.message);
            alert('Error placing order. Please try again.');
        }
    };

    const isFormValid = () => {
        return (
            address.name &&
            address.email &&
            address.phone &&
            address.addressLine1 &&
            address.city &&
            address.state &&
            address.zip
        );
    };

    return (
        <div className="container py-4">
            <div className="row">
                {/* Address and Payment Details */}
                <div className="col-lg-8 col-md-12">
                    <h2
                        className="mb-4"
                        style={{
                            fontWeight: 'bold',
                            color: '#6a1b9a',
                            fontFamily: "'Playfair Display', serif",
                        }}
                    >
                        Checkout
                    </h2>

                    {/* Shipping Address */}
                    <div className="mb-4">
                        <h4
                            className="mb-3"
                            style={{
                                fontWeight: 'bold',
                                color: '#6a1b9a',
                                fontFamily: "'Playfair Display', serif",
                            }}
                        >
                            Shipping Address
                        </h4>
                        <form>
                            <div className="row g-3">
                                {[
                                    { name: 'name', label: 'Name', type: 'text' },
                                    { name: 'email', label: 'Email', type: 'email' },
                                    { name: 'phone', label: 'Phone', type: 'text' },
                                ].map(({ name, label, type }) => (
                                    <div key={name} className="col-md-6 col-12">
                                        <label
                                            className="form-label"
                                            style={{
                                                color: '#6c757d',
                                                fontWeight: 'bold',
                                                fontFamily: "'Open Sans', sans-serif",
                                            }}
                                        >
                                            {label}
                                        </label>
                                        <input
                                            type={type}
                                            className="form-control"
                                            name={name}
                                            value={address[name]}
                                            onChange={handleAddressChange}
                                            required
                                        />
                                    </div>
                                ))}
                                {[
                                    { name: 'addressLine1', label: 'Address Line 1', type: 'text' },
                                    { name: 'addressLine2', label: 'Address Line 2 (Optional)', type: 'text' },
                                    { name: 'city', label: 'City', type: 'text' },
                                    { name: 'state', label: 'State', type: 'text' },
                                    { name: 'zip', label: 'ZIP Code', type: 'text' },
                                ].map(({ name, label, type }) => (
                                    <div key={name} className={`col-md-${name === 'addressLine1' ? '12' : '4'} col-12`}>
                                        <label
                                            className="form-label"
                                            style={{
                                                color: '#6c757d',
                                                fontWeight: 'bold',
                                                fontFamily: "'Open Sans', sans-serif",
                                            }}
                                        >
                                            {label}
                                        </label>
                                        <input
                                            type={type}
                                            className="form-control"
                                            name={name}
                                            value={address[name]}
                                            onChange={handleAddressChange}
                                            required={name !== 'addressLine2'}
                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>

                    {/* Payment Details */}
                    <div className="mb-4">
                        <h4
                            className="mb-3"
                            style={{
                                fontWeight: 'bold',
                                color: '#6a1b9a',
                                fontFamily: "'Playfair Display', serif",
                            }}
                        >
                            Payment Details
                        </h4>
                        <form
                            className="p-3 border rounded"
                            style={{
                                backgroundColor: '#f8f9fa',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            fontFamily: "'Open Sans', sans-serif",
                                            color: '#495057',
                                            '::placeholder': { color: '#6c757d' },
                                        },
                                        invalid: {
                                            color: '#dc3545',
                                            iconColor: '#dc3545',
                                        },
                                    },
                                    hidePostalCode: true,
                                }}
                            />
                        </form>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="col-lg-4 col-md-12 mt-md-4">
                    <div
                        className="card shadow-sm"
                        style={{
                            borderRadius: '10px',
                            border: 'none',
                        }}
                    >
                        <div
                            className="card-header"
                            style={{
                                backgroundColor: '#6a1b9a',
                                color: 'white',
                                fontWeight: 'bold',
                                fontFamily: "'Playfair Display', serif",
                                textAlign: 'center',
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                            }}
                        >
                            <h5 className="mb-0" style={{ color: 'white' }}> {/* Heading font color set to white */}
                Order Summary
            </h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            {cart.map((item) => (
                                <li
                                    key={item._id}
                                    className="list-group-item d-flex justify-content-between"
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        color: '#333',
                                    }}
                                >
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="card-body">
                            <h5
                                className="text-end"
                                style={{
                                    fontWeight: 'bold',
                                    color: '#6a1b9a',
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                            </h5>
                            <button
                                className="btn w-100 mt-3"
                                onClick={handlePlaceOrder}
                                disabled={!isFormValid() || !stripe || !elements}
                                style={{
                                    backgroundColor: '#6a1b9a',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontFamily: "'Open Sans', sans-serif",
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                }}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
