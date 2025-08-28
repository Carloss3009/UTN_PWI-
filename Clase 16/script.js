// Crear el objeto producto que tenga las propiedades titulo, precio, id, stock, vendedor:

/* let producto = {
    'titulo' : 'Aspiradora eléctrica',
    'precio' : 40,
    'divisa' : 'USD',
    'id' : 34,
    'stock' : 12,
    'vendedor' : {
        'nombre' : 'Falabella',
        'id' : 1
    }
}

console.log(producto);
console.log(producto['vendedor']['nombre']); */



// let propiedadNueva = prompt('Ingresa una nueva propiedad al objeto:')
// let valorNuevo = prompt('Ingresame el nuevo valor:')
// Objeto literal:
// let producto = {
//     'titulo' : 'Queso rallado',
//     'precio' : 5000,
//     'id' : 'KESO21',
//     'stock' : 200,
//     'vendedor' : {
//         'nombre' : 'Pepito',
//         'apellido' : 'Mateo'
//     },
//     'esCliente' : false,
//     [propiedadNueva] : valorNuevo
// }
// console.log(producto)

// Creando la propiedad dinero: ❌MALA PRACTICA porque esta fuera del objeto es mejor agregarla al bloque de codigo
// producto.dinero = 40000
// producto['dinero']

// Cambiar propiedades:
// producto.esCliente = true

// Eliminar propiedades: ❌MALA PRACTICA(las funciones o codigo dependiente de su objeto fallara si eliminamos la propiedad)
// delete producto.stock

//Notacion de corchetes:
// console.log(producto['id'])
// console.log(producto['vendedor']['apellido'])

//Notacion de puntos:
// console.log(producto.titulo)

// Consideraciones de la notacion de puntos:
// No usar: espacios, comas, -, +, *, /, %
// Usar: _, camelCase


// let propiedadAMostrar = prompt('Ingrese la clave que quiera mostrar:')

// alert(producto[propiedadAMostrar])

// Si hacemos esto:
// alert(usuario.propiedadAMostrar)
// JS entiende esto:
// usuario['propiedadAMostrar']



// function presentarUsuario (producto){
//     console.log(`Hola valgo ${producto.random}, y soy un ${producto.titulo}😎`)
// }

// presentarUsuario(producto)

// 1) Crear una función llamada crearProductos. 
// la funcion recibirá titulo, precio y categoria del producto.
// inicialmente el producto tendra stock en 0 y la propiedad estado en false.
// la funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola



function crearProductos(titulo, precio, categoria){

let producto = {
    "titulo" : titulo,
    "precio" : precio,
    "categoria" : categoria,
    "stock" : 0,
    "estado" : false
}

return producto

}

let producto1 = crearProductos("Sprite", 4000, "bebidas")
let producto2 = crearProductos("Queso rallado", 5000, "lacteos")



// 2) Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y construira un string con el siguiente formato:
// `
// <div>
//     <h3>producto.nombre</h3>
//     <span><b>Precio:</b>$producto.precio</span>
//     <span><b>Categoria:</b>producto.categoria</span>
// </div>
// `
// Luego dicho string debera pasarse a la funcion document.write()
// Ejemplo:
// let HTML = `<div></div>`
// document.write(HTML)


function mostrarProducto(producto){
    let HTML = `
            <div>
                <h3>${producto.titulo}</h3>
                <span><b>Precio:</b>$${producto.precio}</span><br>
                <span><b>Categoria:</b>${producto.categoria}</span>
            </div>
            <hr>
            `
document.write(HTML)
}

mostrarProducto(producto1)
mostrarProducto(producto2)
