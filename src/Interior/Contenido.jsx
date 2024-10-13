import React, { useState,  useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavIni from '../Componentes/NavIni'
import Dashboard from './Dashboard';
import Footer from '../Componentes/Footer';

function Contenido() {
  return (
        <div>
          <section>
            <NavIni/>
          </section>
        

        <div>
          <Dashboard/>
        </div>

        <section>
          <Footer/>
        </section>
        </div>
  );
}

export default Contenido;
