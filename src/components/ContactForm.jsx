import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Cpu } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Identidad Digital Corporativa',
    budget: '1.500€ - 3.000€',
    message: ''
  });

  const [status, setStatus] = useState('');

  // INICIALIZACIÓN DE TYPEBOT
  useEffect(() => {
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js';
      Typebot.initStandard({ 
        typebot: "my-typebot-3ad2517"
      });`;
    document.body.append(typebotInitScript);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const response = await fetch('https://uriroig-backend-production.up.railway.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        toast.success(`¡Propuesta recibida, ${formData.name}! Analizando viabilidad técnica.`, {
          icon: <CheckCircle2 className="text-blue-500 w-6 h-6" />,
          style: {
            border: '1px solid #3b82f6',
            padding: '20px',
            color: '#fff',
            background: '#0a0a0a',
          },
        });
        setFormData({ name: '', email: '', service: 'Identidad Digital Corporativa', budget: '1.500€ - 3.000€', message: '' });
      } else {
        setStatus('error');
        toast.error("Error en el servidor. Inténtalo de nuevo.");
      }
    } catch (error) {
      setStatus('error');
      toast.error("Sin conexión. Verifica que el sistema esté operativo.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Hablemos</h2>
          <p className="text-gray-500 italic max-w-lg mx-auto">Sistemas inteligentes para empresas que no se detienen.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* COLUMNA IZQUIERDA: AGENTE IA (2 COLUMNAS) */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.02] border border-white/5 p-1 rounded-[2.5rem] backdrop-blur-3xl relative overflow-hidden h-[650px] flex flex-col shadow-2xl">
              {/* Efecto de luz de fondo que tenías */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header del Agente */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40 z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping absolute opacity-75" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full relative" />
                  </div>
                  <div>
                    <h3 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Infraestructura IA</h3>
                    <p className="text-[9px] text-gray-500 italic font-mono uppercase">Node_Active: 24/7</p>
                  </div>
                </div>
                <Cpu className="w-4 h-4 text-gray-700" />
              </div>

              {/* Contenedor del Bot */}
              <div className="flex-grow relative z-10">
                <typebot-standard style={{ width: "100%", height: "100%" }}></typebot-standard>
              </div>

              {/* Footer decorativo */}
              <div className="p-4 bg-black/20 border-t border-white/5">
                <p className="text-[8px] text-center text-gray-600 font-mono tracking-widest uppercase">
                  Sistemas optimizados. Sin fricción manual.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO (3 COLUMNAS) */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold font-mono">Entidad / Nombre</label>
                    <input
                      type="text"
                      value={formData.name}
                      placeholder="Su nombre"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold font-mono">Canal de Contacto</label>
                    <input
                      type="email"
                      value={formData.email}
                      placeholder="empresa@ejemplo.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold font-mono">Módulo Requerido</label>
                    <select
                      value={formData.service}
                      className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer font-mono text-sm"
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Identidad Digital Corporativa">Identidad Digital Corporativa</option>
                      <option value="E-commerce de Alto Rendimiento">E-commerce de Alto Rendimiento</option>
                      <option value="Infraestructura IA & Automatización">Infraestructura IA & Automatización</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold font-mono">Inversión Estimada</label>
                    <select
                      value={formData.budget}
                      className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer font-mono text-sm"
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="800€ - 1.500€">800€ - 1.500€</option>
                      <option value="1.500€ - 3.000€">1.500€ - 3.000€</option>
                      <option value="Proyectos Custom (+3.000€)">Proyectos Custom (+3.000€)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold font-mono">Descripción del Desafío</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    placeholder="Defina el problema que desea resolver..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none font-mono text-sm"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-600/20 active:scale-[0.98] font-mono uppercase tracking-widest text-xs"
              >
                {status === 'enviando' ? 'EJECUTANDO PROTOCOLO...' : 'ENVIAR SOLICITUD'}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;