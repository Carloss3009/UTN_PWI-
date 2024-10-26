// Crear el objeto producto que tenga las propiedades titulo, precio, id, stock, vendedor.

let propiedadNueva = prompt('Ingresa una nueva propiedad al objeto:')
let valorNuevo = prompt('Ingresame el nuevo valor:')
// Objeto literal:
let producto = {
    'titulo' : 'Queso rallado',
    'precio' : 5000,
    'id' : 'KESO21',
    'stock' : 200,
    'vendedor' : {
        'nombre' : 'Pepito',
        'apellido' : 'Mateo'
    },
    'esCliente' : false,
    [propiedadNueva] : valorNuevo
}
console.log(producto)

// Creando la propiedad dinero: ❌MALA PRACTICA porque esta fuera del objeto es mejor agregarla al bloque de codigo
// producto.dinero = 40000
// producto['dinero']

// Cambiar propiedades:
producto.esCliente = true

// Eliminar propiedades: ❌MALA PRACTICA(las funciones o codigo dependiente de su objeto fallara si eliminamos la propiedad)
delete producto.stock

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