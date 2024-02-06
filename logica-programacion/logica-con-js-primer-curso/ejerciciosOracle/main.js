//desafio 1
// // alert("¡Bienvenida y bievenido a nuestro sitio web!");
// // let name = "Luna";
// // let age = 25;
// let salesNumber = 50;
// let availableBalance = 1000;
// // alert("¡Error! Completa todos los campos");
// let errorMessage = "¡Error! Completa todos los campos";
// let name = prompt("nombre de usuario");
// let age = prompt("edad");
// if (age >= 18 ) {
//     alert(`El usuario ${name} es mayor de edad, porque tiene ${age}`)
// }else{
//     alert(`El usuario ${name} no es mayor de edad, porque tiene ${age}`)
// }

//desafio 2
// let weekDay = prompt("Indica el día de la semana");
// if (weekDay == "saturday" || weekDay == "sunday") {
//     alert(`¡Buen fin de semana!`);
// } else {
//     alert(`¡Buena semana!`)
// }

// let userNumber = prompt("Introduce un numero");
// if (userNumber>0) {
//     alert("el numero es positivo");
// } else {
//     alert("El numero es negativo");
// }

// let puntaje = prompt("Introduce tu puntaje");
// if (puntaje>= 100){
//     alert("¡Felicidades, has ganado!")
// }else{
//     alert("Intenta nuevamente para ganar.")
// }

// let saldo = 5000;
// alert(`El saldo de su cuenta es de ${saldo}`);

// let userName = prompt("Introduce tu nombre");
// alert(`bienbenido: ${userName}`);

//desafio 3

// let contador = 1;
// while (contador<=10) {
//     console.log(`El contador va en ${contador}`);
//     contador++
// }

// let contadorRetroceso = 10;
// while (contadorRetroceso>=1) {
//     console.log(`El contador va en ${contadorRetroceso}`);
//     contadorRetroceso--
// }

// let numeroFinal = prompt("Hasta que numero quieres la cuenta regresiva");
// let contador = 0;
// while (contador<=numeroFinal) {
//     console.log(`cuenta en ${contador}`);
//     contador++

// }

//desafio 4
// console.log("Bienvenido al juego");
// let name = "Isai Torres SAucedo";
// console.log(`Hola ${name} ¡Bienvenido!`);
// alert(`Hola ${name} ¡Bienvenido!`)
// let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?.")
// console.log(pregunta)
// let valor1 = 27;
// let valor2 = 20;
// let resultado = valor1 + valor2;
// console.log(`La suma de ${valor1} + ${valor2} = a ${resultado}`)

// let valor1 = 27;
// let valor2 = 20;
// let resultado = valor1 - valor2;
// console.log(`La resta de ${valor1} - ${valor2} = a ${resultado}`)

// let edad = parseInt(prompt("Ingresa tu edad"));
// if(edad >= 18){
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Aun no eres mayor de edad");
// }

// let numero = parseInt(prompt("Ingresa un numero"));
// if (numero > 0) {
//   alert("El numero ingresado es positivo");
// } else if (numero == 0) {
//   alert("El numero es cero");
// } else {
//   alert("El numero ingresado es negativo");
// }

let contador = 1;
while (contador <= 10) {
    console.log(`contando ${contador}`)
    contador++
}

let nota = 10;
if (nota >= 6) {
    console.log(`aprobado`)
} else {
    console.log(`reprobado`)
}

let numeroAleatorio = Math.floor(Math.random() * 100 + 1);
console.log(numeroAleatorio)

let numeroPequeñoAleatorio = Math.floor(Math.random() * 10 + 1);
console.log(`Mostrando numero del 1 al 10 (${numeroPequeñoAleatorio})`)

let numeroGiganteAleatorio = Math.floor(Math.random() * 1000 + 1 );
console.log(`Mostrando numero del 1 al 1000 (${numeroGiganteAleatorio})`)