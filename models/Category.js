const { mongoose, Schema } = require("../db");

const CategorySchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: false },
  description: { type: String, required: true },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: false,
    },
  ],
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
