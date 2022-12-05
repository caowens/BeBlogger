import argon2 from 'argon2';
import mongoose from 'mongoose';

export const hashPassword = async (text: string) => {
  try {
    const hash = await argon2.hash(text);
    return hash;
  } catch (err) {
    console.log(err);
    return text;
  }
};

export const checkHash = async (hash: string, text: string) => {
  try {
    const check = await argon2.verify(hash, text);
    return check;
  } catch (err) {
    console.error(err);
    return false;
  }
};
