const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Admin = require('../models/Admin');

async function loginUser(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({ error: 'Incorrect credentials' });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) return res.status(400).json({ error: 'Incorrect credentials' });

    const token = jwt.sign({ sub: user._id, email: user.email }, process.env.JWT_SIGN_SECRET);
    return res
      .status(200)
      .json({ token, id: user.id, firstname: user.firstname, lastname: user.lastname });
  } catch (err) {
    console.log('[ Login Controller -> loginUser ] Ops, something went wrong');
    return res.status(400).json({ msg: err.message });
  }
}

async function loginAdmin(req, res) {
  try {
    const admin = await Admin.findOne({ email: req.body.email });

    if (!admin) return res.status(400).json({ error: 'Incorrect credentials' });

    const match = await bcrypt.compare(req.body.password, admin.password);

    if (!match) return res.status(400).json({ error: 'Incorrect credentials' });

    const token = jwt.sign({ sub: admin._id, email: admin.email }, process.env.JWT_SIGN_SECRET);
    return res.status(200).json({ token, id: admin.id });
  } catch (err) {
    console.log('[ Login Controller -> loginAdmin ] Ops, something went wrong');
    return res.status(400).json({ msg: err.message });
  }
}

module.exports = {
  loginUser,
  loginAdmin,
};
