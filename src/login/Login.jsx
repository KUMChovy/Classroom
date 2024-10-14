import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebaseConfig';
import PhoneLogin from './Verificacion';
import { ref, set } from 'firebase/database';

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

    const handleFingerprintRegister = async () => {
        try {
            const publicKey = {
                challenge: new Uint8Array(32), // Este desafío debe ser único y generado por tu servidor.
                rp: { name: "Tu Nombre de Aplicación" },
                user: {
                    id: new Uint8Array(32), // ID único para el usuario
                    name: email, // Puede ser el correo del usuario
                    displayName: "Nombre Visible",
                },
                pubKeyCredParams: [{ type: "public-key", alg: -7 }], // Algoritmo ES256
                timeout: 60000,
                attestation: "direct",
            };

            const credential = await navigator.credentials.create({ publicKey });

            // Almacena la clave pública en la base de datos de Firebase
            const userId = email; // Puedes usar un ID único para el usuario
            await set(ref(db, 'users/' + userId), {
                publicKey: credential.response.rawId,
                email: email,
            });

            console.log('Credential almacenada:', credential);
        } catch (error) {
            console.error('Error en el registro biométrico', error);
        }
    };

    const handleFingerprintLogin = async () => {
        try {
            const publicKey = {
                challenge: new Uint8Array(32), // Este desafío debe ser único y generado por tu servidor.
                allowCredentials: [{ id: new Uint8Array(32), type: 'public-key' }], // ID de las credenciales registradas
                timeout: 60000,
                userVerification: "preferred",
            };

            const credential = await navigator.credentials.get({ publicKey });

            // Aquí debes verificar la firma del credential con tu backend o Firebase.
            console.log('Credential para login:', credential);
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
                    <button onClick={handleFingerprintRegister} className='login-btn'>Registrar Huella Digital</button>
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
