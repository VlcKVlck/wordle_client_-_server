import { User, UserServices } from '../services/userServices';
import { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import { createJWT } from '../auth/jwt';

async function LogInUser(req: Request, res: Response) {
  const service = new UserServices();
  try {
    const answer = await service.getUserAndLogIn(req.body.email, req.body.password);
    const token = await createJWT({ email: answer.email });
    console.log('Loging in user:', answer);
    res.send({ user: answer, token: token });
  } catch (e) {
    res.status(415).send(e.message);
  }
}

async function CreateUser(req: Request, res: Response) {
  const service = new UserServices();
  try {
    const answer: User = await service.signUpNewUserService(req.body);
    const token: string = await createJWT({ email: answer.email });
    console.log('Creating new user', answer);
    res.send({ user: answer, token: token });
  } catch (e) {
    res.status(415).send(e.message);
  }
}

const users = Router();

users.post('/login', bodyParser.json(), LogInUser);

users.post('/newUser', bodyParser.json(), CreateUser);

export default users;
