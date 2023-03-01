import db from '../db';
import { checkPassword } from '../auth/hash';
import { UserDao } from '../Dao/userDao';

//Not testing - no logic, just routing queries to userDao
export interface User {
  id?: number;
  admin: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gamesPlayed?: number;
  gamesWon?: number;
  loggedIn?: boolean;
  words?: string[];
}

export interface SignedInUserInfo {
  email: string;
  token: string;
}

export interface SignUpUserInfo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class UserServices {
  userDao: UserDao;

  constructor() {
    this.userDao = new UserDao(db());
  }

  async checkUserInDBService(email: string): Promise<boolean> {
    const res = await this.userDao.checkUserInDB(email);
    if (res === false) {
      console.log(email, 'No such user');
      return false;
    } else {
      return true;
    }
  }

  async fetchUserService(email: string, password: string): Promise<User> {
    try {
      const userPass = await this.userDao.getPassword(email);
      const passwordBool = await checkPassword(userPass, password);
      if (passwordBool === true) {
        return await this.userDao.getFullUser(email);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateLogIn(email: string): Promise<void> {
    await this.userDao.toggleLoggedIn(email);
  }

  async getUserAndLogIn(email: string, password: string): Promise<User> {
    if ((await this.checkUserInDBService(email)) === false) {
      throw new Error('No such user');
    }
    await this.updateLogIn(email);
    return await this.fetchUserService(email, password);
  }

  async signUpNewUserService(user: SignUpUserInfo): Promise<User> {
    if ((await this.checkUserInDBService(user.email)) === true) {
      throw new Error('This user already exists');
    }
    return new Promise((resolve) => {
      let newUser: User;
      this.userDao.addNewUserToDB(user).then((res) => {
        newUser = res;
        this.userDao.updateDBWithHashedPassword(user.email, user.password).then(() => {
          resolve(newUser);
        });
      });
    });
  }
}
