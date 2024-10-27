const express = require('express');
const { updateBooking, cancelBooking, getBookings, createBooking } = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new booking
router.post('/create', auth, createBooking);

// Get user bookings
router.get('/', auth, getBookings);

// Update a booking
router.put('/:bookingId/update', auth, updateBooking);

// Cancel a booking
router.put('/:bookingId/cancel', auth, cancelBooking);

module.exports = router;
