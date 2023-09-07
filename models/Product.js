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

// tweetSchema.virtual('timeInterval').get(function() {
//   const interval = dateFns.intervalToDuration({
//       start: this.createdAt,
//       end: new Date(),
//   })
//   if (interval.years) return interval.years+"Y";
//   if (interval.months) return interval.months+"M";
//   if (interval.days) return interval.days+"D";
//   if (interval.hours) return interval.hours+"H";
//   return interval.minutes+"M";
// })

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
