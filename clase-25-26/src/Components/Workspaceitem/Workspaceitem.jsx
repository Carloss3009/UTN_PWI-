import './Workspaceitem.css'
import React from 'react'

const Workspaceitem = ({img, title, miembros, id}) => {
    return (
        <div className="workspaceitem">
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {miembros.length} miembros</span>
        </div>
    )
}

export default Workspaceitem