let productos = [
    {
        titulo: 'tv samsung 32"',
        precio: 400000,
        id: 1,
        descripcion: 'Es una tv normal, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 42"',
        precio: 600000,
        id: 2,
        descripcion: 'Es una tv normal pero mas grande, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 50"',
        precio: 800000,
        id: 3,
        descripcion: 'Es una tv normal pero mucho mas grande, no hay mucho que decir.'
    }
]

 /* Logica para eliminar el producto */
    //PROBLEMA: saber la posicion del elemento a eliminar
    //tenemos que buscar la posicion del producto que su id sea igual al id recibido
    //Estructura para recorrer el array

function eliminarProductoPorId (id_producto){
    let productoEliminado
    for(let posicion = 0; posicion < productos.length; posicion++){
        let producto = productos[posicion]
        if(producto.id === id_producto){
        }
    }
    //Que metodo usamos para eliminar puntualmente un elemento? splice
    productos.splice(productoEliminado, 1)
}
eliminarProductoPorId(1)
eliminarProductoPorId(2)
console.log(productos)


        /* 
        TIPADO: 
        posicion: number, es la posicion que estoy recorriendo de mi array
        productos.length: number, es la longitud del array (cantidad de elementos (productos))
        productos: array, lista de productos
        producto: objeto, producto,
        id_producto: numero, el id recibido en la funcion (el id a buscar),
        posicionProductoEliminar: numero, la posicion del producto que quiera eliminar
        */  