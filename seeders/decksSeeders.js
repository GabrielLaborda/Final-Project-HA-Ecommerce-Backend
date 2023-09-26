const Category = require('../models/Category');
const Product = require('../models/Product');
const slugify = require('slugify');

async function decksSeeders() {
  const category = await Category.findOne({ name: 'Decks' });
  const categoryId = category._id;
  const decks = [
    {
      name: 'HOPPER DIVIDE DECK',
      description: `Yin and Yang. Light and Dark. Left and Right. Subtle and Forthright. The new Divided Collection embraces the idea of balance through opposition, with outward simplicity masking detail and complexity. The boards feature split Maple bottom plies for a contrast of color and lack thereof. While the black and white graphics above the wood appear relatively flat in color, they cover raised a marbled texture the pops in the light, giving these graphic a “hand.” The longer you hold one of the boards, the more detail you’ll notice, and that’s what we love.
  
      RIDING STYLE
      Cruiser
       
      DIMENSIONS
      Length: 27.5”
      Width: 7.5”
      Wheelbase: 14.0”
      
      FEATURES
      7 Ply Maple
      Maple Two-Color Split Bottom Ply
      Raised Texture Print Under Black and White
      Die-Cut Grip with Exposed Colored Top Ply
      Kicktail`,
      picture: [
        'hopper_divide_deck_1.webp',
        'hopper_divide_deck_2.webp',
        'hopper_divide_deck_3.webp',
      ],
      price: 58.95,
      stock: 75,
      category: categoryId,
      featured: true,
    },
    {
      name: 'HOPPER HOOPLA DECK',
      description: `REVEL COLLECTION
  
      Ready to let loose? That’s what skateboarding is all about, just having a good time and moving the party that’s in your head to under your feet. Art from long-time designer, Josh Smith, looks to capture just that with bright graphics contrasted against stark, black areas and easy-going color palettes. There’s a little hidden party favor to boot, as each deck features raised under prints with some lively patterns underneath. The Hopper, Wavepark and Ledger shapes make the Revel Collection the perfect beachfront bangers.
      
      If that wasn’t enough, we’re proud to introduce Super Sap® on the Revel Collection. This sustainable, eco-friendly entropy resin helps lower our impact on the environment without compromising the board’s performance. Through green chemistry, sustainable raw materials, and efficient manufacturing we conserve energy, minimize harmful byproducts and reduce greenhouse gas emissions of our resins and hardeners.
      
       
      
      RIDING STYLE
      
      Cruiser
      
       
      
      DIMENSIONS
      
      Length: 27.5”
      Width: 7.5”
      Wheelbase: 14.0”
       
      
      COMPONENTS
      
      Custom Screened Grip Tape
       
      
      FEATURES
      
      Super Sap® Environmentally Friendly Resin
      7 Ply Maple
      Raised Texture Print Under Bottom Graphic
      Printed Grip Tape
      Kicktail
      Art by Josh Smith`,
      picture: ['hopper_hoopla_deck_1.webp', 'hopper_hoopla_deck_2.webp'],
      price: 68.95,
      stock: 70,
      category: categoryId,
      featured: true,
    },
    {
      name: 'JAMMER DIVIDE DECK',
      description: `Yin and Yang. Light and Dark. Left and Right. Subtle and Forthright. The new Divided Collection embraces the idea of balance through opposition, with outward simplicity masking detail and complexity. The boards feature split Maple bottom plies for a contrast of color and lack thereof. While the black and white graphics above the wood appear relatively flat in color, they cover raised a marbled texture the pops in the light, giving these graphic a “hand.” The longer you hold one of the boards, the more detail you’ll notice, and that’s what we love.
  
      RIDING STYLE
      Cruiser
       
      DIMENSIONS
      Length: 28.5”
      Width: 7.875”
      Wheelbase: 14.75”
      
      FEATURES
      7 Ply Maple
      Maple Two-Color Split Bottom Ply
      Raised Texture Print Under Black and White
      Die-Cut Grip with Exposed Colored Top Ply
      Kicktail`,
      picture: [
        'jammer_divide_deck_1.webp',
        'jammer_divide_deck_2.webp',
        'jammer_divide_deck_3.webp',
      ],
      price: 69.95,
      stock: 71,
      category: categoryId,
      featured: false,
    },
    {
      name: 'JAMMER RIPS DECK',
      description: `SWELL PHOTO COLLECTION
  
      Since Sector 9 was founded by surfers in Ja Jolla, California (you should know this by now), it’s only fitting that our boards would be heavily surf-inspired throughout the years. This year’s Swell Photo Collection is no different. For this year’s offering, we’ve headed South… way South... to feature photographer Hayden Richards a.k.a. Rich Richards a.k.a. SA Rips. Hailing from South Australia, his photography is stark contrast to the bright, colorful, sun-soaked barrels you’re probably accustomed to seeing don our decks. The moody, serene and often dark images of barren stretches and isolated landscapes are punctuated by ocean views and perfect barrels. We’ve chosen to compliment the subtlety of his images with flat, matte bottom graphics on some surf-inspired shapes like the Jammer and Unagi, as well as an all-around favorite in the Meridian. We’re super stoked to show off his incredible images with this collection that’ll have you transported to the other side in search of ocean perfection.
      
       
      
      RIDING STYLE
      
      Cruiser
      
       
      
      DIMENSIONS
      
      Length: 28.5”
      Width: 7.875”
      Wheelbase: 14.75”
       
      
      COMPONENTS
      
      Clear & Regular Grip Tape Mix
       
      FEATURES
      
      7 Ply Maple
      Flat Matte Bottom Artwork
      Clear Grip on Tail Over Exposed Dyed Maple
      Printed Regular Grip Over Nose
      Kicktail
      Photography by Hayden Richards`,
      picture: ['jammer_rips_deck_1.webp', 'jammer_rips_deck_2.webp'],
      price: 69.95,
      stock: 72,
      category: categoryId,
      featured: true,
    },
    {
      name: 'FAT WAVE FOSSIL DECK',
      description: `THE DEEP COLLECTION
  
      It’s time to broaden your perspective with a trip down below, to The Deep. Our friend Nate Reifke, a.k.a. Salty Timbers, is back with some mind-bending graphics from the abyss for the all new The Deep Collection. Reach to the depths of your senses, with Nate’s signature style of black and white illustration positioned over colorful splattered backdrops. To top it off, or should we say bottom it off, we’ve taken these boards even deeper with exposed Black Burle veneers. While you’re all probably familiar with the Fat Wave and Fault Line shapes, we’re also introducing the Strand for the first time ever in a 7 ply Maple construction. Some vivid graphics on some solid shapes are sure to make all your trips wild with The Deep Collection.
      
       
      
      RIDING STYLE
      
      Park
      Cruiser
       
      DIMENSIONS
      
      Length: 30.0”
      Width: 9.8”
      Wheelbase: 16.0”
       
      
      COMPONENTS
      
      Custom Screened Grip Tape
       
      
      FEATURES
      
      7 Ply Maple
      Black Burle Bottom Veneer
      Two-Tone Swirled Wheels
      80’s Inspired Shape
      Printed Grip Tape
      Kicktail
      Art by Nate Reifke`,
      picture: ['fat_wave_fossil_deck_1.webp', 'fat_wave_fossil_deck_2.webp'],
      price: 88.95,
      stock: 73,
      category: categoryId,
      featured: false,
    },
    {
      name: 'SPLASH SNAPBACK DECK',
      description: `RIDING STYLE
      Cruiser
      Carving
       
      DIMENSIONS
      Length: 30.0”
      Width: 8.0”
      Wheelbase: 20.625”
      
      FEATURES
      Fiberglass Maple Sandwich
      Camber Mold
      Flat Matte Bottom Artwork
      Slight Kicktail`,
      picture: ['splash_snapback_deck_1.webp', 'splash_snapback_deck_2.webp'],
      price: 69.95,
      stock: 74,
      category: categoryId,
      featured: true,
    },
    {
      name: 'WAVEPARK SHADOW DECK',
      description: `Since Sector 9 was founded by surfers in Ja Jolla, California (you should know this by now), it’s only fitting that our boards would be heavily surf-inspired throughout the years. This year’s Swell Photo Collection is no different. You’re probably familiar with Ben Thouard’s wave imagery out of Tahiti, as we’ve featured his amazing photography on decks in the past. However, we’ve added to our growing list watermen for this collection with photographer Phillip Thurston. Hailing from NSW, Australia, Thurston’s photos often feel more like paintings of fluid motion than captured images, and we’re both stoked and honored to feature his work on our newest boards.
  
      RIDING STYLE
      Cruiser
      Carving +
       
      DIMENSIONS
      Length: 30.25”
      Width: 8.75”
      Wheelbase: 12.875”
      
      FEATURES
      7 Ply Maple
      Printed Grip Tape
      Kicktail
      Photography by Ben Thouard`,
      picture: [
        'wavepark_shadow_deck_1.webp',
        'wavepark_shadow_deck_2.webp',
        'wavepark_shadow_deck_3.webp',
      ],
      price: 65.95,
      stock: 76,
      category: categoryId,
      featured: true,
    },
    {
      name: 'WAVEPARK PARTY DECK',
      description: `REVEL COLLECTION
  
      Ready to let loose? That’s what skateboarding is all about, just having a good time and moving the party that’s in your head to under your feet. Art from long-time designer, Josh Smith, looks to capture just that with bright graphics contrasted against stark, black areas and easy-going color palettes. There’s a little hidden party favor to boot, as each deck features raised under prints with some lively patterns underneath. The Hopper, Wavepark and Ledger shapes make the Revel Collection the perfect beachfront bangers. 
      
      If that wasn’t enough, we’re proud to introduce Super Sap® on the Revel Collection. This sustainable, eco-friendly entropy resin helps lower our impact on the environment without compromising the board’s performance. Through green chemistry, sustainable raw materials, and efficient manufacturing we conserve energy, minimize harmful byproducts and reduce greenhouse gas emissions of our resins and hardeners.
      
       
      
      RIDING STYLE
      
      Cruiser
      Carving +
       
      
      DIMENSIONS
      
      Length: 30.25”
      Width: 8.75”
      Wheelbase: 12.875”
       
      
      COMPONENTS
      
      Custom Screened Grip Tape
       
      
      FEATURES
      
      Super Sap® Environmentally Friendly Resin
      7 Ply Maple
      Raised Texture Print Under Bottom Graphic
      Printed Grip Tape
      Kicktail
      Art by Josh Smith`,
      picture: ['wavepark_party_deck_1.webp', 'wavepark_party_deck_2.webp'],
      price: 78.95,
      stock: 77,
      category: categoryId,
      featured: false,
    },
    {
      name: 'CASCADE NINETY FIVE DECK',
      description: `This season, we're proud to introduce our latest artist and photographer, Travis Burke. He is an accomplished photographer, athlete, public speaker and explorer. Growing up passionate about skateboarding and surfing in San Diego, California, Travis has always been known to push the boundaries of his crafts. We're super stoked to highlight some of his amazing travel imagery on some truly unique skateboards, and welcome him to the Sector 9 family.
      RIDING STYLE
      Park
      Cruiser
       
      DIMENSIONS
      Length: 30.5”
      Width: 8.375”
      Wheelbase: 14.25”
       
      COMPONENTS
      ERG Grip Tape
       
      FEATURES
      7 Ply Maple
      Black Burle Veneer with Die-Cut Maple Inlay
      Two-Tone Swirled Urethane
      Die-Cut Grip Tape
      Double Kick
      Photography by Travis Burke`,
      picture: [
        'cascade_ninety_five_deck_1.webp',
        'cascade_ninety_five_deck_2.webp',
        'cascade_ninety_five_deck_3.webp',
      ],
      price: 79.95,
      stock: 79,
      category: categoryId,
      featured: false,
    },
    {
      name: 'NINETY FIVE DIVIDE DECK',
      description: `Yin and Yang. Light and Dark. Left and Right. Subtle and Forthright. The new Divided Collection embraces the idea of balance through opposition, with outward simplicity masking detail and complexity. The boards feature split Maple bottom plies for a contrast of color and lack thereof. While the black and white graphics above the wood appear relatively flat in color, they cover raised a marbled texture the pops in the light, giving these graphic a “hand.” The longer you hold one of the boards, the more detail you’ll notice, and that’s what we love.
  
      RIDING STYLE
      Park
      Cruiser
       
      DIMENSIONS
      Length: 30.5”
      Width: 8.375”
      Wheelbase: 14.25”
      
      FEATURES
      7 Ply Maple
      Maple Two-Color Split Bottom Ply
      Raised Texture Print Under Black and White
      Die-Cut Grip with Exposed Colored Top Ply
      Double Kick`,
      picture: [
        'ninety_five_divide_deck_1.webp',
        'ninety_five_divide_deck_2.webp',
        'ninety_five_divide_deck_3.webp',
      ],
      price: 63.95,
      stock: 78,
      category: categoryId,
      featured: false,
    },
    {
      name: 'BAMBOOZLER BORA BORA DECK',
      description: `Are you living that perfectly Instagram-able #vanlife? Maybe you just live in a van down by river. Either way, you can appreciate the beauty of a classic ride, and we’re not just talking about the art on the new Van Bamboozler. This deck is perfect for just about any terrain you’re looking to traverse, from the park, to the corner store run, to the picturesque beach sunset perfectly suited for some deep, inspiring message about living life to the fullest and never giving up on your dreams. So ditch the sedentary life, and hop on the bandwa… Bamboozler for a solid skate experience.
   
      RIDING STYLE
      Park
      Cruiser
       
      DIMENSIONS
      Length: 31.5”
      Width: 8.625”
      Wheelbase: 15.5”
      
      FEATURES
      Bamboo & Maple Hybrid
      Kicktail
      Art by Nate Reifke`,
      picture: ['bamboozler_bora_bora_deck_1.webp'],
      price: 65.95,
      stock: 82,
      category: categoryId,
      featured: false,
    },
    {
      name: 'STRAND STORM DECK',
      description: `All hands on deck! The new Drift Bamboo Collection features some "killer" story-time graphics from long-time 9 Ball Family artist, Nate Reifke a.k.a. Salty Timbers. If you've ever wondered what inspired his nickname, this new round of boards might help fill in the blanks. If you've ever wondered what happens when you don't respect the ocean, we can help with that too. To top it off, the Drift Bamboo Collection features fan favorite shapes with the Bambino, the Strand and the Mini Lookout.
  
      RIDING STYLE
      Carving
      Cruiser
       
      DIMENSIONS
      Length: 34.0”
      Width: 8.7”
      Wheelbase: 20.5”
      
      FEATURES
      5 Ply Bamboo
      Caramelized Bamboo Inlay Stringers on Top Ply
      Kicktail
      Art by Nate Reifke`,
      picture: ['strand_storm_deck_1.webp', 'strand_storm_deck_2.webp', 'strand_storm_deck_3.webp'],
      price: 72.95,
      stock: 68,
      category: categoryId,
      featured: false,
    },
    {
      name: 'UNAGI GORGON DECK',
      description: `Are you ready to take a trip? Well, you’ve come to the right place. The Journey Walnut Collection is here to expand your consciousness... and your quiver. We tapped artist, Curtis Hadzicki, to create these graphics. He drew slight inspiration from ancient Greek mythology with a psychedelic, Southern California twist. The simple graphic silhouettes serve to provide a stark contrast with the Walnut bottom plies. To further expand these board’s horizons, we sprayed the tails and used clear grip to provide one of our most unique collections to date.
  
      RIDING STYLE
      Cruiser
      Carving +
       
      DIMENSIONS
      Length: 34.5”
      Width: 8.75”
      Wheelbase: 17.25”
      
      FEATURES
      7 Ply Maple
      Walnut Bottom Veneer
      Faded Dipped Tail
      Two-Tone Swirled Wheels
      Double Kick
      Art by Curtis Hadzicki`,
      picture: ['unagi_gorgon_deck_1.webp', 'unagi_gorgon_deck_2.webp', 'unagi_gorgon_deck_3.webp'],
      price: 78.95,
      stock: 69,
      category: categoryId,
      featured: false,
    },
    {
      name: 'FIJI DECK',
      description: `The Roots Bamboo Collection is a limited-edition Re-Issue including graphics depicting world class surf breaks with highly detailed artwork. This long-standing series of boards channels some of the original inspirations for Sector 9 both in performance and in style. Built for the speed and power needed to excel in a location like Tavarua, this extended swallow tale gives you the ability to press the gas and go. Whether you’re weaving through barneys or making a clean line down some open pavement the Fiji is your weapon of choice.
  
   
  
      RIDING STYLE
      Carving
      
      Commuter
      
       
      
      DIMENSIONS
      Length:  39.5"
      
      Width:  9.35"
      
      Wheelbase:  26.5”
      
       
      
      FEATURES
      
      5 ply bamboo
      
      Caramelized bamboo inlay stringer on top ply
      
      Swallow tail`,
      picture: ['fiji_deck_1.webp', 'fiji_deck_2.webp', 'fiji_deck_3.webp'],
      price: 98.95,
      stock: 69,
      category: categoryId,
      featured: false,
    },
    {
      name: 'LEDGER MOSAIC DECK',
      description: `For the new Mosaic Collection, we took inspiration from classic 70’s, Southern California style. The black Maple bottom plies are covered in subtle checkers, and clean, white lines reminiscent of the adolescence of the surf/skate scene. We’ve mixed old school (Fat Wave) with classic Sector 9 (Ledger) and topped it off with new-age performance (Dropper) for an incredibly well-rounded quiver. Details like inlayed colored Maple in the bottom ply, checkered die-cut grip and matte, white trucks take these boards to the next level.
  
      RIDING STYLE
      Carving
      Commuter
       
      DIMENSIONS
      Length: 40.0”
      Width: 9.25”
      Wheelbase: 27.75”
      
      FEATURES
      7 Ply Maple
      Die-Cut Colored Maple Inlay
      Black Maple Bottom Veneer
      Die-Cut Grip with Grip Print`,
      picture: [
        'ledger_mosaic_deck_1.webp',
        'ledger_mosaic_deck_2.webp',
        'ledger_mosaic_deck_3.webp',
      ],
      price: 78.95,
      stock: 91,
      category: categoryId,
      featured: false,
    },
    {
      name: 'LEDGER FIESTA DECK',
      description: `REVEL COLLECTION
  
      Ready to let loose? That’s what skateboarding is all about, just having a good time and moving the party that’s in your head to under your feet. Art from long-time designer, Josh Smith, looks to capture just that with bright graphics contrasted against stark, black areas and easy-going color palettes. There’s a little hidden party favor to boot, as each deck features raised under prints with some lively patterns underneath. The Hopper, Wavepark and Ledger shapes make the Revel Collection the perfect beachfront bangers.
      
      If that wasn’t enough, we’re proud to introduce Super Sap® on the Revel Collection. This sustainable, eco-friendly entropy resin helps lower our impact on the environment without compromising the board’s performance. Through green chemistry, sustainable raw materials, and efficient manufacturing we conserve energy, minimize harmful byproducts and reduce greenhouse gas emissions of our resins and hardeners.
      
       
      
      RIDING STYLE
      
      Carving
      Commuter
       
      
      DIMENSIONS
      
      Length: 40.0”
      Width: 9.25”
      Wheelbase: 27.75”
       
      
      COMPONENTS
      
      Custom Screened Grip Tape
       
      
      FEATURES
      
      Super Sap® Environmentally Friendly Resin
      7 Ply Maple
      Raised Texture Print Under Bottom Graphic
      Printed Grip Tape
      Art by Josh Smith`,
      picture: ['ledger_fiesta_deck_1.webp', 'ledger_fiesta_deck_2.webp'],
      price: 98.95,
      stock: 86,
      category: categoryId,
      featured: false,
    },
    {
      name: 'MINI LOOKOUT WRECKAGE DECK',
      description: `All hands on deck! The new Drift Bamboo Collection features some "killer" story-time graphics from long-time 9 Ball Family artist, Nate Reifke a.k.a. Salty Timbers. If you've ever wondered what inspired his nickname, this new round of boards might help fill in the blanks. If you've ever wondered what happens when you don't respect the ocean, we can help with that too. To top it off, the Drift Bamboo Collection features fan favorite shapes with the Bambino, the Strand and the Mini Lookout.
  
      RIDING STYLE
      Carving
      Commuter
       
      DIMENSIONS
      Length: 37.5”
      Width: 9.25”
      Wheelbase: 28.0”
      
      FEATURES
      5 Ply Bamboo
      Caramelized Bamboo Inlay Stringers on Top Ply
      Drop Thru
      Art by Nate Reifke`,
      picture: [
        'mini_lookout_wreckage_deck_1.webp',
        'mini_lookout_wreckage_deck_2.webp',
        'mini_lookout_wreckage_deck_3.webp',
      ],
      price: 88.95,
      stock: 79,
      category: categoryId,
      featured: false,
    },
    {
      name: 'J-BAY DECK',
      description: `The Roots Bamboo Collection is a limited-edition Re-Issue including graphics depicting world class surf breaks with highly detailed artwork. This long-standing series of boards channels some of the original inspirations for Sector 9, both in performance and in style. With its timeless shape and nostalgic graphics, the J-Bay transports you to a time when all you needed was a little cold weather and a nice south, southwest swell to get you out the door and into the water. The clear blue 9 balls give you plenty of contact while referencing the hallow faces waiting for you on a good day at J-Bay. 
  
      RIDING STYLE
      Carving
      Commuter
      
      DIMENSIONS
      Length:  44.0”
      Width:  9.74”
      Wheelbase:  30.5”
      
      COMPONENTS
      
      Clear grip
      
      FEATURES
      
      5 ply bamboo
      Caramelized bamboo inlay stringer on top ply`,
      picture: ['j-bay_deck_1.webp', 'j-bay_deck_2.webp', 'j-bay_deck_3.webp'],
      price: 108.9,
      stock: 57,
      category: categoryId,
      featured: false,
    },
    {
      name: 'CHOP HOP NOH DECK',
      description: `Jor Ros grew up moving back and forth between Mexico and the U.S. and would spend his free time making up characters and creating fictional universes though his drawings. Today, the Barcelona-based artist has developed a portfolio of digital illustrations that imagine the contemporary urban samurai warrior, borrowing the motifs and aesthetic hallmarks of traditional Japanese folklore and American cartoons through a warm, eye grabbing palette. We’re stoked to introduce Jor as our latest featured Artist, and bring some unique Far East style to Sector 9’s West Coast craftsmanship.
  
      RIDING STYLE
      Park
      Cruiser
       
      DIMENSIONS
      Length: 30.5”
      Width: 8.625”
      Wheelbase: 14.85”
      
      FEATURES
      7 Ply Maple
      Two-Color Dipped Maple Bottom Ply
      Printed Grip Tape
      Double Kick
      Art by Jor Ros`,
      picture: ['chop_hop_noh_deck_1.webp', 'chop_hop_noh_deck_2.webp', 'chop_hop_noh_deck_3.webp'],
      price: 71.95,
      stock: 58,
      category: categoryId,
      featured: false,
    },
    {
      name: 'MASON PRO DANGER DECK',
      description: `It’s all positive vibes on these colorful rides. The Signature Collection is back with new graphics for Mason Ho and Ben Gravy on their trusted Pro Model shapes. Black and white illustrations by Daniel Sheridan pop off trippy, hazy colored backgrounds, accented by fully dipped black decks. Live on the edge while smashing curbs, rails and driveways with the Mason Pro Danger. Take a trip, chart new paths, and live the dream with the Gravy Semi-Pro Barge. No matter what shape suits your vibe, it’s sure to be a journey.
  
      RIDING STYLE
      Park
      Cruiser
       
      DIMENSIONS
      Length: 31.0”
      Width: 8.25”
      Wheelbase: 14.25”
      
      FEATURES
      7 Ply Maple
      Full Dip Black Deck
      Neon Ink Bottom Art
      Printed Grip Tape
      Double Kick
      Art by Daniel Sheridan`,
      picture: [
        'mason_pro_danger_deck_1.webp',
        'mason_pro_danger_deck_2.webp',
        'mason_pro_danger_deck_3.webp',
      ],
      price: 58.95,
      stock: 78,
      category: categoryId,
      featured: false,
    },
  ];

  for (const product of decks) {
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
  console.log('Los seeders de Decks fueron insertados!');
}

module.exports = decksSeeders;
