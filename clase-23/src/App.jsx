import React from "react"

function App() {
  let status = "abierto";
  let espacio = 10;
  let espacioMaximo = 10;
  return (
    <div>
      <h1>Hola Mundo</h1>

      <h3>Status server: {status}</h3>
      {
      status === "abierto"
      ? <button>Cerrar</button>
      : <button>Abir</button>
      }
      <br />
      {
        espacio >= espacioMaximo - 2 && (espacio === espacioMaximo
          ? <span>!Espacio máximo consumido : <button>Mejorar plan</button></span>
          : <span>!Espacio cerca de consumirse : <button>Mejorar plan</button></span>)
        
      }
      
    </div>
   
  )
}

export default App
