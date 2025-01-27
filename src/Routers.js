// routers.js
import { Routes, Route } from "react-router-dom";
import Navegador from "./Componentes/Nav";
import Inicio from "./Inicio/Descripcion";
import Login from "./login/Login"
import Contacto from "./Inicio/Contacto";
import Dashboard from "./Interior/Dashboard";
import Contenido from "./Interior/Contenido";
// import PhoneLogin from "./login/Verificacion";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="Inicio" element={ <Inicio /> } /> 
      <Route path="Contacto" element={ <Contacto /> } /> 
      <Route path="Iniciar_sesión" element={ <Login /> } /> 
      <Route path="Contenido" element={ <Contenido /> } /> 
      {/* <Route path="Iniciar_sesion_movil" element={ <PhoneLogin />} /> 
       */}
    </Routes>
  );
}

export default AppRoutes;
