import userModel from '../../Models/User';
import { createToken, IUserData } from './../../Services/JWT';

const notFoundMessage = {
  message: 'User Email or Password is Wrong.',
};

export const verifyUser = async (email: string, password: string) => {
  try {
    const user = await userModel.findOne({ email });
    if (user === null) throw notFoundMessage;
    const verified = await user.validatePassword(password);
    if (verified) {
      const verifiedUser: IUserData = {
        userId: user._id,
        userName: user.username as string,
      };
      return {
        token: await createToken(verifiedUser),
        user: verifiedUser,
      };
    } else throw notFoundMessage;
  } catch (err) {
    throw err;
  }
};
