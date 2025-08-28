// EJERCICIOS JS VARIOS: https://docs.google.com/document/d/1wPi6o8t8cGyhAoGfW9RHIGNQrefuia__g2f9CH4QY5Q/edit?usp=sharing

// 1)Imprime los números del 1 al 10:

/* for(let i = 1; i <= 10; i++){
    console.log(i)
} */


// 2)Imprime los números pares del 2 al 20:

/* for(let i = 2; i <= 20; i = i + 2){
    console.log(i);
} */


// 3)Imprime los números impares del 1 al 19:

/* for(let i = 1; i <= 19; i = i + 2){
    console.log(i); 
} */

    
// 4)Imprime los números del 10 al 1 en orden inverso:

/* for(let i = 10; i >= 1; i = i - 1){
    console.log(i);
} */


// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5:

/* for(let i = 1; i <= 10; i++){
    if(i === 6){
        break
    }
    console.log(i);
} */


// 6)Imprime los números del 1 al 10, pero salta el 5:

/* for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue
    }
    console.log(i);
} */


// 7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre:

/* function decirNombre(nombre){
    alert(`Hola ${nombre}`)
}

decirNombre("Carlos") */


// 8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta:


/* function saludar(nombre){
    return `Hola ${nombre}`
}

alert(saludar("Marisol")) */


// 9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b:

/* function sumar(a,b){
    return a + b
} */



// 10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b:


/* function restar(a,b){
    return a - b
} */


// 11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null:


/* function calcular(operacion,a,b){
    if(operacion === "+"){
        return sumar(a,b)
    }
    else if(operacion === "-"){
        return restar(a,b)
    }
    else{
        return null
    }
} */

/* alert(calcular("+",70,30)) */


// 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola:

/* function contarHasta(numero){
    for(let i = 1; i <= numero; i++)
        console.log(i);
}

contarHasta(33) */


// 13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.


/* let respuesta = prompt("¿Deseas usar la calculadora? SI-NO")
respuesta = String(respuesta)
while(respuesta !== "SI" && respuesta !== "NO"){
    respuesta = prompt("Ingrese una respuesta válida:")
}

while(respuesta === "SI"){
    let operacion = prompt("Ingrese una operación: +/-")
operacion = String(operacion)
while(operacion !== "+" && operacion !== "-"){
    operacion = prompt("Ingrese una operación válida: +/-")
}

let numero1 = prompt("Ingrese el primer número:")
numero1 = Number(numero1)
while(!numero1 || isNaN(numero1)){
    numero1 = prompt("Ingrese un número válido:")
}

let numero2 = prompt("Ingrese el segundo número:")
numero2 = Number(numero2)
while(!numero2 || isNaN(numero2)){
    numero2 = prompt("Ingrese un número válido:")
}

let resultado = calcular(operacion,numero1,numero2)

alert("El resultado es: " + resultado)

respuesta = prompt("¿Deseas volver a usar la calculadora? SI-NO")
respuesta = String(respuesta)
}

alert("El programa ha finalizado.") */


/* 14) Hacer un programa que imprima 25 términos de la serie 11-22-33-44-55-66… */

/* for(let i = 1; i <= 25; i ++){
    let termino = i * 11;
    console.log(`Término número ${i}: ` + termino); 
} */


/* 15)hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares e ingresan valores por teclado. */

/* let pares = 0;
let impares = 0;
for(let i = 1; i <= 5; i++){
    let numeros = prompt("Ingrese 5 números enteros: ")
    numeros = Number(numeros)
    while(!numeros || isNaN(numeros)){
        numeros = prompt("Ingrese un número válido: ")
    }
    if(numeros % 2 === 0){
        pares = pares + 1
    }
    else{
        impares = impares + 1
    }
}
alert(`Se ingresaron ${pares} valores pares y ${impares} impares`) */


/* 16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. */


/* let promedio = 0
for(let i = 1; i <= 5; i++){
    let alturas = prompt("Ingrese 5 alturas de personas: ")
    alturas = Number(alturas)
    while(!alturas || isNaN(alturas)){
        alturas = prompt("Ingrese datos válidos: ")
    }
    promedio = promedio + alturas
}
promedio = promedio / 5;

alert(`El promedio de las 5 alturas es ${promedio}`) */


/* 17)Se cuenta con la siguiente información:
	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor. */

/* let promedioTM = 0;
let promedioTT = 0;
let promedioTN = 0;
let promedioMayor = 0;

for(let i = 1; i <= 5; i++){
    let mañana = prompt("Ingresa la edad de 5 estudiantes del TM: ")
    mañana = Number(mañana)
    while(!mañana || isNaN(mañana)){
        mañana = prompt("Ingresa un dato válido: ")
    }
    while(mañana < 1 || mañana > 120){
        mañana = prompt("Ingresa una edad válida: ")
    }
    promedioTM = promedioTM + mañana;
}
    promedioTM = promedioTM / 5;

for(let i = 1; i <= 6; i++){
    let tarde = prompt("Ingresa la edad de 6 estudiantes del TT: ")
    tarde = Number(tarde)
    while(!tarde || isNaN(tarde)){
        tarde = prompt("Ingresa un dato válido: ")
    }
    while(tarde < 1 || tarde > 120){
        tarde = prompt("Ingresa una edad válida: ")
    }
    promedioTT = promedioTT + tarde;
}
    promedioTT = promedioTT / 6;

for(let i = 1; i <= 11; i++){
    let noche = prompt("Ingresa la edad de 11 estudiantes del TN: ")
    noche = Number(noche)
    while(!noche || isNaN(noche)){
        noche = prompt("Ingresa un dato válido: ")
    }
    while(noche < 1 || noche > 120){
        noche = prompt("Ingresa una edad válida: ")
    }
    promedioTN = promedioTN + noche;
}

    promedioTN = promedioTN / 11;

if(promedioTM > promedioTT && promedioTM > promedioTN){
    promedioMayor = promedioMayor + promedioTM;
}

else if(promedioTT > promedioTM && promedioTT > promedioTN){
    promedioMayor = promedioMayor + promedioTT;
}

else{
    promedioMayor = promedioMayor + promedioTN;
}


alert(`El promedio del TM es: ${promedioTM}, el del TT es: ${promedioTT} y el del TN es: ${promedioTN}. Además el promedio más alto es: ${promedioMayor}`) */

/* 18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.
d)	El valor acumulado de los números ingresados que son pares. */

/* let negativos = 0;
let positivos = 0;
let multiplosDeQuince = 0;
let sumaDePares = 0;

for(let i = 1; i <= 10; i++){
    let enterosStr = prompt(`Ingrese el valor número ${i}: `)
    let enteros = Number(enterosStr)
    enteros = parseInt(enteros)
    while(isNaN(enteros) || !Number.isInteger(enteros)){
        enterosStr = prompt(`"${enterosStr}" no es un número válido, ingrese un número entero: `)
        enteros = Number(enterosStr)
        enteros = parseInt(enteros)
    }    
    if(enteros % 15 === 0){
        multiplosDeQuince++
    }
    if(enteros % 2 === 0){
        sumaDePares += enteros
    }
    if(enteros > 0){
        positivos++
    }
    if(enteros < 0){
        negativos++
    }
}


alert(`Hay ${multiplosDeQuince} multiplos de 15, ${positivos} números positivos, ${negativos} números negativos y el valor acumulado de los pares es: ${sumaDePares}`) */



/* 19)hacer un programa que lea los lados de 4 triángulos, e informar:
a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
b)	Cantidad de triángulos de cada tipo.
c)	Tipo de triángulo del que hay menor cantidad */


/* let equilatero = 0;
let isosceles = 0;
let escaleno = 0;

for(let i = 1; i <= 4; i++){
    let a = prompt(`Ingresa el las medidas del triángulo número ${i}: `)
    a = Number(a)
    while(!a || isNaN(a)){
        a = prompt("Ingrese una medida correcta: ")
    }
    let b = prompt(`Ingresa el las medidas del triángulo número ${i}: `)
    b = Number(b)
    while(!b || isNaN(b)){
        b = prompt("Ingrese una medida correcta: ")
    }
    let c = prompt(`Ingresa el las medidas del triángulo número ${i}: `)
    c = Number(c)
    while(!c || isNaN(c)){
        c = prompt("Ingrese una medida correcta: ")
    }
    if(a === b && a === c){
        equilatero++
        alert("Es un triángulo equilátero.")
    }
    else if(a === b || a === c || b === c){
        isosceles++
        alert("Es un triángulo isosceles.")
    }
    else if(a !== b && a !== c && b !== c){
        escaleno++
        alert("Es un triángulo escaleno.")
    }
}

if(equilatero < isosceles && equilatero < escaleno){
    alert(`La cantidad de triángulos es: ${equilatero} Equilateros, ${isosceles} Isosceles y ${escaleno} Escalenos. El de menor cantidad es Equilatero.`)
}
else if(isosceles < equilatero && isosceles < escaleno){
    alert(`La cantidad de triángulos es: ${equilatero} Equilateros, ${isosceles} Isosceles y ${escaleno} Escalenos. El de menor cantidad es Isosceles.`)
}
else if(escaleno < equilatero && escaleno < isosceles){
    alert(`La cantidad de triángulos es: ${equilatero} Equilateros, ${isosceles} Isosceles y ${escaleno} Escalenos. El de menor cantidad es Escaleno.`)
} */


/* 20)hacer una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
4 5 6 7 8 9 10 */


/* function contador(){
    let numeroMenor = prompt("Ingrese el primer número(Debe ser menor que el segundo):")
    numeroMenor = Number(numeroMenor)
    while(!numeroMenor || isNaN(numeroMenor)){
        numeroMenor = prompt("ERROR. Ingrese un número válido.")
    }
    let numeroMayor = prompt("Ingrese el segundo número(Debe ser mayor que el primero):")
    numeroMayor = Number(numeroMayor)
    while(!numeroMayor || isNaN(numeroMayor)){
        numeroMayor = prompt("ERROR. Ingrese un número válido")
    }
    while(numeroMenor >= numeroMayor){
        numeroMayor = prompt("El segundo número debe ser MAYOR:")
        numeroMayor = Number(numeroMayor)
        while(!numeroMayor || isNaN(numeroMayor)){
            numeroMayor = prompt("ERROR. Ingrese un número válido")
        }
    }
    for(let i = numeroMenor; i <= numeroMayor; i++){
        console.log(i);
    }
}

contador() */


/* 21)Hacer una función que reciba tres enteros y retorne el promedio. */

/* function promedioDeTres(uno, dos, tres){
    return (uno + dos + tres)/3
}

alert(`El promedio de los tres es: ${promedioDeTres(99,20,33)}`) */


/* 22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma. */

/* function sumaDeCinco(){
    let sumaDeValores = 0;
    for(let i = 1; i <= 5; i++){
        let valores = prompt(`Ingrese el valor N°${i}`)
        valores = Number(valores)
        while(!valores || isNaN(valores)){
            valores = prompt("ERROR. Ingrese un valor válido:")
        }
        sumaDeValores += valores
    }
    return sumaDeValores

}

const resultado = sumaDeCinco()
alert(`La suma de los 5 valores es: ${resultado}`) */


/* 23)hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final("¡!") */

/* function palabraConSignos(palabra){
    return `¡${palabra}!`
}

alert(palabraConSignos("Carlos")) */


/* 24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores: */

/* function obtenerNombreCompleto(nombre,apellido){
    return `${nombre} ${apellido}`
}

alert(obtenerNombreCompleto("Carlos", "Dominguez")) */


/* 25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas: */

/* function convertirHorasEnSegundos(horas){
    return horas * 3600
}

alert(`Son ${convertirHorasEnSegundos(24)} segundos.`) */


/* 26)Definí una función generarEmail que reciba como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com */

/* function generarEmail(usuario, dominio){
    return `${usuario}@${dominio}.com`
}

alert(`Tu nuevo email es: ${generarEmail("emailgenerico","windows")}`) */


/* 27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
Ingresá una cantidad de grados Celsius
Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado} */


/* let celsius = prompt("Ingresa una cantidad de grados celsius:")
celsius = Number(celsius);
while(!celsius || isNaN(celsius)){
    celsius = prompt("ERROR. Ingrese un valor válido:")
}
let resultado = (celsius * 1.8) + 32

alert(`La conversión de ${celsius} grados Celsius a fahrenheit es: ${resultado}`) */



/* 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs */


/* let distancia = prompt("Ingrese la distancia de un recorrido:")
distancia = Number(distancia)
while(!distancia || isNaN(distancia)){
    distancia = prompt("ERROR. Ingresa un dato válido")
}
let resultadoAPie = distancia / 5
let resultadoEnBicicleta = distancia / 10
let resultadoEnAuto = distancia / 50

alert(`Para la distancia de ${distancia} km, el tiempo de viaje a pie es ${resultadoAPie} horas, en bicicleta ${resultadoEnBicicleta} horas y en auto ${resultadoEnAuto} horas.`) */




/* 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

datos con los cuales deben ser enviados a la función

puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true */

/* function puedeVerPelicula(edad, tieneAutorizacion){
    if(edad > 15 || tieneAutorizacion === true){
        return true;
    }
    else{
        return false;
    }
}
alert(puedeVerPelicula(12, false))
alert(puedeVerPelicula(12, true))
alert(puedeVerPelicula(16, false))
alert(puedeVerPelicula(18, true)) */



/* 30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:

esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true */


/* function esVocal(letra){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return true;
    }
    else{
        return false;
    }
}
alert(esVocal('a'))
alert(esVocal('n'))
alert(esVocal('i')) */



/* 31)Crear una condicional que verifique que la edad sea mayor o igual a 18, en caso de ser así decir por consola "es mayor de edad" sino decir "es menor de edad" */

/* function mayorDeEdad(edad){
    if(edad >= 18){
        console.log("Es mayor de edad.");
        
    }
    else{
        console.log("Es menor de edad.");
        
    }
}
mayorDeEdad(23) */


/* 32)Crear un programa que solicite al usuario un precio, eso guardarlo en una variable. Si el precio es inferior a 3000 entonces decir por consola "es barato", si el precio es superior a 3000 decir por consola es caro. */

/* let precio = prompt("Ingrese un precio:")
precio = Number(precio)
while(!precio || isNaN(precio)){
    precio = prompt("ERROR. Ingrese un dato válido.")
}
if(precio <= 3000){
    console.log("Es barato.");
}
else{
    console.log("Es caro.");
} */



/* 33)Solicitar al usuario 3 números y verificar cuál es el mayor de los 3 (nos muestra el número mayor por consola) */

/* let mayor = 0
for(let i = 1; i <= 3; i++){
    let numeros = prompt(`Ingrese el ${i}° número:`)
    numeros = Number(numeros)
    while(!numeros || isNaN(numeros)){
        numeros = prompt("ERROR. Ingrese un dato válido.")
        numeros = Number(numeros)
    }
    if(numeros > mayor){
        mayor += numeros
    }
}
console.log(`El mayor es ${mayor}.`); */



/* 34)Verificamos si el número es positivo, negativo o cero (nos dirá por consola a qué categoría pertenece) */

/* function verificarNumero(numero){
    if(numero > 0){
        console.log("Es positivo.");
    }
    else if(numero < 0){
        console.log("Es negativo");
    }
    else{
        console.log("Es cero");
    }
}
verificarNumero(-55)
verificarNumero(4)
verificarNumero(0) */


/* 35)Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condición, se dirá por consola Esta en edad laborable */

/* function verificarEdadLaborable(edad){
    if(edad >= 18 && edad <= 65){
        console.log("Está en edad laborable.");
    }
    else if(edad < 18 && edad > 0){
        console.log("Es menor de edad.");
    }
    else{
        console.log("No es una edad laborable.");
    }
}
verificarEdadLaborable(23)
verificarEdadLaborable(15)
verificarEdadLaborable(100)
verificarEdadLaborable(-33) */