const User = require('../models/User');
const bcryptjs = require('bcryptjs');

async function userSeeders() {
  const hashedPassword = await bcryptjs.hash('123456', 10);

  const users = [
    {
      firstname: 'Bob',
      lastname: 'Marley',
      email: 'bm@mail.com',
      password: hashedPassword,
      address: '100 main street',
      phone: '+598 0000 0001',
    },
    {
      firstname: 'John',
      lastname: 'Lennon',
      email: 'jl@mail.com',
      password: hashedPassword,
      address: '101 main street',
      phone: '+598 0000 0002',
    },
    {
      firstname: 'Liam',
      lastname: 'Neeson',
      email: 'ln@mail.com',
      password: hashedPassword,
      address: '102 main street',
      phone: '+598 0000 0003',
    },
    {
      firstname: 'Lionel',
      lastname: 'Messi',
      email: 'lm@mail.com',
      password: hashedPassword,
      address: '103 main street',
      phone: '+598 0000 0004',
    },
    {
      firstname: 'Luis',
      lastname: 'Suarez',
      email: 'ls@mail.com',
      password: hashedPassword,
      address: '104 main street',
      phone: '+598 0000 0005',
    },
    {
      firstname: 'Julia',
      lastname: 'Roberts',
      email: 'jr@mail.com',
      password: hashedPassword,
      address: '105 main street',
      phone: '+598 0000 0006',
    },
    {
      firstname: 'Jennifer',
      lastname: 'Aniston',
      email: 'ja@mail.com',
      password: hashedPassword,
      address: '106 main street',
      phone: '+598 0000 0007',
    },
    {
      firstname: 'Carolin',
      lastname: 'Doe',
      email: 'cd@mail.com',
      password: hashedPassword,
      address: '107 main street',
      phone: '+598 0000 0008',
    },
    {
      firstname: 'Freddy',
      lastname: 'Mercury',
      email: 'fd@mail.com',
      password: hashedPassword,
      address: '108 main street',
      phone: '+598 0000 0009',
    },
    {
      firstname: 'User',
      lastname: 'Example',
      email: 'user@example.com',
      password: hashedPassword,
      address: '109 main street',
      phone: '+598 0000 0010',
    },
  ];
  await User.insertMany(users);
  console.log('Los seeders de User fueron insertados!');
}

module.exports = userSeeders;
