import Dog from './dog.js';
import Cat from './cat.js';
import Goat from './goat.js'
import Peacock from './peacock.js'

export default function crearAnimal (specie, name, age, sex) {
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
    return animal
  }

