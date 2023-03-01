import { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import { logInAdmin } from '../services/adminService';

const admin = Router();

async function AdminLogIn(req: Request, res: Response) {
  try {
    const answer = await logInAdmin(req.body.email, req.headers.authorization);
    console.log(answer);
    res.status(200).send(answer);
  } catch (e) {
    res.status(415).send(e.message);
  }
}

admin.post('/login', bodyParser.json(), AdminLogIn);

export default admin;
