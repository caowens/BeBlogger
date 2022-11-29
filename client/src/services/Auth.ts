import { userData } from '../config/global';

class Auth {
  _validUser = false;
  _userId = '';
  _userName = '';

  constructor() {
    if (userData.userId && userData.userName) {
      this._validUser = true;
      this._userId = userData.userId;
      this._userName = userData.userName;
    }
  }

  isAuthenticated() {
    return this._validUser;
  }
  setAuthentication(arg: boolean) {
    this._validUser = arg;
  }
  setUser(userId: string, userName: string) {
    this._validUser = true;
    this._userId = userId;
    this._userName = userName;
  }
  getUser() {
    return {
      userId: this._userId,
      userName: this._userName,
    };
  }
  logOut() {
    this._validUser = false;
    this._userId = '';
    this._userName = '';
    localStorage.clear();
    document.cookie = '';
  }
}

export default new Auth();