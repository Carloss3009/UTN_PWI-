import './global.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import WorkSpaceScreen from './Screens/WorkSpaceScreen'
import EstadosScreen from './Screens/EstadosScreen'
import WhatsappScreen from './Screens/WhatsappScreen'



//Lista de rutas de mi aplicacion: "Routes"
//Ruta de mi aplicacion: "Route"

function App() {
  return (
      <Routes>
        <Route path = "/" element={<HomeScreen/>}/>
        <Route path = "/home" element={<HomeScreen/>}/>
        <Route path = "/prueba" element={<h1>Hola soy la prueba</h1>}/>
        <Route path = "/workspace/:workspace_id" element={<WorkSpaceScreen/>}/>
        <Route path = "/estados" element={<EstadosScreen/>}/>
        <Route path = "/wspp" element={<WhatsappScreen/>}/>
      </Routes>
    
  )
}

export default App
