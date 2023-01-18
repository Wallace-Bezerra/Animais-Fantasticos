
export default function numeros() {
  const numerosAnimais = document.querySelectorAll("[data-numero]");
  console.log(numerosAnimais)
  let n = 0;
  function animaNumero() {
    numerosAnimais.forEach((item) => {
      const total = item.innerText;
      const incremento = total / 100;
      item.innerText = 0;
      const timer = setInterval(() => {
        if (n <= total) {
          item.innerText = n += incremento;
        }
        else {
          clearInterval(timer);
          item.innerText = total;
        }

      }, 50 * Math.random())
    })
  }

  function mutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumero();
    }

  }
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(mutation);
  observer.observe(observerTarget, { attributes: true });
}


