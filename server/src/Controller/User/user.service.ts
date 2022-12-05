import userModel from '../../Models/User';

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: string;
}
export const addUser = async (user: IUser) => {
  try {
    const newUser = new userModel(user);
    const result = await newUser.save();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteUser = async (_id: string) => {
  try {
    const result = await userModel.findByIdAndDelete(_id);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const updateUser = async (_id: string, user: IUser) => {
  try {
    const result = userModel.findByIdAndUpdate(_id, user);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getUsers = async (_id?: string) => {
  try {
    let result;
    if (_id) result = await userModel.findById(_id);
    else result = await userModel.find();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
