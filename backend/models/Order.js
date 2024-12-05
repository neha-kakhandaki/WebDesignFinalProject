const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
            quantity: { type: Number, default: 1 },
        },
    ],
    totalPrice: { type: Number, required: true },
    paymentStatus: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
