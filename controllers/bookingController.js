const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  const { provider, slot, paymentStatus, amountPaid } = req.body;
  const user = req.user.id; // Get user ID from JWT token

  try {
    const newBooking = new Booking({
      user,
      provider,
      slot,
      paymentStatus: paymentStatus || 'completed',
      amountPaid: amountPaid || 0,
    });

    await newBooking.save();
    res.status(201).json({ msg: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all bookings for the logged-in user
exports.getBookings = async (req, res) => {
  const user = req.user.id;

  try {
    const bookings = await Booking.find({ user });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing booking
exports.updateBooking = async (req, res) => {
  const { bookingId } = req.params;
  const { slot } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { slot },
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ msg: 'Booking updated successfully', booking: updatedBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancel an existing booking
exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const canceledBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { paymentStatus: 'canceled' },
      { new: true }
    );
    if (!canceledBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ msg: 'Booking canceled successfully', booking: canceledBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
