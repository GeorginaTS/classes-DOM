import Dog from './components/dog.js';
import Cat from './components/cat.js';
import Goat from './components/goat.js'
import Peacock from './components/peacock.js'

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
/* 
Creating animals
*/
crearAnimal("dog", "Xina", 12, "female")
crearAnimal("dog", "Xip", 12, "male")
crearAnimal("dog", "Xop", 12, "male")

crearAnimal("cat", "Pica", 10, "female")
crearAnimal("cat", "Rasca", 9, "male")

crearAnimal("goat", "Mel", 5, "female")
crearAnimal("goat", "Mató", 5, "female")

crearAnimal("goat", "Sal", 4, "female")
crearAnimal("goat", "Pebre", 4, "female")
crearAnimal("goat", "Oli", 4, "male")

crearAnimal("peacock", "Pavoooo", 4, "male")
crearAnimal("peacock", "Pavaaaa", 4, "female")
crearAnimal("peacock", "Aniol", 1, "female")



const showPresentation = (animal) => {
  const presentation = document.getElementById("presentation")
  
  for( let i = 0; i < presentation.children.length; i++) {
    //presentation.children[i].classList.remove("show")
    presentation.children[i].classList.add("hide")
  

  }
  
  document.getElementById(`${animal}TXT`).classList.remove("hide");
 // document.getElementById(`${animal}TXT`).classList.add("show");
  
}

const articles = document.querySelectorAll("article")
articles.forEach(e => {
  e.addEventListener("click", (event) => {
    event.preventDefault()
    showPresentation(e.id) 
  }
  )
})
