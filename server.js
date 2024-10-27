// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const Razorpay = require('razorpay'); // Import Razorpay SDK

const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const providerRoutes = require('./routes/providerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Key ID from Razorpay dashboard
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Key Secret from Razorpay dashboard
});

// Razorpay order creation endpoint
app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body; // Amount in INR

  const options = {
    amount: amount * 100, // Razorpay expects amount in paise
    currency: 'INR',
    receipt: `receipt_${Math.random().toString(36).substring(7)}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: error.message });
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/providers', providerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const keepAliveUrl = 'https://dhatchanandcogasbooking.onrender.com';

function keepAlive() {
  axios.get(keepAliveUrl)
    .then(response => {
      console.log(`Pinged at ${new Date().toISOString()}: Status ${response.status}`);
    })
    .catch(error => {
      console.error(`Error pinging at ${new Date().toISOString()}:`, error.message);
    });
}

// Ping every 5 minutes
setInterval(keepAlive, 5 * 60 * 1000); // 5 minutes in milliseconds