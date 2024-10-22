// Ejercicios de JS y Condiciones:

// 1.Sumar dos números:
//  Pide al usuario dos números, y luego muestra la suma usando un alert.

//  2.Juego de adivinanza:
//  Crear una variable interna llamada, numeroSecreto.
//  Pide al usuario que adivine un número del 1 al 10. Si adivina correctamente, muestra un mensaje de éxito por alerta, sino, veremos si el número seleccionado es mayor o menor, si es mayor diremos: "Te pasaste", si es menor diremos: "Un poquito más".

//  3.Verificar edad:
//  Pide al usuario su edad, si tiene 18 años o más, le dice que es mayor de edad, si no, le dice que es menor de edad.


// 1-CORREGIDO.
// let num1 = (prompt("Ingrese el primer número: "))
// while(!num1 || isNaN(num1)){
//     num1 = prompt("Ingrese un dato válido")}

// let num2 = (prompt("Ingrese el segundo número: "))
// while(!num2 || isNaN(num2)){
//     num2 = prompt("Ingrese un dato válido")}

// num1 = Number(num1)
// num2 = Number(num2)

// let resultado = num1 + num2
// alert(`El resultado de la suma de ${num1} y ${num2} es ${resultado}.`)



// 2.COORREGIDO
// let numeroSecreto = Number(prompt("Adivine un numero del 1 al 10: "))
// if(isNaN(numeroSecreto) || numeroSecreto > 10 || numeroSecreto < 1){
//     numeroSecreto = alert("Ingrese un dato valido")
// }
// else if(numeroSecreto === 5){
//     alert("Felicidades adivinaste el numero!");
// }
// else if(numeroSecreto > 5){
//     alert("Te pasaste!")
// }
// else{
//     alert("Un poquito mas!")
// }


//  3.Verificar edad:
//  Pide al usuario su edad, si tiene 18 años o más, le dice que es mayor de edad, si no, le dice que es menor de edad.

// 3.CORREGIDO
// let edad = Number(prompt("Ingrese su edad: "))
// if(isNaN(edad) || edad > 120 || edad < 1){
//     alert("Ingrese un dato real.");
// }
// else if(edad >= 18){
//     alert("Eres mayor de edad.");
// }
// else{
//     alert("Eres menor de edad.");
// }