export default function tooltip() {

}

const mapa = document.querySelector("[data-mapa]");

mapa.addEventListener('mouseover', (event) => {
    console.log(event);
    const tooltip = document.createElement("div");
    tooltip.textContent = mapa.ariaLabel;
    tooltip.classList.add("tooltip");
    console.log(tooltip);
    mapa.appendChild(tooltip);

    mapa.addEventListener('mouseleave', () => {
        tooltip.remove();
        mapa.removeEventListener("mousemove", onMousemove);
    })

    mapa.addEventListener("mousemove", onMousemove);

    function onMousemove(event) {
        tooltip.style.top = event.offsetY + 20 + "px";
        tooltip.style.left = event.offsetX + 20 + "px";
    }
})
