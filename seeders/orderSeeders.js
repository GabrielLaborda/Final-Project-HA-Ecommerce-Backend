const Order = require('./../models/Order');
const User = require('./../models/User');
const Product = require('./../models/Product');
const OrderStatus = require('./../models/OrderStatus');

async function orderSeeders() {
  const users = await User.find();
  const products = await Product.find();
  const orderStatus = await OrderStatus.find();

  for (let i = 0; i < 20; i++) {
    const productOne = products[Math.floor(Math.random() * products.length)];
    const productTwo = products[Math.floor(Math.random() * products.length)];
    const orderUser = users[Math.floor(Math.random() * users.length)];

    const order = new Order({
      user: orderUser._id,
      products: [
        {
          name: productOne.name,
          quantity: Math.floor(Math.random() * 10) + 1,
          price: productOne.price,
        },
        {
          name: productTwo.name,
          quantity: Math.floor(Math.random() * 10) + 1,
          price: productTwo.price,
        },
      ],
      status: orderStatus[Math.floor(Math.random() * orderStatus.length)]._id,
    });
    (order.subtotal = order.products.reduce(
      (amount, prod) => amount + prod.quantity * prod.price,
      0
    )),
      await order.save();
    orderUser.orders.push(order._id);
    await orderUser.save();
  }
  console.log('Los seeders de Orders fueron insertados!');
}

module.exports = orderSeeders;
