const { mongoose, Schema } = require("../db");

const CategorySchema = new Schema({
  name: String,
  picture: String,
  description: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
