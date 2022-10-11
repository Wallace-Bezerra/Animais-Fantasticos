export default function datas() {

}

const funcionamento = document.querySelector("[data-semana]");
const diaSemana = funcionamento.dataset.semana.split(",").map((n) => parseInt(n));
const hora = funcionamento.dataset.hora.split(",").map(Number);
console.log(hora);


const date = new Date();
const horaAgora = date.getHours();
const status = document.querySelector(".status");

const dias = diaSemana.find((item) => {
  return item == date.getDay();
});

if ((dias) && (horaAgora >= hora[0] && horaAgora < hora[1])) {
  console.log('aberto');
  status.style.background = "green";
}
else {
  console.log("fechado")
  status.style.background = "red";
}



