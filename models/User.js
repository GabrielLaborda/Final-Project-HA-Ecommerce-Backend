const { mongoose, Schema } = require("../db");

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    adress: String,
    phone: String,
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
