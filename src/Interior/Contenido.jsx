import React, { useState,  useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavIni from '../Componentes/NavIni'
import Dashboard from './Dashboard';
import Footer from '../Componentes/Footer';

function Contenido() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
        <div>
          <section>
            <NavIni toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          </section>
        

        <section>
          <Dashboard/>
        </section>

        <section>
          <Footer/>
        </section>
        </div>
  );
}

export default Contenido;
