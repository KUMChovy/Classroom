// Verificacion.jsx
import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const PhoneLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const navigate = useNavigate(); // Inicializa navigate aquí

    const setupRecaptcha = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    };

    const handleSendCode = async (e) => {
        e.preventDefault();
        setupRecaptcha();
        const auth = getAuth();
        const appVerifier = window.recaptchaVerifier;

        try {
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setConfirmationResult(confirmationResult);
        } catch (error) {
            console.error('Error al enviar el código', error);
        }
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        try {
            await confirmationResult.confirm(verificationCode);
            navigate('/Contenido'); // Redirige a la página de contenido tras la verificación exitosa
        } catch (error) {
            console.error('Error al verificar el código', error);
        }
    };

    return (
        <div>
            <h2>Autenticación por Teléfono</h2>
            <form onSubmit={handleSendCode}>
                <input
                    type="tel"
                    placeholder="Número de teléfono"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type="submit">Enviar Código</button>
            </form>
            {confirmationResult && (
                <form onSubmit={handleVerifyCode}>
                    <input
                        type="text"
                        placeholder="Código de verificación"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                    <button type="submit">Verificar Código</button>
                </form>
            )}
            <div id="recaptcha-container"></div>
        </div>
    );
};

export default PhoneLogin;
