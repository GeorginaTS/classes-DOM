import Animal from "./animal.js";

export default class Goat extends Animal {
    constructor(name, age, sex) {
      super(name, age, sex);
      this.specie = "goat";
      this.lang = "🐐 Beeeee";
      this.age = age
      this.sex = sex
    }
  
    junp() {
      console.log(`${this.name} 🐐 jump jump jump`);
    }
  }