import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Comprobamos si ya aceptó las cookies antes
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm z-[100] animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl">
                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-4">
                    Infraestructura técnica: Utilizamos cookies para el funcionamiento del Agente IA y seguridad del sistema.
                </p>
                <button
                    onClick={acceptCookies}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold py-3 rounded-xl transition-all uppercase tracking-[0.2em]"
                >
                    Aceptar Protocolo
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;