import db from '../db';

//Not testing this class - all it does is querying the DB

export async function isUserAdmin(email: string) {
  const client = db();
  console.log('in dao', email);
  const text = 'SELECT admin FROM public.users WHERE email=$1';
  const values: string[] = [email];
  return client.query(text, values).then((res) => {
    try {
      return res.rows[0].admin;
    } catch (e) {
      console.log(e);
    }
  });
}
