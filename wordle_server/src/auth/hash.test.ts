import { hashPassword } from './hash';

describe('check hashPassword', () => {
  it('hash password should return a different password than it gets', () => {
    hashPassword('abc').then((res) => {
      expect(res).not.toEqual('abc');
    });
  });
});
