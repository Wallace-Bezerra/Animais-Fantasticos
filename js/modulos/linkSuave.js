export default function linkSuave() {
    const menu = document.querySelectorAll(".menu a[href^='#'"); // selecionei todos link interno

    menu.forEach((item) => {
        item.addEventListener('click', scrollSuave) // evento click 
    })

    function scrollSuave(event) {
        event.preventDefault(); //prevendo ação do link

        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);// passando href para buscar a section
        const height = section.offsetTop; // pegando distancia do topo até a section
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        const menuMobile = document.querySelector(".menu-mobile.ativo");
        if (menuMobile) {
            setTimeout(() => {
                menuMobile.classList.remove("ativo");
            }, 600);

        }

        // window.scrollTo({
        //   top: height,
        //   behavior: "smooth"
        // })
    }
}
