import { Router } from 'express';
import { addUser, getUsers, deleteUser, updateUser } from './user.service';
import AuthMiddleware from './../../Middleware/Auth';

const UserController = Router();

UserController.get('/', async (req, res) => {
  try {
    const { _id } = req.body;
    const data = _id ? await getUsers(_id) : await getUsers();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});
UserController.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const data = await addUser({ username, email, password });
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

UserController.put('/', AuthMiddleware, async (req, res) => {
  try {
    const { _id, user } = req.body;
    const data = await updateUser(_id, user);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

UserController.delete('/', async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const data = await deleteUser(_id);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

export default UserController;
