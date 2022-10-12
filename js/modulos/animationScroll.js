export default function animationScroll() {
    const scrollSection = document.querySelectorAll(".js-scroll");
    window.addEventListener("scroll", scrollAnimation);

    function scrollAnimation() {
        scrollSection.forEach((item) => {
            const top = item.getBoundingClientRect().top;
            const windows = (window.innerHeight * 0.7);
            if ((top - windows) < 0) {
                item.classList.add("ativo");
            }
        })
    }
    scrollAnimation();
}
