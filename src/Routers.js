// routers.js
import { Routes, Route } from "react-router-dom";
import Navegador from "./Componentes/Nav";
import Inicio from "./Cuerpo/Inicio/Descripcion";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navegador /> } />
      {/* <Route path="Iniciar sesión" element={ <Login /> } />  */}
      <Route path="Inicio" element={ <Inicio /> } /> 
    </Routes>
  );
}

export default AppRoutes;
