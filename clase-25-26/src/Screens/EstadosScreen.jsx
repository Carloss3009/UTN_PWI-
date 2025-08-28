import React, { useState } from 'react'


const EstadosScreen = () => {
    const [isHiddenText, setIsHiddenText] = useState(false);
    const [contador_state, setContador] = useState(1);
    const [error_min_value, setError] = useState(false);

    const handleShowHiddenText = () => {
        setIsHiddenText(!isHiddenText);
    }
   
    const sumar = () => {
        setContador(contador_state + 1);
        setError(false);
        
    }
    const restar = () => {
        if(contador_state > 1){
            setContador(contador_state - 1);
            setError(false);
        }
        else{
            setError(true);
        }
        
    }
    return (
    <div>
        <h1>Estados de React</h1>
        <div>
            <button onClick={restar}>Restar</button>
            <span>{contador_state}</span>
            <button onClick={sumar}>Sumar</button>
        </div>
        <div>
            <button onClick={handleShowHiddenText}>Mostrar/ocultar</button>
        </div>
        {isHiddenText && <p>Texto oculto</p>}
        {error_min_value && <p>El contador no puede ser menor a 0</p>}
    </div>
  )
}

export default EstadosScreen