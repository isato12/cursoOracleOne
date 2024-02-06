// let titulo = document.querySelector('h1')
// titulo.innerHTML = "Adivina el número secreto";

// let instrucciones = document.querySelector('h2');
// instrucciones.innerHTML = "Instrucciones:"

// let pInstrucciones = document.querySelector('.texto__parrafo')
// pInstrucciones.innerHTML = "Introduce el numero máximo con el que quieras jugar (entre 10 y 500), tendras hasta 10 intentos para adivinar el número aleatorio que sera desde 1 y hasta el número indicado."

//variables
let numeroAleatorio;
let intentos = 1;

//se crea funcion para agregar etiquetas html desde js
function crearEtiquetas(etiquetaHtml,  contenidoEtiqueta){
    etiquetaHtml = document.querySelector(etiquetaHtml)
    etiquetaHtml.innerHTML = contenidoEtiqueta;
}
crearEtiquetas("h1","Adivina el número secreto");
crearEtiquetas("h2","Instrucciones");
crearEtiquetas('.texto__parrafo',"Introduce el numero máximo con el que quieras jugar (entre 50 y 100), tendras hasta 10 intentos para adivinar el número aleatorio que sera desde 10 y hasta el número indicado.")




//Se crea un numero aleatorio utilizanodo el numero maximo indicado por el usuario 


const btn = document.getElementById("btn__iniciar");
btn.addEventListener("click", () =>{
    let numeroMaximoUsuario = parseInt(document.getElementById("numeroMaximoJuego").value);
    numeroAleatorio = Math.floor(Math.random()* (numeroMaximoUsuario + 1))
    crearEtiquetas("p", `¡introduce un número entre 1 y ${numeroMaximoUsuario}, tendras ${numeroMaximoUsuario === 50 ? " 5 oportunidades " : " 10 oportunidades"}!`)
    
    console.log(`El numero aleatorio es ${numeroAleatorio}`)
    return numeroAleatorio;
})

//creando funcion del boton iniciar
function verificarIntento(){
    const numeroIntento = parseInt(document.getElementById("numeroUsuario").value);
    // console.log("funcion del boton intentar")
    // console.log(`${numeroIntento}`)
    // console.log(numeroAleatorio)
    // console.log(numeroIntento == numeroAleatorio)

    if (numeroIntento === numeroAleatorio) {
        crearEtiquetas("p", `¡Correcto acertaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}!`)
        crearEtiquetas("h2","");
    } else {
        if (numeroIntento > numeroAleatorio) {
            crearEtiquetas("p", "El número secreto es menor")
            crearEtiquetas("h2","");
            
        }else{
            crearEtiquetas("p", "El número secreto es mayor")
            crearEtiquetas("h2","");
        }
        intentos++;
    }
}
//asignando funcion al boton iniciar
const btnIntentar = document.getElementById("btnIntentar").addEventListener("click",verificarIntento);
