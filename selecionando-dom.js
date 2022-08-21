// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
const imagens2 = document.getElementsByTagName("img");
console.log(imagens, imagens2);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const hrefImagem = document.querySelectorAll('[src^="./assets/img/imagem"]');
console.log("Href com imagem:", hrefImagem);

// Selecione todos os links internos (onde o href começa com #)
const linkInternos = document.querySelectorAll('[href^="#"]');
console.log("LinkInterno:", linkInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector(".animais-descricao h2");

const option2 = document.querySelector("h2:first-child");

console.log("Primeiro h2 de animais-descrição:", firstH2.innerHTML);
console.log("Outra forma first-child:", option2.innerHTML);

// Selecione o último p do site
const p = document.querySelectorAll("p");
const ultimoP = p[p.length - 1]; // ou --p.length
console.log("Ultimo parágrafo:", ultimoP.innerText);


