// Verifique a distância da primeira imagem
// em relação ao topo da página
const img1 = document.querySelector("img");
const topo = img1.offsetTop;
console.log(topo);

// Retorne a soma da largura de todas as imagens
let somaImg = 0;

const imgs = document.querySelectorAll('img');
imgs.forEach((img, index) => {
    const rect = img.getBoundingClientRect();
    somaImg += rect.width;
    console.log(somaImg, index, rect.width);
});

console.log('Total:', somaImg);

// console.log(imgs);
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((link) => {
    const largura = link.clientWidth;
    const altura = link.clientHeight;

    if (largura >= 48 && altura >= 48) {
        console.log("Esse link tem o requisito minimo.");
        console.log(`Largura:${link.clientWidth}`, `Altura:${link.clientHeight}`);
    }
    else {
        console.log("Esse link não possui px recomendados para telas de toque.");
        console.log(`Largura:${link.clientWidth}`, `Altura:${link.clientHeight}`);
    }

})
console.log(links);
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");
const mobile = window.matchMedia("(max-width:720px)");
// console.log(mobile.matches);
if (mobile.matches) {
    menu.classList.add("menu-mobile");

}