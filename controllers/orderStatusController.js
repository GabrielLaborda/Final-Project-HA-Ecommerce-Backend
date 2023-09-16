const OrderStatus = require('../models/OrderStatus');

async function index(req, res) {
  try {
    const orderStatuses = await OrderStatus.find();
    return res.status(200).json(orderStatuses);
  } catch (err) {
    console.log('[ Order Status Controller -> Index ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function show(req, res) {
  try {
    const orderStatus = await OrderStatus.findOne({ _id: req.params.id });
    return res.status(200).json(orderStatus);
  } catch (err) {
    console.log('[ Order Status Controller -> Show ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  try {
    await OrderStatus.create({
      name: req.body.name,
    });
    return res.status(201).json({ msg: 'Order Status successfully created' });
  } catch (err) {
    console.log('[ Order Status Controller -> Store ] Ops, something went wrong');
    return res.status(400).json({ msg: err.message });
  }
}

async function update(req, res) {
  try {
    await OrderStatus.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
      }
    );
    return res.status(200).json({ msg: 'Order successfully updated' });
  } catch (err) {
    console.log('[ Order Status Controller -> Update ] Ops, something went wrong');
    return res.status(304).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    await OrderStatus.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ msg: 'Order successfully deleted' });
  } catch (err) {
    console.log('[ Order Status Controller -> Destroy ] Ops, something went wrong');
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
