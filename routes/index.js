const productRoutes = require("./productRoutes");

module.exports = (app) => {
  //   app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  //   app.use("/order", orderRoutes);
};
