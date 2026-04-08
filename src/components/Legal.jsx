import React from 'react';

const Legal = () => {
    return (
        <section className="py-32 bg-black text-gray-400 px-6 max-w-4xl mx-auto leading-relaxed">
            <h1 className="text-3xl font-cinzel font-bold text-white mb-8">Aviso Legal y Política de Privacidad</h1>

            <div className="space-y-6 text-sm">
                <p>
                    En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa que el titular de esta web es:
                    <br /><br />
                    <strong className="text-white">Responsable:</strong> Aurum & Heritage<br />
                    <strong className="text-white">NIF/DNI:</strong> [TU DNI AQUÍ]<br />
                    <strong className="text-white">Contacto:</strong> hola@uriroig.dev<br />
                    <strong className="text-white">Ubicación:</strong> Matadepera, Barcelona.
                </p>

                <h2 className="text-xl font-bold text-white mt-10">Protección de Datos (RGPD)</h2>
                <p>
                    Los datos que proporcionas en el formulario de contacto se utilizan exclusivamente para responder a tu consulta y enviarte el presupuesto solicitado. No se cederán a terceros ni se usarán para publicidad sin tu consentimiento expreso.
                </p>

                <h2 className="text-xl font-bold text-white mt-10">Cookies</h2>
                <p>
                    Esta web utiliza cookies técnicas esenciales para su funcionamiento y fuentes externas (Google Fonts). No rastreamos tu comportamiento con fines comerciales.
                </p>
            </div>
        </section>
    );
};

export default Legal;