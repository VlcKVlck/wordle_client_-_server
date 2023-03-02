# wordle 

## General notes
This wordle game was the final project of my full stack course.
It implements the basic requirements of the project (as required by the project PRD), as well as more eleborate features, such as word checking APIs, game configuration, a user database, game scoring, password hashing and JWT based access control.

To run the game, you'll need to have postgres installed. Create a database called "wordle" (all small letters). Then clone this repo locally, run `npm install` in the main folder, and then run `npm start`. This will run both server and client. If you need to run `npm start` start again, you will get errors telling you the database exists. You can ignore the errors, or alternatively you can delete the table or comment out line 14 of wordle_server/index.ts (`await initializeDB ();`). You can also run each of the server and client seperatly by running the same commands within the relevant path. Testing is seperate as well. 

Words are checked against a dictionary API, and word to play with is generated through a random-words npm package. The client is written in JS, with elaborate server in TypeScript. 
 `npm start` for both server and client will run the app.
 `npm test`for both apps with run tests. Server is tested using `jest`. Client UI has basic testing with `cypress`. You'll need to run the test commands in the cleint/server folders. There is not general test command. 

# How to play 

## Starting the Game
In the welcome screen you can chose if you want to sign in, or play the game as a guest.

![Welcome screen](/screenshots/welcomescreen.png )
## Getting help
Click the help button at any time for some help.

![Help](/screenshots/help.png )

## Playing the Game

If you guest the correct word within the given amount of tries - you win! 

![Win](/screenshots/won.png )

Otherwise, you can play again with a new word by clicking "Play again".

![Win](/screenshots/lose.png )


# Additional technical information


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
The client uses a dictionary API to check if a word is submitted. 

