//forma de colocar texto a etiquetas html
// let titulo = document.querySelector('h1')
// titulo.innerHTML = "Adivina el número secreto";

// let instrucciones = document.querySelector('h2');
// instrucciones.innerHTML = "Instrucciones:"

// let pInstrucciones = document.querySelector('.texto__parrafo')
// pInstrucciones.innerHTML = "Introduce el numero máximo con el que quieras jugar (entre 10 y 500), tendras hasta 10 intentos para adivinar el número aleatorio que sera desde 1 y hasta el número indicado."

//variables
let numeroAleatorio;
let intentos = 1;
const btnIntentar = document.getElementById("btnIntentar");
const btnIniciar = document.getElementById("btn__iniciar");
const btnReiniciar = document.getElementById("reiniciar");
let inputInicial = document.getElementById("numeroMaximoJuego");
let numeroMaximoUsuario = parseInt(inputInicial.value);
let numeroIntento;
let oportunidades;
let listaNumerosSorteados = []; //

//se crea funcion para agregar etiquetas html desde js
function crearEtiquetas(etiquetaHtml, contenidoEtiqueta) {
  etiquetaHtml = document.querySelector(etiquetaHtml);
  etiquetaHtml.innerHTML = contenidoEtiqueta;
}
//creando etiquetas html
crearEtiquetas("h1", "Adivina el número secreto");
crearEtiquetas("h2", "Instrucciones");
crearEtiquetas(
  ".texto__parrafo",
  "Introduce el numero máximo con el que quieras jugar (entre 50 y 100), tendras hasta 10 intentos para adivinar el número aleatorio que sera desde 1 y hasta el número indicado."
);

// agregando evento click a boton iniciar 
btnIniciar.addEventListener("click",  function() {
  generaNumeroAleatorio();
  condicionesIniciales()
});

//Se crea un numero aleatorio utilizanodo el numero maximo indicado por el usuario
function generaNumeroAleatorio() {
  numeroMaximoUsuario = parseInt(document.getElementById("numeroMaximoJuego").value);
  if (listaNumerosSorteados.length >= numeroMaximoUsuario + 1) {
    crearEtiquetas("p","Todos los números ya han sido generados");
    return;
  }
  numeroAleatorio = Math.floor(Math.random() * (numeroMaximoUsuario + 1));
  console.log(numeroAleatorio);
  console.log(listaNumerosSorteados);
  //se guarda en la lista numero generado y si no esta me lo devuelve, si no lo guarda y nos da otro
  if (listaNumerosSorteados.includes(numeroAleatorio)) {
    return generaNumeroAleatorio();//recursividad
  } else {
    listaNumerosSorteados.push(numeroAleatorio);
    return numeroAleatorio;
  }

  
}

function condicionesIniciales(){
  
  crearEtiquetas(
    "p",
    `¡introduce un número entre 1 y ${numeroMaximoUsuario}, tendras ${
      numeroMaximoUsuario === 50 ? " 5 oportunidades " : " 10 oportunidades"
    }!`
  );
  borrarInput();
  console.log(`El numero aleatorio es ${numeroAleatorio}`);

  // Deshabilitar el botón
  btnIniciar.disabled = true;
  btnIniciar.style.backgroundColor = "gray";

  // Deshabilitar el campo de entrada

  inputInicial.disabled = true;
  inputInicial.style.backgroundColor = "gray";
  
  //Habilitar botones i campo input de juego

  btnIntentar.disabled = false;
  numeroIntento = document.querySelector("#numeroUsuario").removeAttribute("disabled");
}


//creando funcion del boton iniciar
function verificarIntento() {
  numeroIntento = parseInt(document.getElementById("numeroUsuario").value);

  if (numeroIntento === numeroAleatorio) {
    crearEtiquetas(
      "p",
      `¡Correcto acertaste en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }!`
    );
    crearEtiquetas("h2", "");
    numeroIntento.disabled = true;
    btnNuevoJuego();
  } else {
    if (numeroIntento > numeroAleatorio) {
      crearEtiquetas("p", "El número secreto es menor");
      crearEtiquetas("h2", "");
    } else {
      crearEtiquetas("p", "El número secreto es mayor");
      crearEtiquetas("h2", "");
    }
    intentos++;
    borrarInput();
  }
}

function borrarInput() {
  document.getElementById("numeroMaximoJuego").value = "";
  document.getElementById("numeroUsuario").value = "";
}

function btnNuevoJuego() {
  btnIntentar.disabled = true;
  btnReiniciar.disabled = false;
  numeroIntento = document.getElementById("numeroUsuario").disabled = true;
  btnIntentar.disabled = true;
}

btnReiniciar.addEventListener("click", () => {
  btnIniciar.disabled = false;
  btnIniciar.style.backgroundColor = "#1875e8";
  inputInicial.disabled = false;
  inputInicial.style.backgroundColor = "white";
  inputInicial.focus();
  crearEtiquetas("h2", "Instrucciones");
  crearEtiquetas(
    ".texto__parrafo",
    "Introduce el numero máximo con el que quieras jugar (entre 50 y 100), tendras hasta 10 intentos para adivinar el número aleatorio que sera desde 1 y hasta el número indicado."
  );
  borrarInput();
  btnIntentar.disabled = true;
  btnReiniciar.disabled = true;
  intentos = 1;
});

inputInicial.addEventListener("keydown", (e) => {
  // Número 13 es el código de la tecla "Enter"
  console.log(e.keyCode)
  if (e.keyCode === 13) {
    let valor = inputInicial.value.trim();
    if (valor !== "" && !isNaN(valor) && valor != 0) {
  //   e.preventDefault(); // Previene la acción por defecto (si existe)
    generaNumeroAleatorio();
    condicionesIniciales(); // Llama a tu función
  } else{
    crearEtiquetas("p", "Debes ingresar un numero")
  }
  }
});

numeroIntento = document.getElementById("numeroUsuario").addEventListener("keydown", (e) => {
  console.log(e.keyCode)
  if (e.keyCode === 13) {
     {
  //   e.preventDefault(); // Previene la acción por defecto (si existe)
    verificarIntento() // Llama a tu función
  } 
  }

}) 

//asignando funcion al boton iniciar
btnIntentar.addEventListener("click", verificarIntento);
