# wordle 

## General notes
My wordle implements basic requirements, as well as a user database, password hashing and JWT and restricted access. Words are checking against a dictionary API, and word to play with is generated through a random-words npm package. The client is written in JS, with elaborate server in TypeScript. 
 `npm start` for both server and client will run the app.
 `npm test`for both apps with run tests. Server is tested using `jest`. Client UI has basic testing with `cypress`.


## wordle_server

**Admin access**
* The game features a protected admin area (currently with no capabilities). To enter the Admin area you need to log in as the first user in the DB (set as admin).

**Database connectivity**
* Postgres is used to manage users
* You need to manually create a database called "wordle" (all small letters)
* The DB is initialized (creates table and populates with users) when you run `npm start` for the first time. If you need to run `npm start` start again, you can delete the table or comment out line 14 of index.ts (`await initializeDB ();`)
* Mock data (with un-hashed passwords) is available in the *data* folder.

## wordle_client 
**Word checking**
The client uses a dictionary API to check if a word is submitted. Today (Monday) the API server was down, so there might be error logs on the console. 
