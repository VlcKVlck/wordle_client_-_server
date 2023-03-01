import request from 'supertest';
import app from '../app';

describe('testing LogInUser controller', () => {
  it('function will throw error with a only username and no password', () => {
    request(app)
      .post('/users/login')
      .send({ email: 'email@noemail.com' })
      .then((res) => {
        expect(res.statusCode).toBe(415);
      });
  });
  it('function will throw error with a only password and no username', () => {
    request(app)
      .post('/users/login')
      .send({ password: '12345' })
      .then((res) => {
        expect(res.statusCode).toBe(415);
      });
  });
});

describe('create new user', () => {
  it('function will throw error with a only username and no password', () => {
    request(app)
      .post('/users/newUser')
      .send({ email: 'email@noemail.com' })
      .then((res) => {
        expect(res.statusCode).toBe(415);
      });
  });
  it('function will throw error with a only password and no username', () => {
    request(app)
      .post('/users/newUser')
      .send({ password: '12345' })
      .then((res) => {
        expect(res.statusCode).toBe(415);
      });
  });
});
