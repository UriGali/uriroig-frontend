import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const response = await fetch('https://uriroig-backend-production.up.railway.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Hablemos</h2>
          <p className="text-gray-500 italic max-w-lg mx-auto">Sistemas inteligentes para empresas que no se detienen.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* COLUMNA IZQUIERDA: AGENTE IA (SIN INFO PERSONAL) */}
          <div className="lg:col-span-1">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] backdrop-blur-3xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="space-y-12">
                {/* Indicador de Status */}
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute opacity-75" />
                    <div className="w-3 h-3 bg-blue-500 rounded-full relative" />
                  </div>
                  <div>
                    <h3 className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.5em] font-bold">Infraestructura</h3>
                    <p className="text-[11px] text-gray-500 italic mt-1 font-mono">NODE_ACTIVE: 24/7</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />

                {/* Único punto de contacto: El Bot */}
                <div className="space-y-6">
                  <button
                    type="button"
                    onClick={() => toast("Iniciando Consultoría Virtual...", {
                      icon: '🧠',
                      style: { background: '#0a0a0a', color: '#fff', border: '1px solid #3b82f6' }
                    })}
                    className="w-full group/bot relative"
                  >
                    <div className="absolute -inset-1 bg-blue-600/20 rounded-2xl blur opacity-0 group-hover/bot:opacity-100 transition duration-500"></div>
                    <div className="relative flex flex-col items-center gap-4 p-8 bg-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all">
                      <div className="p-4 bg-blue-500/10 rounded-full group-hover/bot:scale-110 transition-transform">
                        <Cpu className="w-8 h-8 text-blue-500" />
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-gray-600 uppercase font-mono tracking-widest mb-1">Agente Autónomo</p>
                        <p className="text-lg text-white font-bold italic">Consultar con IA</p>
                      </div>
                    </div>
                  </button>

                  <p className="text-[10px] text-center text-gray-600 font-mono leading-relaxed">
                    Sistemas optimizados. Sin fricción. Sin intervención manual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

              <div className="mb-8 space-y-2">
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

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-600/20 active:scale-[0.98] font-mono uppercase tracking-widest"
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