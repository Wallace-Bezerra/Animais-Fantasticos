document.documentElement.classList.add("js");
const animaisLista = document.querySelectorAll(".animais-imagens li");
const animaisConteudo = document.querySelectorAll(".animais-descricao section");

function ativaTabs(index) {
    animaisConteudo.forEach((item) => {
        item.classList.remove("ativo");
    });
    animaisConteudo[index].classList.add("ativo");
}

if (animaisLista.length && animaisConteudo.length) {
    animaisLista.forEach((img, index) => {
        img.addEventListener("click", () => {
            ativaTabs(index);
        })
    });
}

//accordion list
const perguntasFaq = document.querySelectorAll(".perguntas-faq dt");
perguntasFaq.forEach((dt) => {
    dt.addEventListener('click', (event) => {
        const dd = event.currentTarget.nextElementSibling;
        dd.classList.toggle("ativo");
        // console.log(event.currentTarget.nextElementSibling);
    })
})

// console.log(perguntasFaq);