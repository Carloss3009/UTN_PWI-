import React from "react";
import "./WhatsappScreen.css"

const WhatsappScreen = ({mensajes}) => {
  return (
    <div className="whatsappScreen">
        {mensajes.map((mensaje) => 
        <div key={mensaje.id}>
            <h2>{mensaje.emisor}</h2>
            <span>{mensaje.hora}</span>
            <p>{mensaje.mensaje}</p>
        </div>)}
    </div>
  )
}

const App = () => {
  const mensajes = [
    {
        emisor : "Carlos",
        mensaje : "Buenass",
        hora : "10:00",
        status : "leido",
        id : 1
    },
    {
        emisor : "Agustin",
        mensaje : "keloke",
        hora : "10:02",
        status : "leido",
        id : 2
    },
    {
        emisor : "Carlos",
        mensaje : "Sale fulbo?",
        hora : "10:03",
        status : "no leido",
        id : 3
    },
    {
        emisor : "Carlos",
        mensaje : "Alto gt👍",
        hora : "11:00",
        status : "no leido",
        id : 4
    }
]
  return <WhatsappScreen mensajes={mensajes}/>
}

export default App




