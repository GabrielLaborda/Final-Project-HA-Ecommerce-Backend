const Admin = require("../models/Admin");
const formidable = require("formidable");
const fs = require("fs");
const bcryptjs = require("bcryptjs");

async function index(req, res) {
  try {
    const staff = await Admin.find();
    return res.status(200).json(staff);
  } catch (err) {
    console.log("Couldn't find staff");
    return res.status(404).json({ msg: err.message });
  }
}

async function show(req, res) {
  try {
    const findOneAdmin = await Admin.findById(req.params.id);
    return res.status(200).json(findOneAdmin);
  } catch (err) {
    console.log("Couldn't find admin");
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  try {
    const passwordEncrypt = await bcryptjs.hash(req.body.password, 10);
    await Admin.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: passwordEncrypt,
    });
    console.log("Admin created");
    return res.status(201).json({ msg: "New Admin stored successfully!" });
  } catch (err) {
    console.log("Error, Couldn't store Admin");
    return res.status(404).json({ msg: err.message });
  }
}

async function update(req, res) {
  try {
    const adminId = req.params.id;
    const passwordEncrypt = await bcryptjs.hash(req.body.password, 10);
    const admin = await Admin.findByIdAndUpdate(adminId, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("Admin updated");
    return res.status(200).json({ msg: "Admin updated successfully" });
  } catch (err) {
    console.log("Error, Couldn't update Admin");
    return res.status(304).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    const adminId = req.body.id;
    await Admin.findByIdAndDelete(adminId);
    return res.status(200).json({ msg: "Admin deleted successfully!" });
  } catch (err) {
    console.log("Error, Couldn't delete Admin");
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
