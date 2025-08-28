/* 
DOM = Document Object Model 
El objeto DOM contiene una replica exacta como objeto con todos los datos de nuestro HTML
Si el objeto es modificado, el HTML tambien se ve modificado
*/
//Este es el objeto DOM
//Es una variable global creada al cargarse el script
//console.dir(document)
//document.getElementById() Nos permite buscar un elemento en el HTML en particular por id
// function traerNombreUsuario (){
//     return 'pepe'
// }
/* let tituloHTML = document.getElementById('titulo')
let nombre = traerNombreUsuario()
tituloHTML.innerText = 'Hola ' + nombre
tituloHTML.style.fontSize = '90px'
tituloHTML.style.color = 'red' */
/* 
Crear en HTML un span que tenga un id que sea 'resultado'
Solicitar al usuario 2 numeros y sumarlos (pueden usar propmts)
Mostrar en el texto del span: 'El resultado de sumar {numero1} y {numero2} es {resultado}'
*/

/* let numero1 = prompt("Ingresa el primer número:")
numero1 = Number(numero1)
while(!numero1 || isNaN(numero1)){
    numero1 = prompt("Ingrese un número válido.")
}
let numero2 = prompt("ingresa el segundo número:")
numero2 = Number(numero2)
while(!numero2 || isNaN(numero2)){
    numero2 = prompt("Ingrese un número válido.")
}

let resultado = numero1 + numero2;
resultado = Number(resultado)
//Si llamo a algo que no existe me devolvera null
let textoHTML = document.getElementById("resultado")
textoHTML.innerText = `El resultado de sumar ${numero1} y ${numero2} es ${resultado}` */



// textoHTML.style.color = 'red'
// textoHTML.style.fontSize = '30px'
// textoHTML.style.fontWeight = 'bold'

// let contenedorHTML = document.getElementById('contenedor-producto')
// let producto = {
//     nombre: 'tv samsung',
//     precio: 400,
//     stock: 4
// }
// let contenido = `
//     <h2>${producto.nombre}</h2>
//     <span>Precio: $${producto.precio}</span><br>
//     <span>Unidades disponibles: ${producto.stock}</span>
//     <button>Comprar</button>
//     <hr>
// `

const userInfo = {
    nombre: "Carlos Dominguez",
    avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVE7CU3E-71a3d810fd8d-72',
    mail: "cd7747165@gmail.com",
    ultima_conexion: "22:00 (hora local)"
}

const userInfoHTML = document.getElementById("user_info")

userInfoHTML.innerHTML = `
    <div class="user_info_header">
    <div>
        <img src="${userInfo.avatar}" class="avatar">
        <h2>${userInfo.nombre}</h2>
    </div>
    <div>
        <span>Email: ${userInfo.mail}</span><br>
        <span>Última conexión: ${userInfo.ultima_conexion}</span><br>
        <span>Estado: Estudiando con voracidad🧐</span>   
    </div>
    <hr>
`




/* const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 0,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    }
]
const productsContainerHTML = document.getElementById('products-container') */
// /* 
// Por cada producto del array de productos deberar crear un div y deberas guardarlo/acumularlo en el resultado
// */
/* let resultado = ''
for(const producto of productos ){ */
    //Si el producto cuesta mas de 5000 vamos a decir en un span que es muy caro
    /* const productoEsCaro = producto.precio > 5000 */
    /* 
    Si producto esta comprado, entonces debera decir comprado en vez de comprar el boton. Caso contrario, siguira mostrando comprar
    Si el stock es 0 decir 'Ya no quedan unidades disponibles'
    Si es mayor a 0 decir 'Unidades disponibles: 0'
    */
    /* resultado = resultado + `
    <div>
        <h2>${producto.nombre}</h2>
        <span>Precio: $${producto.precio}</span><br>
        <span>Unidades disponibles: ${producto.stock === 0 ? '<span>Ya no quedan unidades disponibles</span>' : '<span>Unidades disponibles: 0</span>'}
        <span>${producto.comprado ? 'Comprado' : 'Comprar'}</span>
        ${
            productoEsCaro 
            ? '<span>El producto es caro</span>'
            : '<span>El producto es barato</span>'
        }
        <button ${producto.stock === 0 ? 'disabled' : ''}>Comprar</button>
        <hr>
    </div>
    `
}
productsContainerHTML.innerHTML = resultado */
/* `
<div>
    <h2>${productos[0].nombre}</h2>
    <span>Precio: $${productos[0].precio}</span><br>
    <span>Unidades disponibles: ${productos[0].stock}</span>
    <button>Comprar</button>
    <hr>
</div>
<div>
    <h2>${productos[1].nombre}</h2>
    <span>Precio: $${productos[1].precio}</span><br>
    <span>Unidades disponibles: ${productos[1].stock}</span>
    <button>Comprar</button>
    <hr>
</div>
<div>
    <h2>${productos[2].nombre}</h2>
    <span>Precio: $${productos[2].precio}</span><br>
    <span>Unidades disponibles: ${productos[2].stock}</span>
    <button>Comprar</button>
    <hr>
</div>
<div>
    <h2>${productos[3].nombre}</h2>
    <span>Precio: $${productos[3].precio}</span><br>
    <span>Unidades disponibles: ${productos[3].stock}</span>
    <button>Comprar</button>
    <hr>
</div>
` */