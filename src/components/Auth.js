class Auth {
  constructor () {
    this.authenicated = localStorage.access_token ? true : false;
  }

  login (cb) {
    this.authenicated = true;
    cb();
  }

  logout (cb) {
    this.authenicated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenicated;
  }
}

export default new Auth();
