const { mongoose, Schema } = require("../db");

const orderStatusSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
});

const OrderStatus = mongoose.model("OrderStatus", orderStatusSchema);

module.exports = OrderStatus;
