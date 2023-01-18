import initNumeros from './numeros.js';

export default function InitFetch(){
  async function fetchAnimais(){
    const response = await fetch('/animaisapi.json');
    const animaisJson = await response.json();
    const grid = document.querySelector(".numeros-grid");

    animaisJson.forEach((item)=>{
      renderAnimais(createAnimais(item));
    })
    function createAnimais(animal){
      const div = document.createElement('li');
      div.classList.add('numero-animal');
      div.innerHTML= `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
      return div
    }
    function renderAnimais(li){
      grid.appendChild(li);
    }
  
  initNumeros();
  }
  fetchAnimais();
}



