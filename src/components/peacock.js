class Peacock extends Animal {
    constructor(name, age, sex) {
      super(name, age, sex);
      this.specie = "peacock";
      this.legs = 2;
      this.lang = "🦚 Peeacoooock";
    }
  
    fly() {
      console.log(`${this.name} fly fly fly`);
    }
  }