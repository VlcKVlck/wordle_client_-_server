import jwt, { JwtPayload } from 'jsonwebtoken';

//Not testing - external service - checked manually against JWT token website
const MY_JWT_KEY = process.env.JWT_TOKEN || '12345678'; // Simple key just for demo

export async function createJWT(data): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(data, MY_JWT_KEY, async function (err, token) {
      if (err) reject(err);
      return resolve(token);
    });
  });
}

export function checkJWT(email: string, token: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, MY_JWT_KEY, async function (err, res) {
      if (err) reject(err);
      return resolve((res as JwtPayload).email === email);
    });
  });
}
