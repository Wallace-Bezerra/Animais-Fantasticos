export default function dropdown() {

}
const menuSobre = document.querySelector("#sobre");
const dropDown = document.querySelector("[data-drop]");
const html = document.documentElement;
const menuDrop = dropDown.querySelector("a");
const btnMenu = document.querySelector(".btn-menu");
const menuMobile = document.querySelector(".menu-mobile");

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
btnMenu.addEventListener("click", (event) => {
    menuMobile.classList.add("ativo");
});

menuDrop.addEventListener("click", (e) => {
    e.preventDefault();
})
menuSobre.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropDown.classList.toggle("ativo");

    dropDown.addEventListener("click", stopP);
    function stopP(e) {
        e.stopPropagation();
    }
    html.addEventListener('click', (event) => {
        if (event.target !== menuSobre) {
            dropDown.classList.remove("ativo");
            dropDown.removeEventListener("click", stopP);
        }
    })
})