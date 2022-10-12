
export default function dropdown() {
    const menuSobre = document.querySelector("#sobre");
    const dropDown = document.querySelector("[data-drop]");
    const html = document.documentElement;
    const menuDrop = dropDown.querySelector("a");

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
}
