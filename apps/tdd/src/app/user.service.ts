const bcrypt = require('bcrypt');
const _User = require('./User');

const save = async (body) => {
  const hash = await bcrypt.hash(body.password, 13);
  const user = {
    name: body.name,
    email: body.email,
    password: hash,
  };
  await _User.create(user);
};

module.exports = { save };
