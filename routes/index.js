const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./usersRoutes");
const adminRoutes = require("./adminRoutes")

module.exports = (app) => {
  app.use("/categories", categoryRoutes);
  app.use("/user", userRoutes);
  app.use("/products", productRoutes);
  app.use("/admin", adminRoutes);
};
