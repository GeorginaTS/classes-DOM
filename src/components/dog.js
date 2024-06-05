import Animal from "./animal.js";

export default class Dog extends Animal {
    constructor(name, age, sex) {
      super(name);
      this.specie = "dog";
      this.lang = "🐶Bup Bup";
      this.age = age
      this.sex = sex
    }
    getOlder() {
      return this.age+=7
    }
  }