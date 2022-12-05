import express from 'express';

import UserController from './../Controller/User';
import BlogController from './../Controller/Blog';
import LoginController from '../Controller/Login';

const RouteHandler = express.Router();

RouteHandler.use('/login', LoginController);
RouteHandler.use('/user', UserController);
RouteHandler.use('/blog', BlogController);

export default RouteHandler;
