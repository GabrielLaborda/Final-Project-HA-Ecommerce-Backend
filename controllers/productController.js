const Category = require("../models/Category");
const Product = require("../models/Product");

async function index(req, res) {
  return res.send("conectado");
}
async function show(req, res) {
  // Prueba de llamada a localhost:3000/products/category
  const category = await Category.find().populate("products");
  return res.json(category);
}
async function create(req, res) {}
async function store(req, res) {}
async function update(req, res) {}
async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  store,
  update,
  destroy,
};
