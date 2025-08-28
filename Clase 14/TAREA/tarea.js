// Ejercicios de JS y Condiciones:

// 1.Sumar dos números:
//  Pide al usuario dos números, y luego muestra la suma usando un alert.

//  2.Juego de adivinanza:
//  Crear una variable interna llamada, numeroSecreto.
//  Pide al usuario que adivine un número del 1 al 10. Si adivina correctamente, muestra un mensaje de éxito por alerta, sino, veremos si el número seleccionado es mayor o menor, si es mayor diremos: "Te pasaste", si es menor diremos: "Un poquito más".

//  3.Verificar edad:
//  Pide al usuario su edad, si tiene 18 años o más, le dice que es mayor de edad, si no, le dice que es menor de edad.


// 1)Sumar dos números:

/* let num1 = prompt("Ingrese el primer número:")
while(isNaN(num1) || !num1){
    num1 = prompt("Ingrese un dato válido:")
}
let num2 = prompt("Ingrese el segundo número:")
while(isNaN(num2) || !num2){
    num2 = prompt("Ingrese un dato válido:")
}

num1 = Number(num1)
num2 = Number(num2)

let resultado = num1 + num2

alert("La suma es " + resultado)
 */
// 2)Juego de adivinanza

/* let numeroSecreto = prompt("Ingrese un número del 1 al 10:")
while(!numeroSecreto || isNaN(numeroSecreto)){
    numeroSecreto = prompt("Ingrese un dato válido")
}
numeroSecreto = Number(numeroSecreto)
    while(numeroSecreto < 1 || numeroSecreto > 10){
        numeroSecreto = prompt("Ingrese un número del 1 al 10.")
    }
    if(numeroSecreto < 7){
        alert("Un poquito más...")
    }
    else if(numeroSecreto > 7){
        alert("Te pasaste...")
    }
    else{
        alert("Felicidades!🧐🥵👌")
    }
 */

    // 3)Verificar edad:

    let edad = prompt("Ingrese su edad:")
    while(!edad || isNaN(edad)){
        edad = prompt("Ingrese una dato válido:")
    }
    edad = Number(edad)
    while(edad < 1 || edad > 120){
        edad = prompt("Ingrese una edad válida:")
    }

    if(edad >= 18){
        alert("Eres mayor de edad😎🧐💪")
    }
    else(
        alert("Eres menor de edad🤣🤏👦🏿")
    )