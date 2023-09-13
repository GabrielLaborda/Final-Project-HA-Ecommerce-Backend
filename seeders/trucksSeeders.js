const Category = require('../models/Category');
const Product = require('../models/Product');
const slugify = require('slugify');

async function trucksSeeders() {
  const category = await Category.findOne({ name: 'Trucks' });
  const categoryId = category._id;
  const trucks = [
    {
      name: '8.0" GULLWING MISSION BLACK SINGLE TRUCK',
      description: `Width: 8.0"

    Geometry: Traditional
    
    Construction: Cast
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape: Short Cone/Barrel
    
    Bushing Durometer: 89a`,
      picture: ['MISSION-BLACK-ANGLE_441bee56-fa49-45ca-8846-ed8ce2566b75_2048x.webp'],
      price: 22.95,
      stock: 60,
      category: categoryId,
      featured: true,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II PURPLE SINGLE TRUCK',
      description: `Width: 9.0"

  Baseplate Angle: Not Applicable
  
  Geometry: Double
  
  Construction: Cast
  
  Hole Pattern: 6-Hole
  
  Rake: Not Applicable
  
  Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['SIDEWINDER-PURPLE-ANGLE_2048x.webp'],
      price: 39.95,
      stock: 65,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER BLACK SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Chubbie (89a)`,
      picture: ['CHARGER-BLACK-ANGLE_5dd862fa-a346-4bb6-a0d2-71aa50ed65b4_2048x.webp'],
      price: 25.95,
      stock: 70,
      category: categoryId,
      featured: true,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II BLACK SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['SIDEWINDER-BLACK-ANGLE_2048x.webp'],
      price: 39.95,
      stock: 55,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II SILVER SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['SIDEWINDER-SILVER-ANGLE_e186ca24-b180-43f1-8261-efbf8c1029cc_2048x.webp'],
      price: 36.9,
      stock: 30,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II RASTA SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['e4f7d93b2b13cca244998a78914ea9d5_19511081-3155-4ebc-9bf4-4e37ec240108_2048x.webp'],
      price: 39.95,
      stock: 80,
      category: categoryId,
      featured: true,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II AQUA SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['SIDEWINDER-AQUA-ANGLE_2048x.webp'],
      price: 39.95,
      stock: 86,
      category: categoryId,
      featured: true,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II BLUE SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['57da3ef1cb14306305069266a61d1f11_c81d4fc5-049c-4621-8949-d63ab9c356de_2048x.webp'],
      price: 39.95,
      stock: 70,
      category: categoryId,
      featured: true,
    },
    {
      name: '9.0" GULLWING CHARGER VAPOR SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-VAPOR-ANGLE_937e7cd6-702b-47db-986f-3961b9df0791_2048x.webp'],
      price: 27.95,
      stock: 70,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER SPECTRUM SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-SPECTRUM-ANGLE_b003faca-1d84-4d6d-a3ff-3f98d5f29b22_2048x.webp'],
      price: 25.95,
      stock: 80,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER PURPLE SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-PURPLE-ANGLE_2048x.webp'],
      price: 27.95,
      stock: 100,
      category: categoryId,
      featured: false,
    },
    {
      name: '10.0" GULLWING CHARGER LIME SINGLE TRUCK',
      description: `Width: 10.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-LIME-ANGLE_2048x.webp'],
      price: 27.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER ORANGE SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-ORANGE-BLUE-ANGLE_902801da-ae2a-47e1-8964-4355d087aa56_2048x.webp'],
      price: 25.95,
      stock: 70,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER SILVER BLACK SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-SILVER-BLACK-ANGLE_824f115c-d55e-49e2-a1e7-e2979a1ff186_2048x.webp'],
      price: 25.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER GOLD SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-GOLD-ANGLE_c789d1a0-72e6-4343-9044-65487287ef55_2048x.webp'],
      price: 25.95,
      stock: 40,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.0" GULLWING SHADOW BLACK SINGLE TRUCK',
      description: `Width: 8.0"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Color: Black
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLACK-ANGLE_059a62fd-d6ba-4b5e-94c7-870a720b42e7_2048x.webp'],
      price: 21.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '7.5" GULLWING SHADOW BLACK SINGLE TRUCK',
      description: `Width: 7.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Color: Black
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLACK-ANGLE_2048x.webp'],
      price: 16.95,
      stock: 70,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.5" GULLWING SHADOW SILVER SINGLE TRUCK',
      description: `Width: 8.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Color: Silver
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: [
        'SHADOW-SILVER-ANGLE_39928c76-ed00-46bb-92c1-45774c4879c4_2048x.webp',
        'SHADOW-SILVER-PROFILE_818407ac-fe48-4a27-ad1d-bf53f6ad135d_2048x.webp',
        'SHADOW-SILVER-FRONT_e314a513-0737-43d8-a4aa-3037e36e29b2_2048x.webp',
        'SHADOW-SILVER-BACK_262a2e4a-47e2-4313-9081-62a3f722eb0e_2048x.webp',
      ],
      price: 23.95,
      stock: 80,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.5" GULLWING SHADOW BLUE SINGLE TRUCK',
      description: `Width: 8.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLUE-ANGLE_433adc0d-4a32-4536-95cc-ac0a0915df99_2048x.webp'],
      price: 17.95,
      stock: 70,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.0" GULLWING SHADOW BLUE SINGLE TRUCK',
      description: `Width: 8.0"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLUE-ANGLE_433adc0d-4a32-4536-95cc-ac0a0915df99_2048x.webp'],
      price: 17.45,
      stock: 50,
      category: categoryId,
      featured: false,
    },
    {
      name: '7.5" GULLWING SHADOW BLUE SINGLE TRUCK',
      description: `Width: 7.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLUE-ANGLE_2048x.webp'],
      price: 21.95,
      stock: 50,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.5" GULLWING SHADOW GREEN SINGLE TRUCK',
      description: `Width: 8.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-AQUA-ANGLE_563d43d0-dc26-480c-b72e-aa7a85ba864c_2048x.webp'],
      price: 17.95,
      stock: 65,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.0" GULLWING SHADOW RASTA SINGLE TRUCK',
      description: `Width: 8.0"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Color: Black
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLACK-RASTA-ANGLE_2048x.webp'],
      price: 17.45,
      stock: 90,
      category: categoryId,
      featured: false,
    },
    {
      name: '7.5" GULLWING SHADOW RASTA SINGLE TRUCK',
      description: `Width: 7.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLACK-RASTA-ANGLE_2fb3adb6-6f15-467b-a7b8-6db6789b80d7_2048x.webp'],
      price: 16.95,
      stock: 100,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.5" GULLWING SHADOW RED SINGLE TRUCK',
      description: `Width: 8.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-RED-BLACK-ANGLE_d4653e6e-da27-4f2e-80f6-d99b35ad8db2_2048x.webp'],
      price: 17.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING SIDEWINDER II ORANGE SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['d676b085e1c1509beaade8f6b9218463_3e0a1172-65d3-4d9d-bd91-35d2a41f2ff3_2048x.webp'],
      price: 33.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER RESIN SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-RESIN-ANGLE_3ee8ab26-5a0e-4402-89d2-9d4125a0abb8_2048x.webp'],
      price: 25.95,
      stock: 80,
      category: categoryId,
      featured: false,
    },
    {
      name: '10.0" GULLWING SIDEWINDER II ORANGE SINGLE TRUCK',
      description: `Width: 10.0"

    Baseplate Angle: Not Applicable
    
    Geometry: Double
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Bushing Shape & Duro: Barrel/Cone (89a)`,
      picture: ['CHARGER-RESIN-ANGLE_3ee8ab26-5a0e-4402-89d2-9d4125a0abb8_2048x.webp'],
      price: 35.95,
      stock: 90,
      category: categoryId,
      featured: false,
    },
    {
      name: '10.0" GULLWING CHARGER SPECTRUM SINGLE TRUCK',
      description: `Width: 10.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['CHARGER-SPECTRUM-ANGLE_2048x.webp'],
      price: 27.95,
      stock: 96,
      category: categoryId,
      featured: false,
    },
    {
      name: '10.0" GULLWING CHARGER BLACK WITH BLUE SINGLE TRUCK',
      description: `Width: 10.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['10-Charger-Black-with-Blue_2048x.webp'],
      price: 29.95,
      stock: 55,
      category: categoryId,
      featured: false,
    },
    {
      name: '10.0" GULLWING ALPINE RAW (SILVER) SINGLE TRUCK',
      description: `Width: 10.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['gullwing-alpine-truck-Raw_2048x.webp'],
      price: 29.95,
      stock: 90,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.5" GULLWING 40 DEG RUBBER BLACK STALKER TRUCKS/ SET OF 2',
      description: `Width: 9.5"

    Baseplate Angle: 40°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)
    
    The Gullwing Stalker 9.5" rubber black concept trucks feature a patented Vibration Damping System built into the truck hanger that creates an incredibly smooth and quiet ride. The hanger is fitted on a 40 degree base and has cushioned ends built in both end of the hanger. The cushions prevent resonance in the hanger so you keep all four wheels on the street where others will drift.`,
      picture: [
        'gullwing-alpine-truck-Raw_2048x.webp',
        'captures_chrome-capture-2023-5-15_12_2048x.webp',
      ],
      price: 76.0,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.5" GULLWING 40 DEG SILVER STALKER TRUCKS/ SET OF 2',
      description: `Width: 9.5"

    Baseplate Angle: 40°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)
    
    
    The Gullwing Stalker 9.5" Raw/Silver concept trucks feature a patented Vibration Damping System built into the truck hanger that creates an incredibly smooth and quiet ride. The hanger is fitted on a 40 degree base and has cushioned ends built in both end of the hanger. The cushions prevent resonance in the hanger so you keep all four wheels on the street where others will drift.`,
      picture: [
        'captures_chrome-capture-2023-5-15_7_2048x.webp',
        'captures_chrome-capture-2023-5-15_8_2048x.webp',
        'captures_chrome-capture-2023-5-15_9_188x.webp',
        'captures_chrome-capture-2023-5-15_10_2048x.webp',
      ],
      price: 76.0,
      stock: 100,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER BLUE/BLACK/BLUE SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Chubbie (89a)`,
      picture: ['10-Charger-Black-with-Blue_48b466de-74f0-492d-84d4-105bd4e1787f_2048x.webp'],
      price: 25.95,
      stock: 60,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING CHARGER BLACK WITH BLUE SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Chubbie (89a)`,
      picture: [
        'captures_chrome-capture-2023-5-15_14_2048x.webp',
        'captures_chrome-capture-2023-5-15_13_2048x.webp',
      ],
      price: 25.95,
      stock: 80,
      category: categoryId,
      featured: false,
    },
    {
      name: '9.0" GULLWING ALPINE RAW (SILVER) SINGLE TRUCK',
      description: `Width: 9.0"

    Baseplate Angle: 50°
    
    Geometry: Reverse
    
    Construction: Cast
    
    Hole Pattern: 6-Hole
    
    Rake: No
    
    Bushing Shape & Duro: Cone/Cone (89a)`,
      picture: ['gullwing-alpine-truck-Raw_efc9f101-a340-4626-aa89-73610fcd51dd_2048x.webp'],
      price: 29.95,
      stock: 88,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.0" GULLWING SHADOW SILVER SINGLE TRUCK - USA MADE',
      description: `Width: 8.0"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Color: Silver
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: [
        'SHADOW-SILVER-ANGLE_74a9841c-c03e-440d-ba1c-051d1c937069_2048x.webp',
        'SHADOW-SILVER-PROFILE_908620e7-1777-408b-aa8b-d0a3dd1576cc_2048x.webp',
        'SHADOW-SILVER-FRONT_0363fdd2-d2ed-4609-83c3-277d14d0f139_2048x.webp',
        ' SHADOW-SILVER-BACK_5305306f-92cc-4a8b-87ff-43061cde09cf_2048x.webp',
      ],
      price: 23.95,
      stock: 100,
      category: categoryId,
      featured: false,
    },
    {
      name: '8.5" GULLWING SHADOW BLACK SINGLE TRUCK',
      description: `Width: 8.5"

    Geometry: Traditional
    
    Baseplate Angle: Not Applicable
    
    Hole Pattern: 6-Hole
    
    Rake: Not Applicable
    
    Color: Black
    
    Bushing Shape & Duro: Short Cone/Barrel (89a)`,
      picture: ['SHADOW-BLACK-ANGLE_ae32bee1-dabf-43a3-8832-7c466eef3b39_2048x.webp'],
      price: 25.95,
      stock: 35,
      category: categoryId,
      featured: false,
    },
  ];

  for (const product of trucks) {
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
  console.log('Los seeders de Trucks fueron insertados!');
}

module.exports = trucksSeeders;
