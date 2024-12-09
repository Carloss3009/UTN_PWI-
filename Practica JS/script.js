// EJERCICIOS JS VARIOS: https://docs.google.com/document/d/1wPi6o8t8cGyhAoGfW9RHIGNQrefuia__g2f9CH4QY5Q/edit?usp=sharing



// 1)Imprime los números del 1 al 10:

// for(let iterador = 1; iterador <= 10; iterador = iterador + 1){
//     console.log(iterador)
//     }



// 2)Imprime los números pares del 2 al 20:

// for(let iterador = 2; iterador <= 20; iterador = iterador + 2){
//     console.log(iterador)
//     }



// 3)Imprime los números impares del 1 al 19:

// for(let iterador = 1; iterador <= 19; iterador = iterador + 2){
//     console.log(iterador)
//     }



// 4)Imprime los números del 10 al 1 en orden inverso:

// for(let iterador = 10; iterador >= 1; iterador = iterador - 1){
//     console.log(iterador)
//     }



// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5:

// for(let iterador = 1; iterador <= 10; iterador = iterador + 1){
//     if(iterador == 5){
//         break
//     }
//     console.log(iterador)
//     }



// 6)Imprime los números del 1 al 10, pero salta el 5:

// for(let iterador = 1; iterador <= 10; iterador = iterador + 1){
//     if(iterador == 5){
//         continue
//     }
//     console.log(iterador)
//     }



// 7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre:

// function decirNombre(nombre){
//     alert(`Hola ${nombre}`)
// }

// decirNombre("Carlos")



// 8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta:

// function saludar(nombre){
//     return String(`Hola ${nombre}`)
// }

// alert(saludar("Sebastian"))



// 9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b:

// function sumar(a,b){
//     return Number(a) + Number(b)
// }



// 10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b:

// function restar(a,b){
//     return Number(a) - Number(b)
// }



// 11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null:


// function calcular(a,b, operacion){
//     if(operacion == "+"){
//         return sumar(a,b)
//     }
//     else if(operacion == "-"){
//         return restar(a,b)
//     }
//     else{
//         return null
//     }
// }

// alert(calcular("-",20,30))



// 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola:

//  function contarHasta(numero){
//     for(let iterador = 1; iterador <= numero; iterador = iterador + 1){
//         console.log(iterador)}
//     }

// contarHasta(1000)



// 13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

// while(prompt("¿Desea usar la calculadora?") == "SI"){
//     let num1 = Number(prompt("Ingrese el primer numero: "))
//     let num2 = Number(prompt("Ingrese el segundo numero: "))
//     let operacion = String(prompt("Ingrese la operacion: "))
//     alert(calcular(num1,num2,operacion))
//     if(String(prompt("Quieres volver a usar la calculadora? SI - NO")) == "SI"){
//         alert("OK")
//     }
//     else{
//         alert("El programa ha finalizado.")
//     }
// }



// 14) Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…

// for(let iterador = 11; iterador <= 277; iterador = iterador + 11){
//     console.log(iterador)
// }



// 15) hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares. Se ingresan valores por teclado.

// let par = 0;
// let impar = 0;

// for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
//     let numero = Number.isInteger(prompt("Ingrese un numero:"))
//     if(numero % 2 == 0){
//        par = par + 1;
//     }
//     else{
//         impar = impar + 1;
//     }
// }
//     alert(`Hay ${par} pares.`)
//     alert(`Hay ${impar} impares.`)



// 16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

// let promedio = 0;

// for(let i = 1; i <= 5; i = i + 1){
//     let altura = Number(prompt("Ingrese una altura para calcular el promedio: "))
//     promedio = promedio + altura;
// }
//     promedio = promedio / 5;
//     alert(promedio);



// 17)Se cuenta con la siguiente información:
// 	Las edades de 5 estudiantes del turno mañana.
// 	Las edades de 6 estudiantes del turno tarde.
// 	Las edades de 11 estudiantes del turno noche.
// Las edades de cada estudiante deben ingresarse por teclado.
// a)Obtener el promedio de las edades de cada turno (tres promedios).
// b)Imprimir dichos promedios (promedio de cada turno).
// c)Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

// let promedioMañana = 0;
// let promedioTarde = 0;
// let promedioNoche = 0;

// for(let i = 1; i <= 5; i = i + 1){
//     let turnoMañana = Number(prompt("Ingrese las edades de 5 estudiantes del turno mañana: "))
//     promedioMañana = promedioMañana + turnoMañana;
// }
// promedioMañana = promedioMañana / 5;
// for(let i = 1; i <= 6; i = i + 1){
//     let turnoTarde = Number(prompt("Ingrese las edades de 6 estudiantes del turno tarde: "))
//     promedioTarde = promedioTarde + turnoTarde;
// }
// promedioTarde = promedioTarde / 6;
// for(let i = 1; i <= 11; i = i + 1){
//     let turnoNoche = Number(prompt("Ingrese las edades de 11 estudiantes del turno noche: "))
//     promedioNoche = promedioNoche + turnoNoche;
// }
// promedioNoche = promedioNoche / 11;

// console.log(promedioMañana)
// console.log(promedioTarde)
// console.log(promedioNoche)

// if(promedioMañana > promedioTarde && promedioMañana > promedioNoche){
//     alert("El turno mañana tiene el promedio de edad mas alto")
// }
// else if(promedioTarde > promedioMañana && promedioTarde > promedioNoche){
//     alert("El turno tarde tiene el promedio de edad mas alto")
// }
// else if(promedioNoche > promedioMañana && promedioNoche > promedioTarde){
//     alert("El turno noche tiene el promedio de edad mas alto")
// }
// else{
//     alert("Hay promedios iguales en distintos turnos")
// }



// 18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a)	La cantidad de valores negativos ingresados.
// b)	La cantidad de valores positivos ingresados.
// c)	La cantidad de múltiplos de 15.
// d)	El valor acumulado de los números ingresados que son pares.


// let acumuladorPares = 0;
// let contadorMultiplo = 0;
// let contadorNegativos = 0;
// let contadorPositivos = 0;

// for(let i = 1; i <= 10; i ++){
//     let numeros = Number(prompt("Ingresa 10 numeros enteros: "))
//     if(numeros > 0){
//         contadorPositivos = contadorPositivos + 1;
//     }
//     else if(numeros < 0){
//         contadorNegativos = contadorNegativos + 1;
//     }
//     if(numeros % 15 == 0){
//         contadorMultiplo = contadorMultiplo + 1;
//     }
//     if(numeros % 2 == 0){
//         acumuladorPares = acumuladorPares + numeros
//     }
// }

// alert(`La cantida de numeros positivos es: ${contadorPositivos}`)
// alert(`La cantidad de numeros negativos es: ${contadorNegativos}`)
// alert(`La cantidad de multiplos de 15 es: ${contadorMultiplo}`)
// alert(`El valor acumulado de los numeros pares es: ${acumuladorPares}`)



// 19)hacer un programa que lea los lados de 4 triángulos, e informar:
// a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
// b)	Cantidad de triángulos de cada tipo.
// c)	Tipo de triángulo del que hay menor cantidad.

// let trianguloEquilatero = 0;
// let trianguloIsosceles = 0;
// let trianguloEscaleno = 0;

// for(let i = 1; i <= 4; i ++){
//     let ladoA = prompt("Escribe las medidas de los lados de tu triangulo: ")
//     let ladoB = prompt("Escribe las medidas de los lados de tu triangulo: ")
//     let ladoC = prompt("Escribe las medidas de los lados de tu triangulo: ")
//     if(ladoA == ladoB && ladoA == ladoC){
//         alert("Es un triangulo Equilatero.")
//         trianguloEquilatero = trianguloEquilatero + 1;
//     }
//     else if(ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA || ladoC == ladoA && ladoC != ladoB){
//         alert("Es un triangulo Isosceles.")
//         trianguloIsosceles = trianguloIsosceles + 1;
//     }
//     else if((ladoA != ladoB && ladoA != ladoC || ladoB != ladoC && ladoB != ladoA || ladoC != ladoA && ladoC != ladoB)){
//         alert("Es un triangulo Escaleno.")
//         trianguloEscaleno = trianguloEscaleno + 1;
//     }
// }

// alert(`Hay ${trianguloEquilatero} triangulos Equilateros.`)
// alert(`Hay ${trianguloIsosceles} triangulos Isosceles.`)
// alert(`Hay ${trianguloEscaleno} triangulos Escalenos.`)

// if(trianguloEquilatero < trianguloIsosceles && trianguloEquilatero < trianguloEscaleno){
//     alert("Hay menos triangulos Equilateros.")
// }
// else if(trianguloIsosceles < trianguloEquilatero && trianguloIsosceles < trianguloEscaleno){
//     alert("Hay menos triangulos Isosceles.")
// }
// else if(trianguloEscaleno < trianguloEquilatero && trianguloEscaleno < trianguloIsosceles){
//     alert("Hay menos triangulos Escalenos.")
// }



// 20)hacer  una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
// Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
// 4 5 6 7 8 9 10

// let menor = Number(prompt("Ingrese un numero: "))
// let mayor = Number(prompt("Ingrese un numero mas grande: "))
// if(menor < mayor){
// function mostrarNumeros(mayor, menor){
//     for(let i = menor; i <= mayor; i ++){
//         console.log(i)
//     }
// }
// mostrarNumeros(mayor, menor)
// }

// else{
//     alert("Ingrese un numero mayor al primero")
// }



// 21)Hacer  una función que reciba tres enteros y retorne el promedio.

// let num1 = Number(prompt("Ingrese 3 numeros enteros: "))
// let num2 = Number(prompt("Ingrese 3 numeros enteros: "))
// let num3 = Number(prompt("Ingrese 3 numeros enteros: "))
// function tresEnteros(num1, num2, num3){
//     return (num1 + num2 + num3) / 3
// }

// alert(tresEnteros(num1, num2, num3))



// 22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

// let valor1 = Number(prompt("Ingrese 5 valores y le devuelvo su suma: "))
// let valor2 = Number(prompt("Ingrese 5 valores y le devuelvo su suma: "))
// let valor3 = Number(prompt("Ingrese 5 valores y le devuelvo su suma: "))
// let valor4 = Number(prompt("Ingrese 5 valores y le devuelvo su suma: "))
// let valor5 = Number(prompt("Ingrese 5 valores y le devuelvo su suma: "))

// function cincoValores(valor1, valor2, valor3, valor4, valor5){
//     return valor1 + valor2 + valor3 + valor4 + valor5;
// }

// alert(cincoValores(valor1, valor2, valor3, valor4, valor5))



// 23)hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡

// let palabra = prompt("Ingrese una palabra y le coloco signos de exclamacion: ")

// function agregarSigno(palabra){
//     return "¡" + palabra + "!";
// }

// alert(agregarSigno(palabra))



// 24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores.

// let nombre = String(prompt("Ingrese un nombre: "))
// let apellido = String(prompt("Ingrese un apellido: "))
// if(apellido == String && nombre == String){ 
// function obtenerNombreCompleto(nombre, apellido){
//     return nombre + " " + apellido;
// }
// }
// else{
//     alert("Ingrese un nombre y un apellido")}
// alert(obtenerNombreCompleto(nombre, apellido))



// 25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas.

// let horas = Number(prompt("Ingrese una cantidad de horas: "))

// function convertirHorasEnSegundos(horas){
//     return horas * 3600
// }
// alert(`La cantidad de segundos es: ${convertirHorasEnSegundos(horas)}`)



// 26)Definí una función generarEmail que reciba como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

// let usuario = String(prompt("Ingrese un Usuario: "))
// let dominio = String(prompt("Ingrese un Dominio: "))

// function generarEmail(usuario, dominio){
//     return usuario + "@" + dominio + ".com"
// }

// alert(`Su email es: ${generarEmail(usuario,dominio)}`)



// 27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
// Ingresá una cantidad de grados Celsius
// Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}


// let grados = Number(prompt("Ingresa una cantidad de grados Celsius:"))
//     let resultado = (grados * 9/5) +32
// alert(`La conversión de ${grados} grados Celsius a Fahrenheit es: ${resultado}`)



// 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
// Ingresá la distancia del recorrido
// Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
// Las velocidades de los medio de transporte son:
// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs


// let distancia = Number(prompt("Ingresá la distancia del recorrido: "))

// let resultadoEnBicicleta = distancia / 10
// let resultadoAPie = distancia / 5
// let resultadoEnAuto = distancia / 50

// alert(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`)



// 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// datos con los cuales deben ser enviados a la función:

// puedeVerPelicula(12, false)
// false
//  puedeVerPelicula(12, true)
// true
//  puedeVerPelicula(16, false)
// true
//  puedeVerPelicula(18, true)
// true



// let edad = Number(prompt("Ingrese su edad: "))
// let tieneAutorizacion = Boolean(prompt("¿Tiene autorización de sus padres?"))
// function puedeVerPelicula(edad, tieneAutorizacion){
//     if(edad >= 15 || tieneAutorizacion == true){
//         return true
//     }
//     else{
//         return false
//     }
// }
// alert(puedeVerPelicula(edad,tieneAutorizacion))


// Crear una funcion esPar que toma un numero como argumento, y devuelve TRUE si el numero es par, regresa FALSE si no lo es.
// escribe 2 versiones de esta funcion, una que usa condicionales (if) y una sin usar condicionales.

// function esPar(numero){
//     if(numero % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function esPar(numero){
//     return numero % 2 == 0;
// }

// console.log(esPar(15))

// function esCinco(numero){
//     if(numero == 5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(esCinco(-5))

// function esImpar(numero){
//     if(numero % 1 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(esImpar(3))

// let palabra = "Hola"

// for(let i = 0; i < palabra.length; i++){
//     let letra = palabra[i]
//     console.log(letra)
// }


// function imprimirEntre(menorNumero, mayorNumero){
//     for(let i = menorNumero; i <= mayorNumero; i++){
//         console.log(i)
//     }
// }


// function imprimirEntre(menorNumero, mayorNumero){
//     let numeros = menorNumero; 
//     while(numeros <= mayorNumero){
//         console.log(numeros);
//         numeros++;
//     }
// }

// imprimirEntre(2,26)


// function fizzBuzz(max){
//     for(let i = 0; i < max; i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             if(!(i % 3 == 0 && i % 5 == 0)){
//                 console.log(i)
//             }
//         }
//     }
// }


// function fizzBuzz(max){
//     let i = 0;
//     while(i < max){
//         if(i % 3 == 0 || i % 5 == 0){
//             if(!(i % 3 == 0 && i % 5 == 0)){
//                 console.log(i)
//             }
//         }
//         i++;
//     }
// }

// fizzBuzz(100)