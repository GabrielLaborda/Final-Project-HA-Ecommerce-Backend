const Product = require('../models/Product');
const Category = require('./../models/Category');
const formidable = require('formidable');
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');
const supabase = require('./../supabaseConfig');

async function index(req, res) {
  try {
    if (req.query.category) {
      const products = await Product.find({
        featured: true,
        category: req.query.category,
      }).populate('category');
      return res.status(200).json(products);
    } else if (req.query.featured) {
      const products = await Product.find({ featured: true }).populate('category');
      return res.status(200).json(products);
    } else {
      const products = await Product.find().populate('category');
      return res.status(200).json(products);
    }
  } catch (error) {
    console.log('[ Product Controller -> Index ] Ops, something went wrong');
    return res.status(404).json({ msg: error.message });
  }
}

async function show(req, res) {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    return res.status(200).json(product);
  } catch (error) {
    console.log('[ Product Controller -> Show ] Ops, something went wrong');
    return res.status(404).json({ msg: error.message });
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

      if (files.picture.newFilename) {
        picturesArray.push(files.picture.newFilename);
        const { data, error } = await supabase.storage
          .from('UrbanRush')
          .upload(files.picture.newFilename, fs.createReadStream(files.picture.filepath), {
            cacheControl: '3600',
            upsert: false,
            contentType: files.picture.mimetype,
            duplex: 'half',
          });
        console.log(data);
        console.log(error);
      } else {
        picturesArray.push(...files.picture.map((picture) => picture.newFilename));
        for (const picture of files.picture) {
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
      const product = new Product({
        name: fields.name,
        description: fields.description,
        picture: picturesArray,
        price: fields.price,
        stock: fields.stock,
        category: fields.category,
        featured: fields.featured,
        slug: slugify(fields.name, { lower: true, strict: true }),
      });
      await product.save();
      const category = await Category.findById(fields.category);
      category.products.push(product._id);
      await category.save();
      res.status(201).json({ msg: 'product successfully created' });
    } catch (error) {
      console.log('[ Product Controller -> Store ] Ops, something went wrong');
      // for (const picture of files.picture) {
      //   fs.unlink(__dirname + '/../public/img/' + picture.newFilename, (err) => {
      //     if (err) console.log(err);
      //   });
      // }
      return res.status(400).json({ msg: error.message });
    }
  });
}

async function update(req, res) {
  if (req.query.transaction === 'buy') {
    try {
      const product = await Product.findOne({ slug: req.params.slug });

      if (product.stock >= req.body.quantity) {
        product.stock -= req.body.quantity;

        await product.save();
        res.status(200).json({ msg: 'product stock successfully updated' });
      } else {
        res.status(400).json({
          msg: `Ops, someone beated you to it!. There are currently ${product.stock} units available of ${product.name}.`,
        });
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  } else {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + '/../public/img',
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      try {
        const product = await Product.findOne({ slug: req.params.slug });

        for (const picture of product.picture) {
          fs.unlink(__dirname + '/../public/img/' + picture, (err) => {
            if (err) console.log(err);
          });
        }

        const picturesArray = [];

        files.picture.newFilename
          ? picturesArray.push(files.picture.newFilename)
          : picturesArray.push(...files.picture.map((picture) => picture.newFilename));

        await Product.findOneAndUpdate(
          { slug: req.params.slug },
          {
            name: fields.name,
            description: fields.description,
            picture: picturesArray,
            price: fields.price,
            stock: fields.stock,
            category: fields.category,
            featured: fields.featured,
            slug: slugify(fields.name, { lower: true, strict: true }),
          }
        );
        res.status(200).json({ msg: 'product successfully updated' });
      } catch (error) {
        console.log('[ Product Controller -> Update ] Ops, something went wrong');

        for (const picture of files.picture) {
          fs.unlink(__dirname + '/../public/img/' + picture.newFilename, (err) => {
            if (err) console.log(err);
          });
        }
        return res.status(304).json({ msg: error.message });
      }
    });
  }
}

async function destroy(req, res) {
  try {
    await Product.findOneAndDelete({ slug: req.params.slug });
    return res.status(200).json({ msg: 'Product successfully deleted' });
  } catch (err) {
    console.log('[ Product Controller -> Destroy ] Ops, something went wrong');
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
