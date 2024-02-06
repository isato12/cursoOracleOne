// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Hora del desafío";


// function botonConsole(){
//     console.log("El botón fue clicado");
// }

// function botonPrompt(){
//     let ciudadBrasil = prompt("Indica la ciudad de Brasil que visitaste?");
//     alert(`Estuve en la ciudad de ${ciudadBrasil}`)
// }

// function botonAlert(){
//     alert("Yo amo JS")
// }

// function suma(){
//     let numeroUno = parseInt(prompt("Indica el primer numero por favor"));
//     let numerDos = parseInt(prompt("Indica el segundo numero por favor"));
//     let resultado = numeroUno + numerDos;
//     let resultadoMensaje = alert(`El resultado de la suma es: ${resultado}`);
// }

//ejercicios
saludar()
function saludar() {
    console.log("Hola mundo");
    
}
saludoUsuario("Isai")
function saludoUsuario(nombre) {
    console.log(`Hola ${nombre}`)
}

function numeroDoble(numero){
    
    return console.log(numero * 2)
}
numeroDoble(10);

function promedio(numeroUno, numeroDos, numeroTres){
    return console.log((numeroUno + numeroDos + numeroTres)/3); //
}
promedio(8,7,6);

function numeroMayor(numeroUno, numeroDos){
    return console.log(numeroUno > numeroDos ? `el número ${ numeroUno } es mayor` : `el numero ${ numeroDos } es mayor`)
}
numeroMayor(50,100)
numeroMayor(25,10)

function numeroCuadrado(numero){
    return console.log(numero * numero)
}

numeroCuadrado(10)