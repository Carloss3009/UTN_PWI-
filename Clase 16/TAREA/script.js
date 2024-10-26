// EJERCICIO 1:
// Crear una funcion llamada crearProducto
// la funcion recibira titulo, precio y categoria del producto
// INICIALMENTE EL PRODUCTO TENDRA stock en 0 y la propiedad estado en false
// La funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola

function crearProducto(titulo, precio,categoria){
    let producto = {
        'titulo' : titulo,
        'precio' : precio,
        'categoria' : categoria,
        'stock' : 0,
        'estado' : false
    }
    return producto
}

let resultado1 = crearProducto('Queso rallado', 5000, 'Lacteos')
// console.log(resultado)


// EJERCICIO 2:
// Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y construira un string con el siguiente formato
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
// document.write(HTML) (editado) 


mostrarProducto(resultado1)
function mostrarProducto(resultado1){
    let productoHTML = `
<div>
    <h3>  ${resultado1.titulo}</h3>
    <span><b>Precio:</b>$${resultado1.precio}</span>
    <span><b>Categoria:</b> ${resultado1.categoria}</span>
</div>
`
    document.write(productoHTML)
}

