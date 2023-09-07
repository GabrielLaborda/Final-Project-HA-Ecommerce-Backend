const { mongoose, Schema } = require("../db");

const adminSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
