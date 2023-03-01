import request from 'supertest';
import app from '../app';

describe('testing admin controllers', () => {
  it('if endpoint receives only email and no token will return error', () => {
    request(app)
      .post('/admin/login')
      .send({ email: 'email@example.com' })
      .then((res) => {
        expect(res.statusCode).toEqual(415);
      });
  });
});
