const Admin = require("../models/Admin");
const formidable = require("formidable");
const fs = require("fs");

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
    const newAdmin = await req.body;
    const storeNewAdmin = await Admin.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    storeNewAdmin.save();
    return res.status(201).json({ msg: "New Admin stored successfully!" });
  } catch (err) {
    console.log("Error, Couldn't store Admin");
    return res.status(404).json({ msg: err.message });
  }
}

async function update(req, res) {
  try {
    const admin = await Admin.findById(req.params.id);
    const findOneAdmin = await Admin.updateOne(
        { _id: req.params.id },
        {
          $set: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
          },
        }
    );
    console.log("Admin updated");
    return res.status(200).json({ msg: "Admin updated successfully" });
  } catch (err) {
    console.log("Error, Couldn't update Admin");
    return res.status(304).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    const adminId = req.params.id;
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
