//eventos

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const links = document.querySelectorAll("a");
// console.log(links);

// links.forEach((link) => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         event.currentTarget.classList.toggle("ativo");
//     })
// });


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const elements = document.querySelectorAll("body");
// elements.forEach((element) => {
//     element.addEventListener('click', (event,) => {
//         console.log(event.target);
//     })
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const elements = document.querySelectorAll("body");
// elements.forEach((element) => {
//     element.addEventListener('click', (event,) => {
//         event.target.remove();
//     })
// });
// Se o usuário clicar na tecla (t), aumente todo o texto do site.
// const body = document.querySelector('body');
// window.addEventListener('keydown', (item) => {
//     if (item.key === "t") {
//         console.log("Funcionando", item.key);
//         body.style.fontSize += '30px';
//     }
// })