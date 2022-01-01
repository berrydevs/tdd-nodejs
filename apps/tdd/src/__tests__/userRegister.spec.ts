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

const validUser = {
  name: 'james',
  email: 'james@berrydevs.com',
  password: 'secret',
};

const postValidator = (user = validUser) => {
  return request(app).post('/api/1.0/users').send(user);
};

describe('User Registration', () => {
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

  it('returns 400 when username is null', async () => {
    const response = await postValidator({
      name: null,
      email: 'james@berrydevs.com',
      password: 'secret',
    });

    expect(response.status).toBe(400);
  });

  it('returns validationErrors field in response body when validation errors occurs', async () => {
    const response = await postValidator({
      name: null,
      email: 'james@berrydevs.com',
      password: 'secret',
    });

    const body = response.body;

    expect(body.validationErrors).not.toBeUndefined();
  });

  it('returns name cannot be null when name is null', async () => {
    const response = await postValidator({
      name: null,
      email: 'james@berrydevs.com',
      password: 'secret',
    });

    const body = response.body;

    expect(body.validationErrors.name).toBe('Name cannot be null.');
  });

  it('returns email cannot be null when email is null', async () => {
    const response = await postValidator({
      name: 'James',
      email: null,
      password: 'secret',
    });

    const body = response.body;

    expect(body.validationErrors.email).toBe('Email cannot be null.');
  });

  it('returns error for both name and email null', async () => {
    const response = await postValidator({
      name: null,
      email: null,
      password: 'secret',
    });

    const body = response.body;

    expect(Object.keys(body.validationErrors)).toEqual(['name', 'email']);
  });
});
