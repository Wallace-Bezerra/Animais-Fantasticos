// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item, index, l) {
//     console.log(`Imagem numero ${index}`, item, l);
// })

//EXERCICIOS

// Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll("p");

paragrafo.forEach((item) => console.log(item));
// paragrafo.forEach((i) => {
//     return console.log(i);
// })

// Mostre o texto dos parágrafos no console
paragrafo.forEach((item) => console.log(item.innerText));


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => console.log(i++));

