// let num1 = prompt('Ingrese un numero')
// let num2 = prompt('Ingrese otro')
// const resultado = Number(num1) + Number(num2);
// let texto = document.getElementById('resultado')
// texto.innerText = `El resultado de sumar ${num1} y ${num2} es ${resultado}`



// const userInfo = {
//     nombre : "Carlos Dominguez",
//     avatar : "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVE7CU3E-71a3d810fd8d-192",
//     ultimaConexion : "17:47(Hora local)",
//     mail : "cd7747165@gmail.com"
// }

// const userInfoHTML = document.getElementById('contenedor-usuario')

// userInfoHTML.innerHTML = `
//     <div>
//         <img src="${userInfo.avatar}" class="avatar">
//         <h2>${userInfo.nombre}</h2>
//     </div>
//     <div>
//         <span>Email: ${userInfo.mail}</span><br>
//         <span>Última conexión: ${userInfo.ultimaConexion}</span><br>
//         <span>Estado: Estudiando con voracidad🧐</span>   
//     </div>
//     <hr>

// `


const productos = [
    {
        nombre: 'Monitor 24 pulgadas',
        precio: 20000,
        stock: 0,
        comprado: true
    },
    {
        nombre: 'Monitor 27 pulgadas',
        precio: 30000,
        stock: 10,
        comprado: true
    },
    {
        nombre: 'Monitor 32 pulgadas',
        precio: 40000,
        stock: 10,
        comprado: true
    },
    {
        nombre: 'Monitor 40 pulgadas',
        precio: 50000,
        stock: 10,
        comprado: false,
    }

]

let resultado = '';
const contenedorProductosHTML = document.getElementById('contenedor-producto')

for (const producto of productos) {
    let productoEsCaro = producto.precio > 30000;
    
    resultado = resultado + `
    <div>
        <h2>${producto.nombre}</h2>
        <span>Precio: $${producto.precio}</span><br>
        <span>Unidades disponibles: ${producto.stock ? producto.stock : '<span>Ya no quedan unidades disponibles</span>'}</span><br>
        <span>${producto.comprado ? 'Comprado' : 'Comprar'}</span><br>
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

contenedorProductosHTML.innerHTML = resultado