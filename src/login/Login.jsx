import './Login.css';
import { useState } from 'react'; // Para manejar los estados del correo y contraseña
import { Link, useNavigate } from 'react-router-dom'; // useNavigate para redirigir tras login
import { Nav } from 'react-bootstrap'; // Asegúrate de importar Nav desde react-bootstrap
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Firebase auth
import { db } from '../firebaseConfig'; // Importa tu configuración de Firebase

function Login() {
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(null); // Estado para los errores
  const navigate = useNavigate(); // Para redirigir tras el login

  // Maneja el login con Firebase
  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      // Llamar a Firebase para iniciar sesión con el email y contraseña
      await signInWithEmailAndPassword(auth, email, password);
      // Redirigir a la página de contenido si el login es exitoso
      navigate('/Contenido');
    } catch (error) {
      // Mostrar el error si algo falla
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-info-container'>
          <h1 className='login-title'>CRS</h1>
          <form className='login-inputs-container' onSubmit={handleLogin}>
            <input
              type="email"
              className='login-input'
              placeholder='Correo Electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Guardar email
              required // Asegurarse de que el campo no esté vacío
            />
            <input
              type="password"
              className='login-input'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Guardar contraseña
              required // Asegurarse de que el campo no esté vacío
            />
            <p>
              Olvidaste tu contraseña?<span className='login-span'> Click aquí</span>
            </p>
            {error && <p className='login-error'>{error}</p>} {/* Mostrar errores si los hay */}
            <button type="submit" className='login-btn'>Iniciar</button>
          </form>
        </div>
        <img
          className='login-image-container'
          src="https://img.freepik.com/fotos-premium/tecnologia-e-innovacion-imagenes-ia-relacionadas-innovaciones-nuevas-tecnologias_29654-2614.jpg"
          alt="Imagen tecnológica"
        />
      </div>
    </div>
  );
}

export default Login;
