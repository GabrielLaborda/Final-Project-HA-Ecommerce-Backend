const { mongoose, Schema } = require('../db');

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
