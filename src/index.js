import crearAnimal from './components/functions.js'
import showPresentation from './components/showFunction.js'


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

const articles = document.querySelectorAll("article")
articles.forEach(e => {
  e.addEventListener("click", (event) => {
    event.preventDefault()
    showPresentation(e.id) 
  }
  )
})
