// routers.js
import { Routes, Route } from "react-router-dom";
import Navegador from "./Componentes/Nav";
import Inicio from "./Inicio/Descripcion";
import Contenido from "./Componentes/NavIni"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      {/* <Route path="Iniciar sesión" element={ <Login /> } />  */}
      <Route path="Inicio" element={ <Inicio /> } /> 
      <Route path="Contenido" element={ <Contenido /> } /> 
    </Routes>
  );
}

export default AppRoutes;
