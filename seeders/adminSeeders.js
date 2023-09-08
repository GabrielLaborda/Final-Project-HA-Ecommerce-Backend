const Admin = require("../models/Admin");
const bcryptjs = require("bcryptjs");

async function adminSeeders() {
  const hashedPassword = await bcryptjs.hash("123456", 10);
  const admin = [
    {
      firstname: "Admin",
      lastname: "Example",
      email: "admin@example.com",
      password: hashedPassword,
    },
  ];

  await Admin.insertMany(admin);
  console.log("Los seeders de Admin fueron insertados!");
}

module.exports = adminSeeders;
