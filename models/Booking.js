const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  provider: { type: String, required: true },
  slot: { type: Date, required: true },
  paymentStatus: { type: String, default: 'pending' }, // New field for payment status
  amountPaid: { type: Number, default: 0 }, // New field for amount paid
});

module.exports = mongoose.model('Booking', bookingSchema);
