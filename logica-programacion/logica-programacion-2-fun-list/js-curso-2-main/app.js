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

function calcularImc(peso, altura){
     
    let resultado = (peso / Math.pow(altura, 2))
    let imcRedondeado = Math.round(resultado * 10) / 10;
    if (imcRedondeado <= 18.4){
        console.log(`El IMC es ${imcRedondeado} tu peso es bajo` )
    } else if (imcRedondeado>=18.5 && imcRedondeado <= 24.9){
        console.log(`El IMC es ${imcRedondeado} tu peso es normal` )
    } else if (imcRedondeado >= 25 && imcRedondeado <= 29.9){
        console.log(`El IMC es ${imcRedondeado} tienes sobrepeso` )
    }else if (imcRedondeado >= 30 && imcRedondeado <= 34.9) {
        console.log(`El IMC es ${imcRedondeado} tienes Obesidad Grado I` )
    }else if (imcRedondeado >= 35 && imcRedondeado <= 39.9) {
        console.log(`El IMC es ${imcRedondeado} tienes Obesidad Grado II` )
    } else {
        console.log(`El IMC es ${imcRedondeado} tienes Obesidad Grado III` )
    }

}
calcularImc(95, 1.78)


//2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    let numMin = 1;
    while (numero >= 1) {
        numMin *= numero 
        numero--
        
        console.log(`El factorial de 5 es ${numMin}`)
    }
}

factorial(5);

//3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversorMoneda(cantidad){
    let costo = 17.04;

    return console.log(cantidad > 1 ? ` ${cantidad} dolares son: ${Math.round(cantidad * costo * 10) / 10} pesos mexicanos`: `${cantidad} dolar son: ${Math.round(cantidad * costo * 10) / 10} pesos mexicanos`)
}
conversorMoneda(10)

function areaRecamaras(alto, ancho) {
    let perimetro = (alto*2)+(ancho*2)
    let area = alto * ancho

    return console.log(`El perimetro del rectangulo es ${perimetro}.\nEl area del rectangulo es ${area}`)
}

areaRecamaras(20,12)

function  areaYPerimetroCirculo(radio){
    let perimetro = 2 * Math.PI * radio;
    let area = Math.PI * Math.pow(radio, 2);

    return console.log(`El perimetro del circulo es ${perimetro}.\nEl area del circulo es ${area}`)
}

areaYPerimetroCirculo(20)

function tablaMultiplicar(numero) {
    let multiplo = 1;
    while (multiplo <= 10 ) {
        let resultado = numero * (multiplo)
        console.log(`${numero} x ${multiplo} = ${resultado}`)
        multiplo++
    }
}

tablaMultiplicar(9)
