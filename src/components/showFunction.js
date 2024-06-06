export default function showPresentation(animal){
    const presentation = document.getElementById("presentation")
    
    for( let i = 0; i < presentation.children.length; i++) {
      //presentation.children[i].classList.remove("show")
      presentation.children[i].classList.add("hide")
    
  
    }
    
    document.getElementById(`${animal}TXT`).classList.remove("hide");
   // document.getElementById(`${animal}TXT`).classList.add("show");
    
  }