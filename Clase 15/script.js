// let sumatoria = 0
// for(let iterador = 1;
//     iterador <= 3;
//     iterador = iterador + 1)
//     {
//     let numero = prompt("ingrese un numero")
//     while(!numero || isNaN(numero)){
//         numero = prompt("Error, ingrese un numero")
//     }
//     numero = Number(numero)
//     sumatoria = sumatoria + numero
// }
// alert(sumatoria)

// 1)Imprime los números del 1 al 10
// 2)Imprime los números pares del 2 al 20
// 3)Imprime los números impares del 1 al 19
// 4)Imprime los números del 10 al 1 en orden inverso
// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 BREAK
// 6)Imprime los números del 1 al 10, pero salta el 5 CONTINUE


// 1)Imprime los números del 1 al 10

// for(let iterador = 1;
//     iterador <= 10;
//     iterador = iterador + 1)
//     {
//     console.log(iterador)
// }

// 2)Imprime los números pares del 2 al 20

// for(let iterador = 2;
//     iterador <= 20;
//     iterador = iterador + 2
// ){
// console.log(iterador)}

// 3)Imprime los números impares del 1 al 19

// for(let iterador = 1;
//     iterador <= 19;
//     iterador = iterador + 2
// ){
//     console.log(iterador)
// }

// 4)Imprime los números del 10 al 1 en orden inverso

// for(let iterador = 10;
//     iterador >= 1;
//     iterador = iterador - 1
// ){
//     console.log(iterador)
// }

// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 BREAK

// for(let iterador = 1;
//     iterador >= 1;
//     iterador = iterador + 1
// ){  
//     if(iterador == 5){
//         break
//     }
//     console.log(iterador)
// }

// 6)Imprime los números del 1 al 10, pero salta el 5 CONTINUE

// for(let iterador = 1;
// iterador <= 10;
// iterador = iterador + 1){
//     if(iterador == 5){
//         continue
//     }
//     console.log(iterador)
// }

//FUNCIONES
/* alert() */
//Declaramos la funcion saludar
// function saludar () {
//     alert('Este es el mejor saludo del mundo😎🤑!')
// }
//Invocamos a la funcion saludar
// saludar()
//Crear la funcion preguntarNombre que solicitara el nombre al usuario y dira por alerta, 'tu nombre es {nombre_ingresado}

// function preguntarNombre(){
//    let nombre_ingresado = prompt("Ingresa tu nombre de usuario:")
//     alert(`Tu nombre es: ${nombre_ingresado}🤑`)
// }
// preguntarNombre()

// function saludar (nombre) {
//         alert(`Hola! ${nombre}😊🧉`)
//     }
// saludar("Carlos")


// Funcion reutilizable:
// function suma (a, b){
//     return Number(a) + Number(b)
// }

// let resultado = suma(70,30)

// alert(resultado)
// console.log(resultado)
// document.write(resultado)