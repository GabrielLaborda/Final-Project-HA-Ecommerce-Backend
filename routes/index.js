const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./usersRoutes");
const adminRoutes = require("./adminRoutes");

module.exports = (app) => {
  app.use("/categories", categoryRoutes);
  app.use("/products", productRoutes);
  app.use("/admin", adminRoutes);
  app.use("/users", userRoutes);
  //   app.use("/order", orderRoutes);
};
