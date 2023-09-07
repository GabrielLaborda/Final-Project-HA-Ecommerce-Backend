const { mongoose, Schema } = require("../db");
var slugify = require("slugify");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    picture: [
      {
        type: String,
        required: true,
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },

    category: { type: Schema.Types.ObjectId, ref: "Category" },

    featured: {
      type: Boolean,
      required: true,
    },

    slug: slugify(this.name, "-"),
    required: true,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
