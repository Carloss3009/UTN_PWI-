import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Components/Workspaceitem/Workspaceitem.jsx'
import './Components/WorkspaceList/WorkspaceList.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    
<BrowserRouter>
    <App/>
</BrowserRouter>
)
