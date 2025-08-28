import Workspaceitem from '../Workspaceitem/Workspaceitem'
import './WorkspaceList.css'
import React from 'react'


const WorkspaceList = ({workspaces}) => {
    let workspaceListJSX = workspaces.map(( workspace ) => {
        return ( <Workspaceitem
        title={workspace.title}
        img={workspace.img}
        miembros={workspace.miembros}
        id={workspace.id}
        key={workspace.id}
        />
        )
    }
    )
    return (
        <div>
            <h1>Tus espacios de trabajo</h1>
            <div>
                {workspaceListJSX}
            </div>
        </div>
        
    )
}

export default WorkspaceList