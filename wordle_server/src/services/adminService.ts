import { checkJWT } from '../auth/jwt';
import { isUserAdmin } from '../Dao/adminDao';

//not testable  - only calls other functions
export async function logInAdmin(email: string, token: string) {
  try {
    return (await isUserAdmin(email)) && (await checkJWT(email, token));
  } catch (e) {
    throw new Error(e.message);
  }
}
