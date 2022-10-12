export default function accordionList() {
    const perguntasFaq = document.querySelectorAll(".perguntas-faq dt");
    perguntasFaq.forEach((dt) => {
        dt.addEventListener('click', (event) => {
            dt.classList.toggle("ativo");
            const dd = event.currentTarget.nextElementSibling;
            dd.classList.toggle("ativo");
        })
    })
}