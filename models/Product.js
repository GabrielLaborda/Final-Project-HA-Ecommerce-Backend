const { mongoose, Schema } = require('../db');

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

    picture: {
      type: [],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },

    category: { type: Schema.Types.ObjectId, ref: 'Category' },

    featured: {
      type: Boolean,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
