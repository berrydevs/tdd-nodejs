import exp = require('constants');
const sequelize = require('../app/config/database')

const request = require('supertest');
const app = require('../main');
const User = require('../app/User');

beforeAll(() => {
  return sequelize.sync()
})

beforeEach(() => {
  return User.destroy({truncate: true})
})

describe('User Registration', () => {
  it('returns 200 when signup request is valid', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        name: 'james',
        email: 'james@berrydevs.com',
        password: 'secret',
      })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it('returns success message on signup', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        name: 'james',
        email: 'james@berrydevs.com',
        password: 'secret',
      })
      .then((response) => {
        expect(response.body.message).toBe('You are onboard.');
        done();
      });
  });

  it('saves user to database', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        name: 'james',
        email: 'james@berrydevs.com',
        password: 'secret',
      })
      .then(() => {
        User.findAll().then((users) => {
          expect(users.length).toBe(1);
          done();
        });
      });
  });

  it('saves name and email database', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        name: 'james',
        email: 'james@berrydevs.com',
        password: 'secret',
      })
      .then(() => {
        User.findAll().then((users) => {
          const firstUser = users[0]
          expect(firstUser.name).toBe('james')
          expect(firstUser.email).toBe('james@berrydevs.com')
          expect(users.length).toBe(1);
          done();
        });
      });
  });

  it('hashes the password in the database', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        name: 'james',
        email: 'james@berrydevs.com',
        password: 'secret',
      })
      .then(() => {
        User.findAll().then((users) => {
          const firstUser = users[0]
          expect(firstUser.password).not.toBe('secret')
          done();
        });
      });
  });
});
