const Category = require('../models/Category');
const Product = require('../models/Product');
const slugify = require('slugify');

async function wheelsSeeders() {
  const category = await Category.findOne({ name: 'Wheels' });
  const categoryId = category._id;
  const wheels = [
    {
      name: '74MM 78A NINEBALLS GREY',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    74mm Diameter
    78A Durometer
    50mm Contact Patch
    
    FEATURES
    Nineball Urethane
    Better Roll Speed
    Sharp Lip Shape for Extra Grip
    Offset Core
    Natural Finish Provides Extra Grip
    Larger Size Rolls Over Debris and Imperfections
    Larger Size Helps Hold Speed Longer`,
      picture: [
        '74MM-78A-NINEBALLS-GREY-temporary_2048x.webp',
        '74MM-78A-NINEBALLS-GREY-ANGLE-temporary_2048x.webp',
      ],
      price: 49.95,
      stock: 83,
      category: categoryId,
      featured: false,
    },

    {
      name: '69MM 78A NINEBALLS LIGHT BLUE',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    69mm Diameter
    78A Durometer
    49mm Contact Patch 
    
    FEATURES
    Nineball Urethane
    Better Roll Speed
    Sharp Lip Shape for Extra Grip
    Offset Core
    Natural Finish Provides Extra Grip
    Large Size Rolls Over Debris and Imperfections
    Large Size Helps Hold Speed Longer`,
      picture: [
        '69MM-78A-NINEBALLS-LT-BLUE_2048x.webp',
        '69MM-78A-NINEBALLS-LT-BLUE-ANGLE_2048x.webp',
      ],
      price: 48.95,
      stock: 5,
      category: categoryId,
      featured: false,
    },

    {
      name: '69MM 78A NINEBALLS SMOKE',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    69mm Diameter
    78A Durometer
    49mm Contact Patch 
    
    FEATURES
    Nineball Urethane
    Better Roll Speed
    Sharp Lip Shape for Extra Grip
    Offset Core
    Natural Finish Provides Extra Grip
    Large Size Rolls Over Debris and Imperfections
    Large Size Helps Hold Speed Longer`,
      picture: ['69MM-78A-NINEBALLS-SMOKE_2048x.webp', '69MM-78A-NINEBALLS-SMOKE-ANGLE_1200x.webp'],
      price: 48.95,
      stock: 72,
      category: categoryId,
      featured: false,
    },
    {
      name: '61MM 78A NINEBALLS SMOKE',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    61mm Diameter
    78a Durometer
    32mm Contact Patch
    
    FEATURES
    Good Roll Speed
    Round Lips for Smooth Slides over Cracks and Road Imperfections
    Stoneground for Immediate Slides
    Centerset Core`,
      picture: ['61MM-SMOKE_2048x.webp', '61MM-SMOKE-ANGLE_1200x.webp'],
      price: 31.95,
      stock: 52,
      category: categoryId,
      featured: false,
    },
    {
      name: '61MM 80A BUTTERBALLS',
      description: `The 61mm 80a Butterballs offer the same shred-able formula that's become a fan favorite for so many riders over the years, but in a more compact package. The new 61mm size is now an ideal fit on your double kick, and perfect for just about any freeride situation. While it's the same urethane formula and Durometer as our 65mm and 70mm wheels, you might find a little better control and responsiveness with this smaller version of the Butterball.

    *All wheels are sold as a set of 4
    
    SPECS
    61mm Diameter
    80a Durometer
    39mm Contact Patch
    
    FEATURES
    Butterballs Slide Formula
    Round Lips for Smooth Slides over Cracks and Road Imperfections
    Stoneground for Immediate Slides
    Centerset Core`,
      picture: ['61MM-BUTTERBALLS-FRONT_2048x.webp', '61MM-BUTTERBALLS-ANGLE_2048x.webp'],
      price: 35.95,
      stock: 20,
      category: categoryId,
      featured: false,
    },
    {
      name: '58MM 78A NINEBALLS WARM RED',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding hipsters, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    58mm Diameter
    78A Durometer
    39mm Contact Patch
    
    FEATURES
    Good Roll Speed
    Natural finish for speed and grip
    Lipped Shape for Added Grip
    Offset Core
    Small Enough to be a Shortboard Filmer Wheel`,
      picture: [
        '58MM-78A-NINEBALLS-WARM-RED_2048x.webp',
        '58MM-78A-NINEBALLS-WARM-RED-ANGLE_1200x.webp',
      ],
      price: 33.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '74MM 78A NINEBALLS RED',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    74mm Diameter
    78A Durometer
    50mm Contact Patch
    
    FEATURES
    Nineball Urethane
    Better Roll Speed
    Sharp Lip Shape for Extra Grip
    Offset Core
    Natural Finish Provides Extra Grip
    Larger Size Rolls Over Debris and Imperfections
    Larger Size Helps Hold Speed Longer`,
      picture: ['74MM-78A-NINEBALLS-RED_2048x.webp', '74MM-78A-NINEBALLS-RED-ANGLE_1200x.webp'],
      price: 49.95,
      stock: 67,
      category: categoryId,
      featured: false,
    },
    {
      name: '69MM 78A NINEBALLS RED',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.

    *All wheels are sold as a set of 4
    
    SPECS
    69mm Diameter
    78A Durometer
    49mm Contact Patch 
    
    FEATURES
    Nineball Urethane
    Better Roll Speed
    Sharp Lip Shape for Extra Grip
    Offset Core
    Natural Finish Provides Extra Grip
    Large Size Rolls Over Debris and Imperfections
    Large Size Helps Hold Speed Longer`,
      picture: ['69MM-78A-NINEBALLS-RED_2048x.webp', '69MM-78A-NINEBALLS-RED-ANGLE_1200x.webp'],
      price: 48.95,
      stock: 68,
      category: categoryId,
      featured: false,
    },
  ];

  for (const product of wheels) {
    const newProduct = new Product({
      name: product.name,
      description: product.description,
      picture: product.picture,
      price: product.price,
      stock: product.stock,
      category: product.category,
      featured: product.featured,
      slug: slugify(product.name, { lower: true, strict: true }),
    });
    await newProduct.save();

    category.products.push(newProduct._id);
    await category.save();
  }
  console.log('Los seeders de Wheels fueron insertados!');
}

module.exports = wheelsSeeders;
