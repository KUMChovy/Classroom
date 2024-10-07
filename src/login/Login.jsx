import './Login.css';
import { Link } from 'react-router-dom'; // Importa Link
import { Nav } from 'react-bootstrap'; // Asegúrate de importar Nav desde react-bootstrap

function Login() {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-info-container'>
          <h1 className='login-title'>CRS</h1>
          <form className='login-inputs-container'>
            <input type="text" className='login-input' placeholder='Correo Electrónico' />
            <input type="password" className='login-input' placeholder='Contraseña' />
            <p>
              Olvidaste tu contraseña?<span className='login-span'> Click aquí</span>
            </p>
            <Nav.Link as={Link} to="/Contenido">
              <button type="button" className='login-btn'>Iniciar</button>
            </Nav.Link>
          </form>
        </div>
        <img className='login-image-container' src="https://img.freepik.com/fotos-premium/tecnologia-e-innovacion-imagenes-ia-relacionadas-innovaciones-nuevas-tecnologias_29654-2614.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;

