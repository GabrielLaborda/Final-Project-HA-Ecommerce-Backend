const { mongoose, Schema } = require('../db');

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    status: {
      type: Schema.Types.ObjectId,
      ref: 'OrderStatus',
      required: true,
    },
    subtotal: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
