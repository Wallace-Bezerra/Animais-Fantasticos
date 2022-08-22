// const imgs = document.querySelectorAll("img");

// imgs.forEach((item) => {
//   console.log(item.getAttribute('src'));
// })

// const menu = document.querySelector('a');
// menu.addEventListener('click', () => {
//   imgs[0].setAttribute("src", "https://compartilhandobr.com/wp-content/uploads/2022/08/fundamentos-da-ilustracao.jpg");
// })


//EXERCICIOS classes e atributos
// Adicione a classe ativo a todos os itens do menu

const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach((item) => {
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item, index) => {
    if (index !== 0) {
        item.classList.remove("ativo");
    }
})
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");
imagens.forEach((item, index) => {
    console.log(item.nodeName, index, item.hasAttribute("alt"));
})

// Modifique o href do link externo no menu
// const linkExterno = document.querySelector(".menu li:last-child a");
// linkExterno.setAttribute('href', 'http://www.globo.com.br');
// console.log(linkExterno);

const linkExterno = document.querySelectorAll(".menu a");
const ultimoLink = linkExterno[--linkExterno.length];
ultimoLink.setAttribute('href', 'https://youtube.com.br');
console.log(ultimoLink);
console.log(window.scrollY);