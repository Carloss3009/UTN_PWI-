// EJERCICIOS JS VARIOS: https://docs.google.com/document/d/1wPi6o8t8cGyhAoGfW9RHIGNQrefuia__g2f9CH4QY5Q/edit?usp=sharing


// 1)Imprime los números del 1 al 10:

// for(let iterador = 1;
//     iterador <= 10;
//     iterador = iterador + 1){
//     console.log(iterador)
//     }

// 2)Imprime los números pares del 2 al 20:

// for(let iterador = 2;
//     iterador <= 20;
//     iterador = iterador + 2){
//     console.log(iterador)
//     }

// 3)Imprime los números impares del 1 al 19:

// for(let iterador = 1;
//     iterador <= 19;
//     iterador = iterador + 2){
//     console.log(iterador)
//     }

// 4)Imprime los números del 10 al 1 en orden inverso:

// for(let iterador = 10;
//     iterador >= 1;
//     iterador = iterador - 1){
//     console.log(iterador)
//     }

// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5:

// for(let iterador = 1;
//     iterador <= 10;
//     iterador = iterador + 1){
//     if(iterador == 5){
//         break
//     }
//     console.log(iterador)
//     }

// 6)Imprime los números del 1 al 10, pero salta el 5:

// for(let iterador = 1;
//     iterador <= 10;
//     iterador = iterador + 1){
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


// function calcular(operación,a,b){
//     if(operación == "+"){
//         return sumar(a,b)
//     }
//     else if(operación == "-"){
//         return restar(a,b)
//     }
//     else{
//         return null
//     }
// }

// alert(calcular("%",20,30))

// 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola:

function contarHasta(numero){
    for(let iterador = 0;
        iterador <= numero;
        iterador = iterador + 1){
        }
        console.log(contarHasta(20))
}
