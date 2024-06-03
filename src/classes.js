class Animal {
  constructor(name, age, sex, specie) {
    this.name = name;
    this.specie = specie;
    this.age = age;
    this.sex = sex;
    this.legs = 4;
    this.lang = "";
  }
  addDOM() {
    let article = document.createElement("article")
    article.id = this.name
    article.innerText = this.name
    let section = document.getElementById(this.specie+"s")
    section.appendChild(article)
  }
  addPresentation() {
    let article = document.createElement("div")
    article.id = `${this.name}TXT`
    article.hidden = true
    article.innerText = `${this.lang} i'm  ${this.name}, a ${this.age} years ${this.sex} ${this.specie}`
    let presentation = document.getElementById("presentation")
    presentation.appendChild(article)
  }

  speak() {
    console.log(
      `${this.lang} i'm  ${this.name}, a ${this.age} years ${this.sex} ${this.specie}`
    );
  }

  sleep() {
    console.log(`${this.name} zZzz ....zzZZzz`);
    this.age--;
  }
}

class Dog extends Animal {
  constructor(name, age, sex) {
    super(name, age, sex);
    this.specie = "dog";
    this.lang = "🐶Bup Bup";
  }
}

class Cat extends Animal {
  constructor(name, age, sex) {
    super(name, age, sex);
    this.specie = "cat";
    this.lang = "😺Meow";
  }
}

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

class Peacock extends Animal {
  constructor(name, age, sex) {
    super(name, age, sex);
    this.specie = "peacock";
    this.legs = 2;
    this.lang = "🦚 Peaaaacock";
  }

  fly() {
    console.log(`${this.name} fly fly fly`);
  }
}


const crearAnimal = (specie, name, age, sex) => {
  let animal;
  switch (specie) {
    case "dog" : 
        animal = new Dog(name, age, sex)
        break
    case "cat" :
        animal = new Cat(name, age, sex)
        break
    case "goat" :
        animal = new Goat(name, age, sex)
        break
    case "peacock" :
        animal = new Peacock(name, age, sex)
        break
  }
  animal.speak()
  animal.addDOM()
  animal.addPresentation()
}

crearAnimal("dog", "Xina", 12, "female")
crearAnimal("dog", "Xip", 12, "male")
crearAnimal("dog", "Xop", 12, "male")

crearAnimal("cat", "Pica", 10, "female")
crearAnimal("cat", "Rasca", 9, "male")

crearAnimal("goat", "Mel", 5, "female")
crearAnimal("goat", "Mató", 5, "female")

crearAnimal("goat", "Sal", 4, "female")
crearAnimal("goat", "Pebre", 4, "female")
crearAnimal("goat", "Oli", 5, "male")

crearAnimal("peacock", "Pavoooo", 4, "male")
crearAnimal("peacock", "Pavaaaa", 4, "female")
crearAnimal("peacock", "Aniol", 1, "female")



const showPresentation = (animal) => {
  //event.preventDefault()
  document.getElementById(`${animal}TXT`).hidden = false;
}

const articles = document.querySelectorAll("article")
articles.forEach(e => {
  console.log(e.id)
  e.classList.add("hover:bg-lime-400")
  e.addEventListener("click", (event) => {
    event.preventDefault()
    showPresentation(e.id) 
  }
  )
})
  

//animalPresentacion(xina.speak())

// const Xina = new Dog("Xina", 12, "female")
// Xina.speak();
// Xina.addDOM();


// const mel = new Goat("Mel", 5, "female");
// mel.speak();
// mel.junp();
// mel.addDOM();

// const aniol = new Peacock("Aniol", 1, "female");
// aniol.speak();
// aniol.fly()
// aniol.addDOM();


// const xip = new Dog("Xip", 12, "male");
// xip.speak();
// xip.addDOM();

// const xop = new Dog("Xop", 12, "male");
// xop.speak();
// xop.addDOM();

// const pica = new Cat("Pica", 10, "Female");
// pica.speak();
// pica.addDOM();


// const mato = new Goat("Mató", 5, "female");
// mato.speak();
// mato.addDOM();

// const sal = new Goat("Sal", 4, "female");
// sal.speak();
// sal.addDOM();
// const pebre = new Goat("Pebre", 4, "female");
// pebre.speak();
// pebre.addDOM();
// const oli = new Goat("Oli", 4, "female");
// oli.speak();
// oli.addDOM();
