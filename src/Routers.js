// routers.js
import { Routes, Route } from "react-router-dom";
import Navegador from "./Componentes/Nav";
import Inicio from "./Inicio/Descripcion";
import Servicios from "./Servicios/Servicios"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      {/* <Route path="Iniciar sesión" element={ <Login /> } />  */}
      <Route path="Inicio" element={ <Inicio /> } /> 
      <Route path="Productos-servicios" element={ <Servicios /> } /> 
    </Routes>
  );
}

export default AppRoutes;
