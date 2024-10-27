// controllers/providerController.js
const Provider = require('../models/Provider');

// Fetch all gas providers
exports.getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new gas provider (for testing purposes)
exports.addProvider = async (req, res) => {
  const { name, location, type, contact, availableSlots, rating, description } = req.body;

  try {
    const newProvider = new Provider({ name, location, type, contact, availableSlots, rating, description });
    await newProvider.save();
    res.status(201).json({ msg: 'Provider added successfully', provider: newProvider });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
