// routers.js
import { Routes, Route } from "react-router-dom";
import Navegador from "./Componentes/Nav";
import Inicio from "./Inicio/Descripcion";
import Contenido from "./Interior/Contenido"
import Login from "./login/Login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="Inicio" element={ <Inicio /> } /> 
      <Route path="Iniciar_sesión" element={ <Login /> } /> 
      <Route path="Contenido" element={ <Contenido /> } /> 
    </Routes>
  );
}

export default AppRoutes;
