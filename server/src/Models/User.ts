import mongoose, { Document } from 'mongoose';

import { checkHash, hashPassword } from './../Services/crypt';

interface IUser extends Document {
  username: String;
  email: String;
  password: String;
  createdAt?: String;
  validatePassword(password: string): boolean;
}

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
});

userSchema.pre('save', async function (next: any) {
  const thisObj = this;

  if (!this.isModified('password')) {
    return next();
  }

  try {
    thisObj.password = await hashPassword(thisObj.password ?? '');
    return next();
  } catch (e) {
    return next(e);
  }
});

userSchema.methods.validatePassword = async function (password: string) {
  return checkHash(this.password, password);
};

const userModel = mongoose.model<IUser>('users', userSchema);

export default userModel;
