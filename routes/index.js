const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./usersRoutes');
const adminRoutes = require('./adminRoutes');
const loginRoutes = require('./loginRoutes');
const orderRoutes = require('./orderRoutes');
const orderStatusRoutes = require('./orderStatusRoutes');
const seederRoutes = require('./seederRoutes');

module.exports = (app) => {
  app.use('/login', loginRoutes);
  app.use('/categories', categoryRoutes);
  app.use('/products', productRoutes);
  app.use('/admins', adminRoutes);
  app.use('/users', userRoutes);
  app.use('/orders', orderRoutes);
  app.use('/orderstatus', orderStatusRoutes);
  app.use('/seeders', seederRoutes);
};
