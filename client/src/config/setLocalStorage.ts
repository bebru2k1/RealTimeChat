export const tokenLocalStorage = class {
  static setToken(name: string, token: string) {
    localStorage.setItem(name, token);
  }
  static deleteToken(name: string) {
    localStorage.removeItem(name);
  }
};
