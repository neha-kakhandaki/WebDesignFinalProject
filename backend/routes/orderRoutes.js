const express = require('express');
const Order = require('../models/Order');
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51QQav9BpwYU6d9vYn3gHD7Z3jzuebE7ZpVQC5uaRNO9xRcm4dx4KwtX0MjvXPD9fJ71G69DIkV6MYctGwaHfKZfj00bdq04Qtj'); // Replace with your Stripe secret key

const router = express.Router();

/**
 * Route: POST /place-order
 * Description: Place an order with Stripe Payment verification
 * Request Body:
 * - userId: ID of the user placing the order (must be passed in request body)
 * - items: Array of cart items
 * - totalPrice: Total price of the order
 * - paymentIntentId: Stripe payment intent ID
 */
router.post('/place-order', async (req, res) => {
    const { userId, items, totalPrice, paymentIntentId } = req.body;

    // Log the request body for debugging
    console.log('Order request body:', req.body);

    if (!userId) {
        console.error('User ID is missing in request body.');
        return res.status(400).json({ error: 'User ID is required to place an order.' });
    }

    try {
        // Step 1: Verify the payment intent with Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ error: 'Payment verification failed. Payment not successful.' });
        }

        // Step 2: Create a new order in the database
        const order = new Order({
            userId,
            items,
            totalPrice,
            paymentStatus: 'Success',
        });

        await order.save();

        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        console.error('Error in /place-order:', error.message);
        res.status(500).json({ error: 'Failed to place the order. Please try again.' });
    }
});


/**
 * Route: POST /payment
 * Description: Create a Stripe PaymentIntent
 * Request Body:
 * - amount: Total amount for the order in USD
 */
router.post('/payment', async (req, res) => {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount specified.' });
    }

    try {
        // Step 1: Create a PaymentIntent with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency: 'usd',
            payment_method_types: ['card'],
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error in /payment:', error.message);
        res.status(500).json({ error: 'Failed to create payment intent. Please try again.' });
    }
});

module.exports = router;
