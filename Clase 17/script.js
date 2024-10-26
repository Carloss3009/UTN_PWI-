let productos_vendidos_hoy = [
    'teclado',
    'monitor',
    'celular'
]

// Por cada producto vendido deberas mostrar una alerta que diga 'Has vendido {producto} exitosamente😎🎆🎩'

for(let producto = 0; producto < productos_vendidos_hoy.length; producto = producto + 1){
        alert(`Has vendido ${productos_vendidos_hoy[producto]} exitosamente😎🎆🎩`)
    }


// Por cada producto vendido vamos a usar un document.write() donde pasaremos un string con el siguiente formato:
// `<div>
//     <h3>{nombre}</h3>
//     <hr/>
// </div>
// `


for(let producto = 0; producto < productos_vendidos_hoy.length; producto = producto + 1){
    document.write(
        `
        <div>
            <h3>Has vendido un ${productos_vendidos_hoy[producto]} exitosamente🥵🥶🤑</h3>
            <button>Ver estado de entrega</button>
            <hr/>
        </div>`)
}