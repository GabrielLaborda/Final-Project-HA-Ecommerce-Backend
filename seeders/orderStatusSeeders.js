const OrderStatus = require('../models/OrderStatus');

async function orderStatusSeeders() {
  const category = [
    {
      status: 'Processing Payment',
    },
    {
      status: 'Paid',
    },

    {
      status: 'Sent',
    },

    {
      status: 'Delivered',
    },
  ];

  await OrderStatus.insertMany(category);
  console.log('Los seeders de OrderStatus fueron insertados!');
}

module.exports = orderStatusSeeders;
