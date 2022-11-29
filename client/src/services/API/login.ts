import { axiosInstance } from '../../config/axiosConnection';
import Auth from '../Auth';

export const loginAPI = async (email: string, password: string) => {
  try {
    const isAuth = await axiosInstance.post('/login', {
      email,
      password,
    });
    const data = isAuth.data;
    if (data.message) throw data;
    else {
      localStorage.clear();
      localStorage.setItem('userName', data.user.userName);
      localStorage.setItem('userId', data.user.userId);
      localStorage.setItem('token', data.token);
      Auth && Auth.setUser(data.user.userId, data.user.userName);
      return true;
    }
  } catch (err) {
    throw err;
  }
};

export const registerUserAPI = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const isRegister = await axiosInstance.post('/user', user);
    const data = isRegister.data;
    if (data.message) throw data;
    return true;
  } catch (err) {
    console.log(err);
    throw { message: 'Network Error' };
  }
};

export const deleteUserAPI = async (_id: string) => {
  try {
    const deleteUser = await axiosInstance.delete(`/user`, {
      data: { _id },
    });
    const data = deleteUser.data;
    console.log(deleteUser);
    if (data.message) throw data;
    else {
      return true;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};