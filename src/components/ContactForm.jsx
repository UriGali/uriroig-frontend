import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Cpu, Globe, Zap, Rocket, Layers } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web de Élite',
    message: ''
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js';
      Typebot.initStandard({ typebot: "my-typebot-3ad2517" });`;
    document.body.append(typebotInitScript);
  }, []);

  const services = [
    { id: 'Web de Élite', title: 'Web de Élite', desc: 'Presencia digital de alto impacto', icon: <Globe className="w-5 h-5" /> },
    { id: 'IA & Automations', title: 'IA & Automations', desc: 'Optimiza procesos y ahorra tiempo', icon: <Zap className="w-5 h-5" /> },
    { id: 'Growth & Ads', title: 'Growth & Ads', desc: 'Escala tus ventas y visibilidad', icon: <Rocket className="w-5 h-5" /> },
    { id: 'Full Business', title: 'Full Business', desc: 'Estrategia integral 360°', icon: <Layers className="w-5 h-5" /> }
  ];

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
        toast.success(`¡Sistemas listos, ${formData.name}! Recibirás noticias pronto.`, {
          icon: <CheckCircle2 className="text-blue-500 w-6 h-6" />,
          style: { border: '1px solid #3b82f6', padding: '20px', color: '#fff', background: '#0a0a0a' },
        });
        setFormData({ name: '', email: '', service: 'Web de Élite', message: '' });
      } else {
        setStatus('error');
        toast.error("Error en la conexión.");
      }
    } catch (error) {
      setStatus('error');
      toast.error("Error de red.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-black px-6 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Hablemos</h2>
          <p className="text-gray-500 italic max-w-lg mx-auto uppercase text-[10px] tracking-widest text-center">Impulsando la próxima generación de negocios digitales.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

          {/* COLUMNA IZQUIERDA: AGENTE IA */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-3xl overflow-hidden h-[650px] flex flex-col shadow-2xl border-blue-500/20">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/60 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  <h3 className="text-blue-500 text-[10px] uppercase tracking-[0.3em] font-bold">Consultoría IA</h3>
                </div>
                <Cpu className="w-4 h-4 text-gray-700" />
              </div>
              <div className="flex-grow w-full overflow-hidden relative z-10">
                <typebot-standard style={{ width: "100%", height: "100%" }}></typebot-standard>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO CON CARDS */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative h-full flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-8">

                {/* NOMBRE Y EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    value={formData.name}
                    placeholder="Tu nombre / Empresa"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500/50 outline-none text-sm transition-all"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="Tu email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500/50 outline-none text-sm transition-all"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* SELECCIÓN DE SERVICIO MEDIANTE CARDS */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold">¿En qué área nos enfocamos?</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => setFormData({ ...formData, service: s.id })}
                        className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-4 ${formData.service === s.id
                            ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                            : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                          }`}
                      >
                        <div className={`${formData.service === s.id ? 'text-blue-500' : 'text-gray-600'}`}>
                          {s.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white uppercase tracking-tight">{s.title}</p>
                          <p className="text-[10px] text-gray-500 italic">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DESAFÍO */}
                <textarea
                  rows="3"
                  value={formData.message}
                  placeholder="Cuéntanos brevemente tu visión..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500/50 outline-none text-sm transition-all resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-[11px]"
              >
                {status === 'enviando' ? 'Sincronizando...' : 'Enviar Solicitud'}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;