const Category = require('../models/Category');
const formidable = require('formidable');
const fs = require('fs');

async function index(req, res) {
  try {
    const categories = await Category.find().populate('products');
    return res.status(200).json(categories);
  } catch (err) {
    console.log('[ Category Controller -> Index ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function show(req, res) {
  try {
    const category = await Category.findById(req.params.id).populate('products');
    return res.status(200).json(category);
  } catch (err) {
    console.log('[ Category Controller -> Show ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/img',
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const picturesArray = [];
    files.pictures.newFilename
      ? picturesArray.push(files.pictures.newFilename)
      : picturesArray.push(...files.pictures.map((picture) => picture.newFilename));

    try {
      await Category.create({
        name: fields.name,
        pictures: picturesArray,
        description: fields.description,
      });
      return res.status(201).json({ msg: 'Category successfully created' });
    } catch (err) {
      console.log('[ Category Controller -> Store ] Ops, something went wrong');
      for (const picture of files.pictures) {
        fs.unlink(__dirname + '/../public/img/' + picture.newFilename, (err) => {
          if (err) console.log(err);
        });
      }
      return res.status(400).json({ msg: err.message });
    }
  });
}

async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/img',
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    try {
      const category = await Category.findById(req.params.id);

      for (const picture of category.pictures) {
        fs.unlink(__dirname + '/../public/img/' + picture, (err) => {
          if (err) console.log(err);
        });
      }

      const picturesArray = [];
      files.pictures.newFilename
        ? picturesArray.push(files.pictures.newFilename)
        : picturesArray.push(...files.pictures.map((picture) => picture.newFilename));

      Category.findByIdAndUpdate(req.params.id, {
        name: fields.name,
        pictures: picturesArray,
        description: fields.description,
        products: fields.products,
      });

      return res.status(200).json({ msg: 'Category successfully updated' });
    } catch (err) {
      console.log('[ Category Controller -> Update ] Ops, something went wrong');
      for (const picture of files.pictures) {
        fs.unlink(__dirname + '/../public/img/' + picture.newFilename, (err) => {
          if (err) console.log(err);
        });
      }
      return res.status(304).json({ msg: err.message });
    }
  });
}

async function destroy(req, res) {
  try {
    await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: 'Category successfully deleted' });
  } catch (err) {
    console.log('[ Category Controller -> Destroy ] Ops, something went wrong');
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
