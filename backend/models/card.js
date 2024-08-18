const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: ''
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

