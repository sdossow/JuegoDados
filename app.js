//variables globales
let listaDadoUno = [];
let listaDadoDos = [];
let intento = 1;
let numeroSecreto

//funciones
function dado(numeroDeCaras) {
  if (numeroDeCaras < 1) {
    throw new Error("el dado debe tener al menos 1 cara");
  }
  return Math.floor(Math.random() * numeroDeCaras) + 1;
}
function tiraDados() {
  let dadoUno = dado(6);
  let dadoDos = dado(6);
  listaDadoUno.push(dadoUno);
  listaDadoDos.push(dadoDos);
  return dadoUno + dadoDos;
}
function nuevoJuego() {
  numeroSecreto=tiraDados();
  intento = 1;
  asignarTextoElemento("p", "Cuanto suman ambos dados?");
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  document.getElementById("intentar").removeAttribute("disabled");

}
function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}
function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}
function cajaVacia(numeroIngresado) {
  if (numeroIngresado.trim() === "") {
    asignarTextoElemento(
      "p",
      "Ingresa un número. ¿Cuanto suman los dos dados?"
    );
    return false;
  }
  return true;
}
function validarNumero(numeroIngresado) {
  if (numeroIngresado < 2 || numeroIngresado > 12) {
    asignarTextoElemento("p", "Error. selecciona un número entre 2 y 12");
    intento = 1;
    return false;
  } else return true;
}
function verificarIntento() {
  let numeroString = document.getElementById("valorUsuario").value;
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (!cajaVacia(numeroString)) {
    limpiarCaja();
    return;
  } else if (validarNumero(numeroDeUsuario)) {
    if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento(
        "p",
        `¡Felicidades! Has acertado en el intento ${intento}`
      );
      document.getElementById("reiniciar").removeAttribute("disabled");
      document.getElementById("intentar").setAttribute("disabled", "true");
    } else {
      if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento("p",`El numero es mayor, es tu   intento ${intento}`);
      } else {
        asignarTextoElemento("p",`El numero es menor :c es tu intento ${intento}`);
      }
    }
    intento++;
    limpiarCaja();
  }
}

//llamadas a las funciones
//document.getElementById("intentar").removeAttribute("disabled");
asignarTextoElemento("h1", "juego de dados");
nuevoJuego()
