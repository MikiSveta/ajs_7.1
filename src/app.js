export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const valid = /^[^\d_-][\w-]*[^\d_-]$/.test(this.name);
    const valid2 = !(/\d{4}/.test(this.name));
    if (valid && valid2) {
      return true;
    }
    return false;
  }
}
