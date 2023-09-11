const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');

module.exports = (app) => {
  app.use('/categories', categoryRoutes);
  app.use('/products', productRoutes);
  //   app.use("/order", orderRoutes);
};
