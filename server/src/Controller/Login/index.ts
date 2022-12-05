import { Router } from 'express';
import { verifyUser } from './login.service';

const LoginController = Router();

LoginController.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await verifyUser(email, password);
    res.cookie('token', result?.token);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.header(404).send(err);
  }
});

export default LoginController;
