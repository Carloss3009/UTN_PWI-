const productos = [
    {
        precio : 2000,
        nombre : 'tv',
        stock : 20,
        id : 1,
        descripcion : "TV de 42 pulgadas"
    },
    {
        precio : 3000,
        nombre : 'laptop',
        stock : 1,
        id : 2,
        descripcion : "Laptop de 15 pulgadas"
    },
    {
        precio : 5000,
        nombre : 'celular',
        stock : 15,
        id : 3,
        descripcion : "Celular de 5 pulgadas"
    },
    {
        precio : 8000,
        nombre : 'tablet',
        stock : 10,
        id : 4,
        descripcion : "Tablet de 10 pulgadas"
    },
    {
        precio : 10000,
        nombre : 'monitor',
        stock : 100,
        id : 5,
        descripcion : "Monitor de 20 pulgadas"
    }
]

// Filtrar por los productos que su stock sea mayor o igual a 5.
// Filtrar por los productos que su precio este entre 4000 y 7000.
// Filtrar los productos que su descripcion contenga la palabra "Moni"

const resultados = productos.filter(
    function(producto){
        return producto.stock >= 5;
    }
)

const resultados2 = productos.filter(
    function(producto){
        return producto.precio >= 4000 && producto.precio <= 7000
    }
)

const resultados3 = productos.filter(
    function(producto){
        return producto.descripcion.includes("Moni")
    }
)


console.log(resultados);
console.log(resultados2);
console.log(resultados3);


//ARROW FUNCTIONS / FUNCIONES EN FLECHA:

//Las funciones en flecha son una forma distinta y mejor de hacer las funciones en JS, cuentan con las siguientes ventajas:

//Funcion normal o funcion ES5/commonJS
/* function saludar(nombre){
    alert('hola ' + nombre)
} */


//Arrow function o funcion en flecha ES6

const saludar = (nombre) => {
    alert('hola ' + nombre)
}


//mejoras:

//Retorno implicito (Solo funciona si NO hay llaves)

const sumar = (a, b) =>  a + b
//Es lo mismo que:
const sumar2 = (a, b) => {return a + b}



console.log(sumar(8, 8))

/* function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 3500
}

const condicionRemuneracionCaros = ( usuario ) => usuario.remuneracion > 3500 */

//Cuando conviene usar retorno implicito?

//CASO Funcion 1 NO CONVIENE USAR RETORNO IMPLICITO
//Quiero mostrar por alerta un hola 
//Solicitar un nombre
//Despedirse por consola
//Devolvera true

const doAction = ( ) =>{
    alert('hola')
    let nombre = prompt('Ingresa tu nombre')
    console.log('chau')
    return true
}


//CASO Funcion 2 CONVIENE USAR RETORNO IMPLICITO
//Quiero una funcion que reciba un valor y me diga si el typeof es string

const validateString = (value) => typeof(value) === 'string'

const validateString2 = (value) => {
    return typeof(value) === 'string'
} 



//Metodos de array:

//FILTER Filtrar a los los elementos por x condicion
//DEVUELVE ARRAY SIEMPRE (incluso si nadie cumple la condicion)
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces sera agregado al array

users.filter(user => user.email === 'pepito@gmail.com')
//Devuelve: [usuarios que cumplan con la condicion]


//FIND Buscar UN elemento dentro del array
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces CORTARA la ejecucion de find y retornara dicho elemento. Si nadie cumple la condicion, retornara undefined

const usuarioBuscado = users.find((user) => user.id === 10)

//Devuelve: usuario que cumple la condicion | undefined


//FINDINDEX Buscar UN indice de x elemento dentro del array
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces CORTARA la ejecucion de findIndex y retornara LA POSICION EN EL ARRAY dicho elemento. Si nadie cumple la condicion, retornara -1

const usuarioIndice = users.findIndex((user) => user.id === 10)
console.log(usuarioIndice)

//Devuelve: posicion usuario que cumple la condicion | -1

//SOME Ver si almenos UN usuario cumple con x condicion
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces CORTARA la ejecucion de some y retornara un true. Si nadie cumple la condicion, retornara false

let hayUnDiseñador = users.some(user => user.puesto === 'Diseñador')
console.log(hayUnDiseñador)

//Devuelve un boolean


//EVERY Ver si todos los elementos cumplen con x condicion
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor falsy, entonces CORTARA la ejecucion de every y retornara un false. Si TODOS cumplen la condicion, retornara true

let todosTienenPuesto = users.every((user) => user.puesto.length > 0)

//FOREACH Ejecuta una callback por cada elemento de mi array (Basicamente un for of pero como metodo)
//DEVUELVE undefined SIEMPRE
users.forEach((user) => {
    console.log(user.nombre)
})


//MAP MAS DIFICIL DE TODOS