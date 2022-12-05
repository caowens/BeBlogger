import JWT from 'jsonwebtoken';
import { SECRET } from './../Config/constant';

export interface IUserData {
  userId: string;
  userName: string;
}

export const createToken = async (user: IUserData) => {
  try {
    const token = JWT.sign(
      { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12 * 7, data: user },
      SECRET
    );
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyToken = async (token: string) => {
  return new Promise((resolve, reject) => {
    const result = JWT.verify(token, SECRET);
    if (result) resolve(true);
    else reject(false);
  });
};
