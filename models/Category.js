const { mongoose, Schema } = require('../db');

const categorySchema = new Schema(
  {
    name: { type: String, required: true, index: true, unique: true },
    pictures: [],
    description: { type: String, required: true },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false,
      },
    ],
    slug: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
