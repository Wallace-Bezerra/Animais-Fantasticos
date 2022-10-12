
export default function menuMobile() {
    const btnMenu = document.querySelector(".btn-menu");
    const menuMobile = document.querySelector(".menu-mobile");
    const menuSobre = document.querySelector("#sobre");

    function ativarMobile() {
        if (window.matchMedia("(max-width:600px)").matches) {
            menuMobile.appendChild(menuSobre.parentElement);
        }
        else {
            document.querySelector("nav").insertBefore(menuSobre.parentElement, btnMenu);
            menuMobile.classList.remove("ativo");
        }
    }
    ativarMobile();
    window.addEventListener('resize', ativarMobile);

    menuMobile.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            event.currentTarget.classList.remove("ativo");
        }
    })
    btnMenu.addEventListener("click", () => {
        menuMobile.classList.add("ativo");
    });
}