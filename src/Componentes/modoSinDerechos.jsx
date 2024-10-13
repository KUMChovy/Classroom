import React, { useState } from "react";
import Navegador from "./Nav"; // El primer componente de navegación
import Navegador2 from "./NavIni"; // El segundo componente de navegación

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Pasamos darkMode y toggleDarkMode a ambos componentes */}
      <Navegador toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Navegador2 toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
