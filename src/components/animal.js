class Animal {
  constructor(name, age, sex) {
    this.name = name;
    this.specie = "to define";
    this.age = 1;
    this.sex = "to define";
    this.legs = 4;
    this.lang = "😶";
  }
  addDOM() {
    let article = document.createElement("article");
    article.id = this.name;
    article.innerText = this.name;
    let section = document.getElementById(`${this.specie}s`);
    section.appendChild(article);
  }
  addPresentation() {
    let article = document.createElement("div");
    article.id = `${this.name}TXT`;
    article.classList.add("hide");
    article.innerText = `${this.lang} i'm  ${this.name}, a ${this.age} years old, ${this.sex} ${this.specie}`;
    let presentation = document.getElementById("presentation");
    presentation.appendChild(article);
  }

  speak() {
    console.log(
      `${this.lang} i'm  ${this.name}, a ${this.age} years old ${this.sex} ${this.specie}`
    );
  }

  sleep() {
    console.log(`${this.name} zZzz ....zzZZzz`);
    this.age--;
  }
  getOlder() {
    return ++this.age;
  }
}

module.exports = Animal