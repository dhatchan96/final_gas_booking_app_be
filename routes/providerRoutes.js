// routes/providerRoutes.js
const express = require('express');
const { getProviders, addProvider } = require('../controllers/providerController');
const router = express.Router();

// Route to get all providers
router.get('/', getProviders);

// Route to add a new provider (for testing purposes)
router.post('/add', addProvider);

module.exports = router;
