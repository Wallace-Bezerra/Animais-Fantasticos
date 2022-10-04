export default function modal() {
  const btnOpen = document.querySelector("[data-modal='open']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const btnClose = document.querySelector("[data-modal='close']");
  if (btnOpen && btnClose && modalContainer) {
    btnOpen.addEventListener('click', (event) => {
      event.preventDefault();
      modalContainer.classList.add("ativo");
    })
    btnClose.addEventListener("click", () => {
      modalContainer.classList.remove("ativo");
    })

    modalContainer.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        modalContainer.classList.remove("ativo");
      }
    })
  }
};

