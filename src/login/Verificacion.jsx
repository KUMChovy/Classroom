import './Login.css';
import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Asegúrate de que esto apunte a tu archivo de configuración

function PhoneLogin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const setupRecaptcha = () => {
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear(); // Limpiar cualquier reCAPTCHA existente
        }

        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            size: 'invisible', // Cambia a 'normal' si deseas mostrar el reCAPTCHA
            callback: (response) => {
                console.log('reCAPTCHA solved');
            },
            'expired-callback': () => {
                console.log('reCAPTCHA expired');
            }
        }, auth);
    };

    const handleSendCode = async (e) => {
        e.preventDefault();
        setupRecaptcha(); // Configura reCAPTCHA
        const appVerifier = window.recaptchaVerifier;

        try {
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setVerificationId(confirmationResult.verificationId);
            setMessage('Código enviado al teléfono.');
        } catch (error) {
            console.error('Error al enviar el código:', error);
            setError('No se pudo enviar el código. Verifica tu número.');
        }
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        const credential = PhoneAuthProvider.credential(verificationId, verificationCode);

        try {
            await auth.signInWithCredential(credential);
            setMessage('Inicio de sesión exitoso.');
        } catch (error) {
            console.error('Error al verificar el código:', error);
            setError('Código incorrecto. Inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <h2>Inicia sesión con tu teléfono</h2>
            <form onSubmit={handleSendCode}>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Número de teléfono"
                    required
                />
                <button type="submit">Enviar código</button>
            </form>
            
            <form onSubmit={handleVerifyCode}>
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Código de verificación"
                    required
                />
                <button type="submit">Verificar código</button>
            </form>

            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div id="recaptcha-container"></div>
        </div>
    );
}

export default PhoneLogin;
