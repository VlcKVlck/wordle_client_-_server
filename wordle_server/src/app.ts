import express from 'express';
import cors from 'cors';
import users from './controllers/usersControllers';
import newWord from './controllers/newWordController';
import checkedWord from './controllers/checkWordController';
import admin from './controllers/adminController';

// this module is not testable

const app = express();

app.locals.data = {};

app.use(cors());

app.use('/users', users);

app.use('/generateWord', newWord);

app.use('/checkWord', checkedWord);

app.use('/admin', admin);

export default app;
