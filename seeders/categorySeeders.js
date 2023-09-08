const Category = require('../models/Category');

async function categorySeeders() {
  const category = [
    {
      name: 'Completes',
      description:
        'When you’ve been a category leader for as long as we have, it’s inevitable that people are going to start riding your coat tails. Over the years we’ve seen some very odd products labeled as a Sector 9 Complete in the marketplace. that should have actually been called a Sector 9 Deck, as the deck was certainly ours, but none of the components were. Unfortunately, this is happening more and more, so moving forward our Certified Complete logo will be the true sign that a board is really a Sector 9 Complete and not just one of our decks with random trucks, wheels and riser pads on it, trying to be passed off to our customers as something it’s clearly not.',
      products: [],
    },
    {
      name: 'Decks',
      description:
        'At some point in time we have all had it, that overwhelming urge to SMASH IT, whatever ´IT´ may be. The feeling comes from deep within, and it is aggressively raw. At Sector 9, we are embracing the feeling of flying down a hill, hitting the pool coping or slashing a driveway bank, and incorporating that feeling into our daily mantra. We aren not going to stop there either. SMASH IT is also about bringing awareness to things beyond just skateboarding, like the fight against cancer, environmental responsibility and community engagement. We believe that SMASH IT is just as much about helping those around you, as it is bettering yourself. It is time to get motivated. It is time to SMASH IT!',
      products: [],
    },
    {
      name: 'Trucks',
      description:
        'We are proud to use the trucks of our sister company, Gullwing, on all of our completes, as well as offer them for individual sale. While Gullwing is in it’s fifth decade of production, make no mistake – these are not your dad’s trucks! Every set in the line has been brought up to, and even surpassed, modern standards. You want your trucks to be one of the pillars of strength beneath your feet, and that’s what we strive for with the Gullwing brand – classic design to go along with strength and stability, in order to stand the test of time.',
      products: [],
    },
    {
      name: 'Wheels',
      description:
        'Without a doubt, a good set of wheels can turn an average board into a good one. If most riders really knew what our wheels went through to make it into our lineup, they might not feel comfortable putting them on their car! Before they even become prototypes, we spend a considerable amount of time picking over each and every wheel.  Then we dissect them, test them, rework them, and test them yet again.  This process often seems tedious, but it has proven to be successful time and time again and because of this, we don’t plan on changing our process. Regardless of what model it is, all of our wheels stand up to the rigors of the road and provide performance when you need it the most.   All wheels are sold as a set of 4.',
      products: [],
    },
  ];

  await Category.insertMany(category);
  console.log('Los seeders de Categorías fueron insertados!');
}

module.exports = categorySeeders;
