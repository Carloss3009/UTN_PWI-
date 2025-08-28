let productos = [
    {
        titulo: "coca-cola",
        precio: 3000,
        stock: 20,
        id: 1,
        descripcion: "Bebida gasificada sabor cola." 
    },
    {
        titulo: "pepsi",
        precio: 1000,
        stock: 10,
        id: 2,
        descripcion: "Bebida gasificada sabor cola."
    },
    {
        titulo: "sprite",
        precio: 2000,
        stock: 0,
        id: 3,
        descripcion: "Bebida gasificada sabor limón."
    },
    {
        titulo: "fanta",
        precio: 3000,
        stock: 8,
        id: 4,
        descripcion: "Bebida gasificada sabor naranja."
    },
    {
        titulo: "Tang",
        precio: 150,
        stock: 80,
        id: 5,
        descripcion: "Bebida artificial en polvo sabor frutal."
    }
]



let productos_distintos = [
    {
        titulo: "Televisor 32\"",
        precio: 3000,
        stock: 20,
        id: 1,
        descripcion: "Televisor de 32 pulgadas."
    },
    {
        titulo: "Televisor 42\"",
        precio: 4000,
        stock: 20,
        id: 2,
        descripcion: "Televisor de 42 pulgadas."
    },
    {
        titulo: "Televisor 50\"",
        precio: 5000,
        stock: 20,
        id: 3,
        descripcion: "Televisor de 50 pulgadas."
    }
]
/* Hacer una funcion que dado un id me permita obtener un producto por su id y mostrarlo por consola:
Esto es una JS Docs: */
/**
 ** producto_id: any(parameter) - El id del producto que queremos obtener.
 ** producto: object(var)- El producto que estoy recorriendo de mi lista de productos.
 ** productos: array(var) - La lista de productos.
 ** Una función que recibe el id del producto, lo busca y lo retorna, si no lo encuentra devuelve undefined.
 */ 


/* function obtenerProductoPorId(producto_id, productos){
    for(let producto of productos){
        if(producto_id === producto.id){
            return producto
        }
    }
 }

let productoEncontrado = obtenerProductoPorId(2, productos);
let productoEncontradoDistinto = obtenerProductoPorId(2, productos_distintos);
if(!productoEncontrado && !productoEncontradoDistinto){
    console.error("Producto no encontrado.")
}
else{
    console.log("El producto es:" , productoEncontrado );
    console.log("El producto es:" , productoEncontradoDistinto );
} */


// Hacer una función que me permita obtener todos los valores mayores a 1100:
// Esta función retornará un array que estará compuesto de los elementos que cumplan la condición de tener un precio mayor a 1100.


/* function valoresMayoresA1100(){
    let valoresMayores = []
    for(let producto of productos){
        if(producto.precio > 1100){
            valoresMayores.push(producto)
        }
    }
    return valoresMayores;
}

let productosCaros = valoresMayoresA1100();
console.log(productosCaros); */

//Ejemplo de la función con precios variables:

/* function valoresMayoresA(precio, productos){
    let valoresMayores = []
    for(let producto of productos){
        if(producto.precio > precio){
            valoresMayores.push(producto)
        }
    }
    return valoresMayores;
}

let productosCaros = valoresMayoresA(2500, productos);
console.log(productosCaros);
 */


//Ahora hace una funcion que me devuelva a productos que esten entre 100 y 200


/* function productosEntre100Y200(){
    let arrayAcumulador = [];
    for(let producto of productos){
        if(producto.precio >= 100 && producto.precio <= 200){
            arrayAcumulador.push(producto)
        }
    }
    return arrayAcumulador;
}

let productosDevueltos = productosEntre100Y200()
console.log(productosDevueltos); */


//Crear una funcion que me permita dado un id, obtener la posicion del elemento en el array. SI no lo encuentra debe devolver -1

//obtenerPosicionDelProductoPorId(2) //retorna 1
//obtenerPosicionDelProductoPorId(20) //retornar -1
//Recomendacion: Ver que bucle conviene usar


/* function obtenerPosicionDelProductoPorId(id_posicion, productos){
    for(let i = 0; i < productos.length; i++){
        if(productos[i].id === id_posicion){
            return 1;
        }
    }
    return -1;
}

console.log(obtenerPosicionDelProductoPorId(2, productos));
console.log(obtenerPosicionDelProductoPorId(2, productos_distintos));
console.log(obtenerPosicionDelProductoPorId(20, productos)); */



//Recorrer un array con for: for(let i = 0; i < array.length; i = i + 1) una funcion que se llame hayAlgunProductoConXTitulo que recibira un titulo y nos devolvera true si algun producto tiene ese titulo o false si ninguno lo tiene:


/* function hayAlgunProductoConXTitulo(titulo , productos){
    for(let i = 0; i < productos.length; i++){
        if(productos[i].titulo === titulo){
            return true;
        }
    }
    return false;
}

console.log(hayAlgunProductoConXTitulo("agua", productos));
console.log(hayAlgunProductoConXTitulo("sprite", productos)); */


// Sacar el promedio de algo:

// let edades = [70, 60, 20, 30, 40, 60];
// let sumatoria = 0
// for (const edad of edades) {
//     sumatoria += edad
// }

// let promedio = sumatoria / edades.length;

// console.log(promedio);


