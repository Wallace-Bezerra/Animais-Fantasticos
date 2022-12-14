
export default function navTabs() {
    const animaisLista = document.querySelectorAll(".animais-imagens li");
    const animaisConteudo = document.querySelectorAll(".animais-descricao section");

    function ativaTabs(index) {
        animaisConteudo.forEach((item) => {
            item.classList.remove("ativo");
        });
        animaisConteudo[index].classList.add("ativo");

        if (window.matchMedia('(max-width:630px)').matches) {
            animaisConteudo[index].scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }

    }

    if (animaisLista.length && animaisConteudo.length) {
        animaisLista.forEach((img, index) => {
            img.addEventListener("click", () => {
                ativaTabs(index);
            })
        });
    }
}
