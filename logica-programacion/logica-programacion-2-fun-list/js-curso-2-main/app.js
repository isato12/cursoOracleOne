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
// saludar()
// function saludar() {
//     console.log("Hola mundo");
    
// }
// saludoUsuario("Isai")
// function saludoUsuario(nombre) {
//     console.log(`Hola ${nombre}`)
// }

// function numeroDoble(numero){
    
//     return console.log(numero * 2)
// }
// numeroDoble(10);

// function promedio(numeroUno, numeroDos, numeroTres){
//     return console.log((numeroUno + numeroDos + numeroTres)/3); //
// }
// promedio(8,7,6);

// function numeroMayor(numeroUno, numeroDos){
//     return console.log(numeroUno > numeroDos ? `el número ${ numeroUno } es mayor` : `el numero ${ numeroDos } es mayor`)
// }
// numeroMayor(50,100)
// numeroMayor(25,10)

// function numeroCuadrado(numero){
//     return console.log(numero * numero)
// }

// numeroCuadrado(10)

//mas ejercicios
//1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

// function calcularImc(peso, altura){
     
//     let resultado = (peso / Math.pow(altura, 2))
//     let imcRedondeado = Math.round(resultado * 10) / 10;
//     if (imcRedondeado <= 18.4){
//         console.log(`El IMC es ${imcRedondeado} tu peso es bajo` )
//     } else if (imcRedondeado>=18.5 && imcRedondeado <= 24.9){
//         console.log(`El IMC es ${imcRedondeado} tu peso es normal` )
//     } else if (imcRedondeado >= 25 && imcRedondeado <= 29.9){
//         console.log(`El IMC es ${imcRedondeado} tienes sobrepeso` )
//     }else if (imcRedondeado >= 30 && imcRedondeado <= 34.9) {
//         console.log(`El IMC es ${imcRedondeado} tienes Obesidad Grado I` )
//     }else if (imcRedondeado >= 35 && imcRedondeado <= 39.9) {
//         console.log(`El IMC es ${imcRedondeado} tienes Obesidad Grado II` )
//     } else {
//         console.log(`El IMC es ${imcRedondeado} tienes Obesidad Grado III` )
//     }

// }
// calcularImc(95, 1.78)


// //2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function factorial(numero){
//     let numMin = 1;
//     while (numero >= 1) {
//         numMin *= numero 
//         numero--
        
//         console.log(`El factorial de 5 es ${numMin}`)
//     }
// }

// factorial(5);

// //3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// function conversorMoneda(cantidad){
//     let costo = 17.04;

//     return console.log(cantidad > 1 ? ` ${cantidad} dolares son: ${Math.round(cantidad * costo * 10) / 10} pesos mexicanos`: `${cantidad} dolar son: ${Math.round(cantidad * costo * 10) / 10} pesos mexicanos`)
// }
// conversorMoneda(10)

// function areaRecamaras(alto, ancho) {
//     let perimetro = (alto*2)+(ancho*2)
//     let area = alto * ancho

//     return console.log(`El perimetro del rectangulo es ${perimetro}.\nEl area del rectangulo es ${area}`)
// }

// areaRecamaras(20,12)

// function  areaYPerimetroCirculo(radio){
//     let perimetro = 2 * Math.PI * radio;
//     let area = Math.PI * Math.pow(radio, 2);

//     return console.log(`El perimetro del circulo es ${perimetro}.\nEl area del circulo es ${area}`)
// }

// areaYPerimetroCirculo(20)

// function tablaMultiplicar(numero) {
//     let multiplo = 1;
//     while (multiplo <= 10 ) {
//         let resultado = numero * (multiplo)
//         console.log(`${numero} x ${multiplo} = ${resultado}`)
//         multiplo++
//     }
// }

// tablaMultiplicar(9)


// Ejercicios
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kptlin', 'Pyithon']
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesProgramacion.push('Java', 'Ruby', 'Golang');
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function muestraLista (lista){
    console.log(lista)
}
muestraLista(lenguajesProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function muestraListaInvertida(lista){
    console.log(lista.reverse())
}
muestraListaInvertida(lenguajesProgramacion)
// Crea una función que calcule el promedio de los elementos en0 una lista de números.

function calcularPromedio(lista){
    let promedio = lista.reduce((acc, item) => acc + item / lista.length,0)
    console.log(promedio)
}

calcularPromedio([9,10,10,10,10]);
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function maxYMin(lista){

let i = 0;
let max = 0;
let min = lista[0]; // Inicializamos el mínimo con el primer valor del arreglo

while (i < lista.length) {
    const numero = lista[i];
    if (numero > max) {
        max = numero; // Actualizamos el máximo si encontramos un valor mayor
    }
    if (numero < min) {
        min = numero; // Actualizamos el mínimo si encontramos un valor menor
    }
    i++; // Incrementamos el índice para avanzar al siguiente elemento
}
console.log(`El valor máximo de la ${lista} es: ${max}`);
console.log(`El valor mínimo de la ${lista} es: ${min}`);
}
maxYMin([5,8,9,10,3,50,1])
// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementosLista(lista){
    let suma = lista.reduce((acc, item) => acc + item ,0)
    console.log(suma)
}
sumarElementosLista([5,5,5,5,5])
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarEnArreglo(buscado){
    let biblioteca = ["ingles", "cargos", "derecho","mascota","español"]
    let buscando = (elemento) => elemento === buscado
    console.log(`El elemento buscado esta en la posición: ${biblioteca.findIndex(buscando)}`)
}
buscarEnArreglo("cargos")
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumandoDosListas(listaNumerosUno, listaNumerosDos){
    const sumaTotal = (listaNumerosUno.concat(listaNumerosDos)).reduce((acumulador, elemento) => acumulador + elemento);

console.log(`La suma total de los elementos es: ${sumaTotal}`);
}
sumandoDosListas([10,10,10,10,10],[10,10,10,10,10])
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaAlCuadrado(listaNumeros){
    let listaCuadrado = []
    let i = 0;
    while (i < listaNumeros.length) {
        const numero = listaNumeros[i];
        listaCuadrado.push(numero * numero)
        i++
    }
    console.log(`El cuadrado de los numeros de la lista ${listaNumeros} es: ${ listaCuadrado}`)
}
listaAlCuadrado([5,6,7,8,9,10])