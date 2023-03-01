import { Client } from 'pg';
import { User } from '../services/userServices';
import { hashPassword } from '../auth/hash';

//Not testing this class - all it does is querying the DB, no logic

export class UserDao {
  constructor(public readonly client: Client) {}

  async checkUserInDB(email: string): Promise<boolean> {
    const text = 'SELECT EXISTS (SELECT 1 FROM public.users WHERE email=$1)';
    const values = [email];
    const res = await this.client.query(text, values);
    return res.rows[0].exists;
  }

  async getPassword(email: string): Promise<string> {
    const textToVerifyPassword = 'SELECT password FROM public.users WHERE Email=$1';
    const valuesToVerifyPassword = [email];
    const res = await this.client.query(textToVerifyPassword, valuesToVerifyPassword);
    return res.rows[0].password;
  }

  async getFullUser(email: string): Promise<User> {
    const text = 'SELECT * FROM public.users WHERE Email=$1';
    const values = [email];
    const queryUser = await this.client.query(text, values);
    queryUser.rows[0].password = '';
    return queryUser.rows[0];
  }

  async toggleLoggedIn(email: string): Promise<void> {
    const text = 'UPDATE public.users SET loggedin = NOT loggedin WHERE Email=$1';
    const values = [email];
    await this.client.query(text, values);
  }

  async addNewUserToDB(user): Promise<User> {
    const text: string = 'INSERT INTO public.users (firstname, lastname, email, password, loggedin)\n' + 'VALUES ($1,$2,$3,$4,$5) RETURNING *;';
    const values: (string | boolean)[] = [user.firstName, user.lastName, user.email, '', true];
    const res = await this.client.query(text, values);
    return res.rows[0];
  }

  async updateDBWithHashedPassword(email: string, password: string): Promise<void> {
    const hashedPassword = await hashPassword(password);
    const text = 'UPDATE public.users SET password=$1 WHERE Email=$2 RETURNING *';
    const values = [hashedPassword, email];
    console.log(await this.client.query(text, values), 'with hashed pass');
  }
}
