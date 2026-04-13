import React from 'react';

const Legal = () => {
    return (
        <section className="py-32 bg-black text-gray-400 px-6 max-w-4xl mx-auto leading-relaxed font-mono">
            <h1 className="text-3xl font-bold text-white mb-8 italic uppercase tracking-widest">Información Legal</h1>

            <div className="space-y-8 text-xs uppercase tracking-wider">
                {/* AVISO LEGAL */}
                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">01. Titularidad del Sitio</h2>
                    <p>
                        En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa que el responsable de este sitio es:
                        <br /><br />
                        <span className="text-white">Identidad:</span> URI ROIG (Agencia de Ecosistemas Digitales)<br />
                        <span className="text-white">DNI/NIF:</span> [54574639D]<br />
                        <span className="text-white">Email:</span> uriroigg@gmail.com<br />
                        <span className="text-white">Ubicación:</span> Matadepera, Barcelona.
                    </p>
                </div>

                {/* PRIVACIDAD */}
                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">02. Política de Privacidad (RGPD)</h2>
                    <p className="mb-4">
                        Los datos recogidos mediante el formulario de contacto y el agente IA (Typebot) se tratan bajo la base legal del consentimiento del interesado.
                    </p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li><span className="text-white">Finalidad:</span> Gestión de consultas, elaboración de presupuestos de automatización y comunicación profesional.</li>
                        <li><span className="text-white">Almacenamiento:</span> Los datos se procesan a través de n8n y se almacenan en servidores seguros (Railway) y bases de datos privadas.</li>
                        <li><span className="text-white">Derechos:</span> Puedes solicitar el acceso, rectificación o eliminación de tus datos escribiendo a <span className="text-white">uriroigg@gmail.com</span>.</li>
                    </ul>
                </div>

                {/* COOKIES */}
                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">03. Política de Cookies</h2>
                    <p>
                        Este sitio web utiliza cookies técnicas necesarias para la ejecución del Agente IA y el correcto funcionamiento del formulario. Al navegar por esta web, aceptas el uso de estas herramientas de infraestructura técnica. No utilizamos cookies de rastreo publicitario de terceros.
                    </p>
                </div>

                {/* PROPIEDAD INTELECTUAL */}
                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">04. Propiedad Intelectual</h2>
                    <p>
                        Todo el contenido, diseño y algoritmos de automatización mostrados son propiedad de URI ROIG. Queda prohibida su reproducción total o parcial sin autorización expresa.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Legal;