import db from '../db';
import { mockUsers } from '../data/mockUsers';
import { Client } from 'pg';
import { hashPassword } from '../auth/hash';

//not testing this script - created for dev demonstration only
export async function initializeDB() {
  const client: Client = db();
  const createTableQuery = `
        CREATE TABLE public.Users
        (
            Id          serial PRIMARY KEY,
            Admin       boolean DEFAULT False,
            Email       varchar UNIQUE NOT NULL,
            Password    varchar        NOT NULL,
            FirstName   varchar        NOT NULL,
            LastName    varchar        NOT NULL,
            GamesPlayed int     DEFAULT 0,
            GamesWon    int     DEFAULT 0,
            LoggedIn    boolean DEFAULT false,
            Words       varchar[]
        );`;

  client.query(createTableQuery, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Users table initialized');
    }
  });

  //adding mock admin and users
  const SQLText =
    'INSERT INTO public.Users(Admin, Email, Password,FirstName,LastName, GamesPlayed, GamesWon, LoggedIn, Words) VALUES($1, $2, $3, $4, $5,$6, $7, $8, $9)';

  mockUsers.forEach((user) => {
    hashPassword(user.password).then((hashedPassword) => {
      const values = [user.admin, user.email, hashedPassword, user.firstName, user.lastName, user.gamesPlayed, user.gamesWon, user.loggedIn, user.words];
      client.query(SQLText, values, (err) => {
        if (err) {
          console.log(err.stack);
        }
      });
    });
  });
}
