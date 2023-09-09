const Category = require("../models/Category");
const formidable = require("formidable");
const fs = require("fs");

async function index(req, res) {
  try {
    const categories = await Category.find().populate("products");
    return res.status(200).json(categories);
  } catch (err) {
    console.log("Couldn't find categories");
    return res.status(404).json({ msg: err.message });
  }
}

async function show(req, res) {
  try {
    const findOneCategory = await Category.findById(req.params.id).populate(
      "products"
    );
    return res.status(200).json(findOneCategory);
  } catch (err) {
    console.log("Couldn't find the category");
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  try {
    form.parse(req, async (err, fields, files) => {
      // console.log(fields);
      // console.log(files);
      const storeCategory = await Category.create({
        name: fields.name,
        pictures: files.pictures,
        description: fields.description,
      });
      storeCategory.save();
      return res.status(201).json({ msg: "Category stored successfully!" });
    });
  } catch (err) {
    console.log("Error, Couldn't store category");
    console.log(files.pictures.newFilename);
    fs.unlink(
      __dirname + "/../public/img/" + files.pictures.newFilename,
      (err) => {
        if (err) console.log(err);
      }
    );
    return res.status(404).json({ msg: err.message });
  }
}

async function update(req, res) {
  try {
    const findOneCategory = await Category.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          pictures: req.body.pictures,
          description: req.body.description,
          products: req.body.products,
        },
        $currentDate: { lastUpdated: true },
      }
    ).populate("products");
    console.log(findOneCategory);
    return res.status(200).json({ msg: "Category updated successfully" });
  } catch (err) {
    console.log("Error, Couldn't update category");
    return res.status(304).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    const categoryId = req.params.id;
    await Category.findByIdAndDelete(categoryId);
    return res.status(200).json({ msg: "Category deleted successfully!" });
  } catch (err) {
    console.log("Error, Couldn't delete category");
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
