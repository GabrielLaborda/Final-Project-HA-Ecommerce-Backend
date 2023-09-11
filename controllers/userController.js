const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Order = require("../models/Order");
// hacer el satore de los usrers
// El login va a estar en un loginController o outController

async function index(req, res) {
  try {
    const users = await User.find().populate("orders");
    return res.status(200).json(users);
  } catch (err) {
    console.log("[ User Controller -> Index ] Ops, something went wrong");
    return res.status(404).json({ msg: err.message });
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id).populate("orders");
    return res.status(200).json(user);
  } catch (err) {
    console.log("[ User Controller -> Show ] Ops, something went wrong");
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  try {
    const passwordEncrypt = await bcrypt.hash(req.body.password, 10);
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: passwordEncrypt,
      address: req.body.address,
      phone: req.body.phone,
    });
    return res.status(201).json({ msg: "user successfully created" });
  } catch (err) {
    console.log("[ User Controller -> Store ] Ops, something went wrong");
    return res.status(404).json({ msg: err.message });
  }
}
async function update(req, res) {
  try {
    const passwordEncrypt = await bcrypt.hash(req.body.password, 10);
    await User.findByIdAndUpdate(req.params.id, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: passwordEncrypt,
      address: req.body.address,
      phone: req.body.phone,
    });
    res.status(200).json({ msg: "user successfully updated" });
  } catch (err) {
    console.log("[ User Controller -> Update ] Ops, something went wrong");
    return res.status(404).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "User successfully deleted" });
  } catch (error) {
    console.log("[ User Controller -> Destroy ] Ops, something went wrong");
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
