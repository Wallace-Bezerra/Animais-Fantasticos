// traversing e manipulação

// Duplique o menu e adicione ele em copy
const copy = document.querySelector('footer');
const copyP = document.querySelector('footer p');
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

copy.insertBefore(cloneMenu, copyP);



// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('dl');

// const dt = dl.querySelector('dt');
console.log(dl.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(dl.children[0].nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

const animaisDesc = document.querySelector(".animais-descricao");
const faq = document.querySelector(".faq");
const perguntasFaq = document.querySelector(".perguntas-faq")
const teste = perguntasFaq;
faq.replaceChild(animaisDesc, perguntasFaq);
animais.appendChild(teste);
console.log(animais);