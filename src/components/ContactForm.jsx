import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, MessageCircle, CheckCircle2, BarChart3 } from 'lucide-react';
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget, // Enviamos el nuevo campo de presupuesto
          message: formData.message
        }),
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
      console.error("Error:", error);
      setStatus('error');
      toast.error("Sin conexión. Verifica que el sistema esté operativo.");
    }
  };

  return (
    <section id="contact" className="py-10 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Hablemos</h2>
          <p className="text-gray-500 italic max-w-lg mx-auto">Inicie su transformación digital con soluciones de alto impacto y arquitectura escalable.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* COLUMNA IZQUIERDA: CONTACTO */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] backdrop-blur-3xl">
              <h3 className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.4em] mb-10 font-bold">Consultoría Directa</h3>
              <div className="space-y-8">
                <a href="mailto:urigali25@gmail.com" className="flex items-center gap-5 group">
                  <div className="p-3 bg-blue-500/5 rounded-2xl group-hover:bg-blue-500/20 transition-all border border-white/5">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-gray-600 uppercase font-mono tracking-widest">Email Corporativo</p>
                    <p className="text-sm text-gray-300 font-medium italic">urigali25@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                  <div className="p-3 bg-green-500/5 rounded-2xl group-hover:bg-green-500/20 transition-all border border-white/5">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-gray-600 uppercase font-mono tracking-widest">WhatsApp Business</p>
                    <p className="text-sm text-gray-300 font-medium italic">Atención Inmediata</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest ml-1 font-bold">Nombre o Empresa</label>
                  <input
                    type="text"
                    value={formData.name}
                    placeholder="Su nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest ml-1 font-bold">Email Business</label>
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="empresa@ejemplo.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest ml-1 font-bold">Tipo de Proyecto</label>
                  <select
                    value={formData.service}
                    className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Identidad Digital Corporativa">Identidad Digital Corporativa</option>
                    <option value="E-commerce de Alto Rendimiento">E-commerce de Alto Rendimiento</option>
                    <option value="Infraestructura IA & Automatización">Infraestructura IA & Automatización</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest ml-1 font-bold">Inversión Prevista</label>
                  <select
                    value={formData.budget}
                    className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="800€ - 1.500€">800€ - 1.500€</option>
                    <option value="1.500€ - 3.000€">1.500€ - 3.000€</option>
                    <option value="Proyectos Custom (+3.000€)">Proyectos Custom (+3.000€)</option>
                  </select>
                </div>
              </div>

              <div className="mb-8 space-y-2">
                <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest ml-1 font-bold">Breve descripción del reto</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  placeholder="Explique sus objetivos comerciales..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-4 mb-10 group cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 rounded-lg border-white/10 bg-white/5 text-blue-600 focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer"
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest select-none">
                  Acepto los términos y la <Link to="/aviso-legal" className="text-white underline hover:text-blue-400 transition-colors">política de privacidad</Link>
                </span>
              </div>

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-600/10 active:scale-[0.98]"
              >
                {status === 'enviando' ? 'Procesando Datos...' : 'Solicitar Propuesta Estratégica'}
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