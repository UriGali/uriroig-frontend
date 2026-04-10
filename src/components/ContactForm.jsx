import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Cpu, Globe, Zap, Rocket, Layers } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // IMPORTANTE: Este nombre debe coincidir EXACTO con lo que espera tu n8n
    service: 'Desarrollo de Ecosistemas Web de Élite',
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

  // Lista de servicios con el ID largo para n8n y el título corto para el diseño
  const services = [
    { id: 'Desarrollo de Ecosistemas Web de Élite', title: 'Web de Élite', desc: 'Impacto digital pro', icon: <Globe className="w-5 h-5" /> },
    { id: 'Ingeniería de Automatizaciones con IA', title: 'IA & Automations', desc: 'Optimiza y ahorra', icon: <Zap className="w-5 h-5" /> },
    { id: 'Estrategia de Growth & Ads', title: 'Growth & Ads', desc: 'Escala tus ventas', icon: <Rocket className="w-5 h-5" /> },
    { id: 'Solución Integral (Full Stack Business)', title: 'Full Business', desc: 'Estrategia 360°', icon: <Layers className="w-5 h-5" /> }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      // Usamos tu URL de producción que ya funcionaba
      const response = await fetch('https://uriroig-backend-production.up.railway.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        toast.success(`¡Recibido, ${formData.name}! Sincronizando con n8n...`, {
          icon: <CheckCircle2 className="text-blue-500 w-6 h-6" />,
          style: { border: '1px solid #3b82f6', padding: '20px', color: '#fff', background: '#0a0a0a' },
        });
        setFormData({ name: '', email: '', service: 'Desarrollo de Ecosistemas Web de Élite', message: '' });
      } else {
        throw new Error('Fallo en el servidor');
      }
    } catch (error) {
      setStatus('error');
      toast.error("Error de conexión. Verifica el servidor.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-black px-6 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* COLUMNA IZQUIERDA: AGENTE IA */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] h-[650px] flex flex-col overflow-hidden border-blue-500/20 shadow-2xl">
              <div className="p-6 border-b border-white/5 flex justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  <span className="text-blue-500 text-[10px] uppercase font-bold tracking-widest">Consultoría IA</span>
                </div>
                <Cpu className="w-4 h-4 text-gray-700" />
              </div>
              <div className="flex-grow w-full overflow-hidden">
                <typebot-standard style={{ width: "100%", height: "100%" }}></typebot-standard>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    value={formData.name}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500/50 outline-none text-sm"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="Tu email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500/50 outline-none text-sm"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* CARDS SELECCIÓN */}
                <div className="space-y-3">
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold ml-1">Área de interés</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => setFormData({ ...formData, service: s.id })}
                        className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-4 ${formData.service === s.id
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                          }`}
                      >
                        <div className={formData.service === s.id ? 'text-blue-500' : 'text-gray-600'}>{s.icon}</div>
                        <div>
                          <p className="text-xs font-bold text-white uppercase">{s.title}</p>
                          <p className="text-[9px] text-gray-500 italic">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <textarea
                  rows="3"
                  value={formData.message}
                  placeholder="Tu mensaje..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500/50 outline-none text-sm resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3"
              >
                {status === 'enviando' ? 'Sincronizando...' : 'Enviar Solicitud'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;