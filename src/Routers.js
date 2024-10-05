// routers.js
import { Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Navegador from "./Componentes/Nav";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navegador /> } />
      {/* <Route path="Iniciar sesión" element={ <Login /> } /> */}
    </Routes>
  );
}

export default AppRoutes;
