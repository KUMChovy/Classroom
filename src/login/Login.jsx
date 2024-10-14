import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebaseConfig';
import PhoneLogin from './Verificacion';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPhoneLogin, setShowPhoneLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/Contenido');
        } catch (error) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
            setShowPhoneLogin(true);
        }
    };

    const handleFingerprintLogin = async () => {
        try {
            const publicKey = {
                challenge: new Uint8Array(32),
                allowCredentials: [{ id: new Uint8Array(32), type: 'public-key' }],
                userVerification: 'required',
            };

            const credential = await navigator.credentials.get({ publicKey });
            // Aquí debes manejar la verificación del credential
            // En este punto, puedes validar el credential con tu backend o Firebase.
            navigate('/Contenido');
        } catch (error) {
            console.error('Error en la autenticación biométrica', error);
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
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className='login-input'
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <p>
                            Olvidaste tu contraseña?<span className='login-span'> Click aquí</span>
                        </p>
                        {error && <p className='login-error'>{error}</p>}
                        <button type="submit" className='login-btn'>Iniciar</button>
                    </form>
                    <button onClick={handleFingerprintLogin} className='login-btn'>Iniciar con Huella Digital</button>
                </div>
                <img
                    className='login-image-container'
                    src="https://img.freepik.com/fotos-premium/tecnologia-e-innovacion-imagenes-ia-relacionadas-innovaciones-nuevas-tecnologias_29654-2614.jpg"
                    alt="Imagen tecnológica"
                />
            </div>
            {showPhoneLogin && <PhoneLogin />}
        </div>
    );
}

export default Login;
