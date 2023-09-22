const Category = require('../models/Category');
const Product = require('../models/Product');
const formidable = require('formidable');
const fs = require('fs');
const slugify = require('slugify');
const supabase = require('./../supabaseConfig');

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
    const category = await Category.findOne({ slug: req.params.slug }).populate('products');
    return res.status(200).json(category);
  } catch (err) {
    console.log('[ Category Controller -> Show ] Ops, something went wrong');
    return res.status(404).json({ msg: err.message });
  }
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    try {
      const picturesArray = [];

      if (files.pictures.newFilename) {
        picturesArray.push(files.pictures.newFilename);
        const { data, error } = await supabase.storage
          .from('UrbanRush')
          .upload(files.pictures.newFilename, fs.createReadStream(files.pictures.filepath), {
            cacheControl: '3600',
            upsert: false,
            contentType: files.pictures.mimetype,
            duplex: 'half',
          });
      } else {
        picturesArray.push(...files.pictures.map((picture) => picture.newFilename));
        for (const picture of files.pictures) {
          const { data, error } = await supabase.storage
            .from('UrbanRush')
            .upload(picture.newFilename, fs.createReadStream(picture.filepath), {
              cacheControl: '3600',
              upsert: false,
              contentType: picture.mimetype,
              duplex: 'half',
            });
        }
      }
      await Category.create({
        name: fields.name,
        pictures: picturesArray,
        description: fields.description,
        slug: slugify(fields.name, { lower: true, strict: true }),
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
  try {
    await Category.findOneAndUpdate(
      { slug: req.params.slug },
      {
        name: req.body.name,
        description: req.body.description,
        slug: slugify(req.body.name, { lower: true, strict: true }),
      }
    );
    return res.status(200).json({ msg: 'Category successfully updated' });
  } catch (err) {
    console.log('[ Category Controller -> Update ] Ops, something went wrong');
    return res.status(304).json({ msg: err.message });
  }
}

async function destroy(req, res) {
  try {
    await Category.findOneAndDelete({ slug: req.params.slug });
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
