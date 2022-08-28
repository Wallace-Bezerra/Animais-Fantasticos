document.documentElement.classList.add("js");
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

//accordion list
const perguntasFaq = document.querySelectorAll(".perguntas-faq dt");
perguntasFaq.forEach((dt) => {
  dt.addEventListener('click', (event) => {
    dt.classList.toggle("ativo");
    const dd = event.currentTarget.nextElementSibling;
    dd.classList.toggle("ativo");
  })
})

// link suave
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

  // window.scrollTo({
  //   top: height,
  //   behavior: "smooth"
  // })
}

// animacao Scroll
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