import exp = require('constants');
const sequelize = require('../app/config/database');

const request = require('supertest');
const app = require('../main');
const User = require('../app/User');

beforeAll(() => {
  return sequelize.sync();
});

beforeEach(() => {
  return User.destroy({ truncate: true });
});

describe('User Registration', () => {
  const postValidator = () => {
    return request(app).post('/api/1.0/users').send({
      name: 'james',
      email: 'james@berrydevs.com',
      password: 'secret',
    });
  };

  it('returns 200 when signup request is valid', async () => {
    const response = await postValidator();

    expect(response.status).toBe(200);
  });

  it('returns success message on signup', async () => {
    const response = await postValidator();

    expect(response.body.message).toBe('You are onboard.');
  });

  it('saves user to database', async () => {
    const response = await postValidator();
    const users = await User.findAll();
    expect(users.length).toBe(1);
  });

  it('saves name and email database', async () => {
    const response = await postValidator();
    const users = await User.findAll();
    const firstUser = users[0];
    expect(firstUser.name).toBe('james');
    expect(firstUser.email).toBe('james@berrydevs.com');
    expect(users.length).toBe(1);
  });

  it('hashes the password in the database', async () => {
    const response = await postValidator();
    const users = await User.findAll();
    const firstUser = users[0];
    expect(firstUser.password).not.toBe('secret');
  });
});
