const bcrypt = require('bcrypt');
const User = require('./app/User');

const save = async (body) => {
  const hash = await bcrypt.hash(body.password, 13);
  const user = {
    name: body.name,
    email: body.email,
    password: hash,
  };
  await User.create(user);
};

module.exports = { save };
