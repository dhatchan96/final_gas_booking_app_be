// models/Provider.js
const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  contact: { type: String, required: true },
  availableSlots: [{ type: Date, required: true }],
  rating: { type: Number, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Provider', providerSchema);
