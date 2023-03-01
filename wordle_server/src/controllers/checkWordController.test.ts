import app from '../app';
import request from 'supertest';

describe('testing checkWord controller', () => {
  it('function will throw error no information', () => {
    request(app)
      .post('/checkWord')
      .send()
      .then((res) => {
        expect(res.statusCode).toEqual(400);
      });
  });
});
