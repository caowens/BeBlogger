import Express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import RouteHandler from './Routes/router';
import { dbConnect } from './Config/database';
import AuthMiddleware from './Middleware/Auth';

const PORT = process.env.PORT || 3500;
const Server = Express();

// Database Connection
dbConnect();

// Middleware
Server.use(cors({ exposedHeaders: ['token'] }));
Server.use(Express.json());
Server.use(cookieParser());
Server.use(Express.urlencoded({ extended: true }));

//Router
Server.use('/', RouteHandler);

Server.get('*', (req, res) => {
  res.send('Hello World');
});

Server.listen(PORT, () => {
  console.log(`Listening To Server at PORT: ${PORT}`);
});
