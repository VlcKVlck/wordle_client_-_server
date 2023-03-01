import app from '../app';
import supertest from 'supertest';

describe('fetchNewWord', () => {
  it('check end point works with any number between 2 and 10', () => {
    const length = Math.ceil(Math.random() * 9 + 1);
    const request = supertest(app);
    request.get(`/generateWord/${length}`).then((res) => {
      expect(res.statusCode).toBe(200);
    });
  });
  it('expect test to fail is param passed is NaN', () => {
    const length = 'a';
    const request = supertest(app);
    request.get(`/generateWord/${length}`).then((res) => {
      expect(res.statusCode).toEqual(400);
    });
  });
});
