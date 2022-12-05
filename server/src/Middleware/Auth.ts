import { NextFunction, Request, Response } from 'express';
import { verifyToken } from './../Services/JWT';

const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.headers;
    if (!token) throw Error();

    verifyToken(token as string)
      .then((d) => (d ? next() : Error()))
      .catch((e) => Error(e));
  } catch (err) {
    res.status(401).send({ message: `You're Unauthorized.` });
  }
};

export default AuthMiddleware;
