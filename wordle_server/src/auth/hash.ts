import bcrypt from 'bcrypt';

//Not testing - external service
export async function checkPassword(DbPassword: string, userPassword: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userPassword, DbPassword, async function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 6, function (err, hash) {
      if (err) return reject(err);
      return resolve(hash);
    });
  });
}
