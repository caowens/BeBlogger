import { Router } from 'express';
import {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogsByUserId,
  getBlogsById,
} from './blog.service';
import AuthMiddleware from './../../Middleware/Auth';

const BlogController = Router();

BlogController.get('/', async (req, res) => {
  try {
    const data = await getBlogs();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

BlogController.post('/', AuthMiddleware, async (req, res) => {
  try {
    const { authorId, title, description, authorName } = req.body;
    const data = await addBlog({ authorId, authorName, title, description });
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

BlogController.post('/user', async (req, res) => {
  try {
    const { _id } = req.body;
    const data = await getBlogsByUserId(_id);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

BlogController.post('/id', async (req, res) => {
  try {
    const { _id } = req.body;
    const data = await getBlogsById(_id);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

BlogController.put('/', AuthMiddleware, async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    const data = await updateBlog(_id, title, description);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

BlogController.delete('/', AuthMiddleware, async (req, res) => {
  try {
    const { _id } = req.body;
    const data = await deleteBlog(_id);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.header(404).send({
      message: 'Something went wrong',
    });
  }
});

export default BlogController;
