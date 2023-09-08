const { mongoose, Schema } = require('../db');

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, index: true, unique: true },
    picture: { type: String, required: false },
    description: { type: String, required: true },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
