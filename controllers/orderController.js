const Order = require('../models/Order');
const User = require('../models/User');
const OrderStatus = require('../models/OrderStatus');

async function index(req, res) {
  try {
    const orders = await Order.find().populate('user').populate('status');
    return res.status(200).json(orders);
  } catch (err) {
    console.log('[ Order Controller -> Index ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function show(req, res) {
  try {
    const order = await Order.findOne({ _id: req.params.id }).populate('user').populate('status');
    return res.status(200).json(order);
  } catch (err) {
    console.log('[ Order Controller -> Show ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  try {
    const order = await Order.create({
      user: req.auth.sub,
      products: req.body.products,
      status: req.body.status,
      subtotal: req.body.subtotal,
    });
    return res.status(201).json({ msg: 'Order successfully created', orderId: order.id });
  } catch (err) {
    console.log('[ Order Controller -> Store ] Ops, something went wrong');
    return res.status(400).json({ msg: err.message });
  }
}

async function update(req, res) {
  try {
    await Order.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: req.body.status,
      }
    );
    return res.status(200).json({ msg: 'Order successfully updated' });
  } catch (err) {
    console.log('[ Order Controller -> Update ] Ops, something went wrong');
    return res.status(304).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    await Order.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ msg: 'Order successfully deleted' });
  } catch (err) {
    console.log('[ Order Controller -> Destroy ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
