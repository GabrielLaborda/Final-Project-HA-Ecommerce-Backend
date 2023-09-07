const { mongoose, Schema } = require("../db");

const orderStatusSchema = new Schema({
  status: String,
});

const OrderStatus = mongoose.model("OrderStatus", orderStatusSchema);

module.exports = OrderStatus;
