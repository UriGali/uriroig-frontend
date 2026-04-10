import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Cpu } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desarrollo de Ecosistemas Web de Élite',
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
          style: { border: '1px solid #3b82f6', padding: '20px', color: '#fff', background: '#0a0a0a' },
        });
        setFormData({ name: '', email: '', service: 'Desarrollo de Ecosistemas Web de Élite', message: '' });
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
          <p className="text-gray-500 italic max-w-lg mx-auto uppercase text-[10px] tracking-widest font-mono text-center">Sistemas inteligentes para empresas que no se detienen.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

          {/* COLUMNA IZQUIERDA: ASISTENTE IA */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-3xl relative overflow-hidden h-[650px] flex flex-col shadow-2xl border-blue-500/20">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/60 z-10 shrink-0 font-mono">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping absolute opacity-75" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full relative" />
                  </div>
                  <div>
                    <h3 className="text-blue-500 text-[10px] uppercase tracking-[0.3em] font-bold">Infraestructura IA</h3>
                    <p className="text-[9px] text-gray-500 italic uppercase">Node_Active: 24/7</p>
                  </div>
                </div>
                <Cpu className="w-4 h-4 text-gray-700" />
              </div>

              <div className="flex-grow w-full h-full overflow-hidden relative z-10">
                <typebot-standard style={{ width: "100%", height: "100%" }}></typebot-standard>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5 shrink-0">
                <p className="text-[8px] text-center text-gray-600 font-mono tracking-widest uppercase text-center">
                  Sistemas optimizados. Sin fricción manual.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE ÉLITE */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative h-full flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-10">

                {/* NOMBRE Y EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group space-y-2">
                    <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] ml-1 font-bold font-mono group-focus-within:text-blue-500 transition-colors">Nombre o Empresa</label>
                    <input
                      type="text"
                      value={formData.name}
                      placeholder="¿Con quién hablamos?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-mono text-sm placeholder:text-gray-800"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] ml-1 font-bold font-mono group-focus-within:text-blue-500 transition-colors">Email de Contacto</label>
                    <input
                      type="email"
                      value={formData.email}
                      placeholder="ejemplo@empresa.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-mono text-sm placeholder:text-gray-800"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* SERVICIOS DE ÉLITE */}
                <div className="group space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] ml-1 font-bold font-mono group-focus-within:text-blue-500 transition-colors">Área de Interés</label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-5 py-5 text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer font-mono text-sm"
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Desarrollo de Ecosistemas Web de Élite">Desarrollo de Ecosistemas Web de Élite</option>
                      <option value="Ingeniería de Automatizaciones con IA">Ingeniería de Automatizaciones con IA</option>
                      <option value="Estrategia de Growth & Ads">Estrategia de Growth & Ads</option>
                      <option value="Solución Integral (Full Stack Business)">Solución Integral (Full Stack Business)</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
                      <Cpu className="w-4 h-4 opacity-50" />
                    </div>
                  </div>
                </div>

                {/* DESCRIPCIÓN DEL DESAFÍO */}
                <div className="group space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] ml-1 font-bold font-mono group-focus-within:text-blue-500 transition-colors">¿Qué desafío tenemos por delante?</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    placeholder="Cuéntanos brevemente tu proyecto o el problema que necesitas resolver..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none font-mono text-sm placeholder:text-gray-800"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>

              {/* BOTÓN DE ACCIÓN */}
              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full mt-10 relative group/btn overflow-hidden rounded-2xl shadow-2xl shadow-blue-600/10 active:scale-[0.98] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover/btn:scale-110" />
                <div className="relative py-6 flex items-center justify-center gap-4 text-white font-bold font-mono uppercase tracking-[0.4em] text-[10px]">
                  {status === 'enviando' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sincronizando...
                    </div>
                  ) : (
                    <>
                      Iniciar Protocolo
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;