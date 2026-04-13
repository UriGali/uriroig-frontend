import React from 'react';

const Cookies = () => {
    return (
        <section className="py-32 bg-black text-gray-400 px-6 max-w-4xl mx-auto leading-relaxed font-mono text-xs uppercase tracking-wider">
            <h1 className="text-3xl font-bold text-white mb-8 italic tracking-widest">Política de Cookies</h1>

            <div className="space-y-6">
                <p>
                    Este sitio utiliza cookies técnicas y funcionales. Al ser una plataforma de **infraestructura digital avanzada**, estas herramientas son necesarias para el despliegue del agente IA y el procesamiento de datos.
                </p>

                <div className="border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-blue-500">
                            <tr>
                                <th className="p-4 border-b border-white/10">Proveedor</th>
                                <th className="p-4 border-b border-white/10">Finalidad</th>
                                <th className="p-4 border-b border-white/10">Duración</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            <tr>
                                <td className="p-4 text-white">Typebot</td>
                                <td className="p-4 text-gray-500 italic text-[10px]">Persistencia del chat IA</td>
                                <td className="p-4">Sesión</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-white">Vercel</td>
                                <td className="p-4 text-gray-500 italic text-[10px]">Optimización de carga y seguridad</td>
                                <td className="p-4">Permanente</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-white">Uri Roig System</td>
                                <td className="p-4 text-gray-500 italic text-[10px]">Seguridad del formulario (CSRF)</td>
                                <td className="p-4">Sesión</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-white font-bold mt-10">Gestión de Cookies</h2>
                <p>
                    Puedes bloquear o eliminar las cookies a través de la configuración de tu navegador. Sin embargo, ten en cuenta que desactivar las cookies de **Typebot** impedirá que el asistente IA pueda asistirte correctamente durante la navegación.
                </p>
            </div>
        </section>
    );
};

export default Cookies;