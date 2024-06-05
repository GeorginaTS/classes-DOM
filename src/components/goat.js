

class Goat extends Animal {
    constructor(name, age, sex) {
      super(name, age, sex);
      this.specie = "goat";
      this.lang = "🐐 Beeeee";
    }
  
    junp() {
      console.log(`${this.name} 🐐 jump jump jump`);
    }
  }