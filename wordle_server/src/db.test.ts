import db from './db';

describe('db', () => {
  it('should throw an error for un initialized client', () => {
    expect(() => db()).toThrow();
  });
});
