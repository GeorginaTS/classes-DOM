import Animal from "./animal.js";

export default class Cat extends Animal {
  constructor(name, age, sex) {
    super(name, age, sex);
    this.specie = "cat";
    this.lang = "😺Meow";
    this.age = age;
    this.sex = sex;
  }
  // getOlder() {
  //   //     if (this.age == 1) {
  //   //        this.age = 15
  //   //     } else if (this.age == 2) {
  //   //        this.age=24
  //   //     } else {
  //   //        this.age += 4
  //   //     }
  //   return (this.age += 1);
  // }
}