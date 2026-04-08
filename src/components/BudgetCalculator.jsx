import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8 text-gold-500" />,
    title: '1. Consultoría',
    desc: 'Hablamos sobre tus objetivos, el público ideal y las funcionalidades necesarias para tu negocio.'
  },
  {
    icon: <Code className="w-8 h-8 text-emerald-500" />,
    title: '2. Desarrollo',
    desc: 'Construyo la solución utilizando el stack más moderno (React, FastAPI, n8n) enfocado en la velocidad.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
    title: '3. Revisión',
    desc: 'Testeamos cada detalle juntos para asegurar que el resultado supera tus expectativas iniciales.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    title: '4. Entrega',
    desc: 'Desplegamos el proyecto y te acompaño en el lanzamiento para que todo funcione a la perfección.'
  }
];

const Methodology = () => {
  return (
    <section id="pricing" className="py-32 bg-black px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-4 italic">Mi Metodología</h2>
          <p className="text-gray-500 italic max-w-xl mx-auto">Un proceso transparente diseñado para obtener resultados excepcionales en cada proyecto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden group hover:border-gold-500/30 transition-all"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

              <div className="absolute -bottom-2 -right-2 text-6xl font-cinzel font-bold text-white/[0.02] italic select-none pointer-events-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-gold-600/10 via-transparent to-emerald-600/10 border border-white/10 text-center">
          <h3 className="text-3xl font-cinzel font-bold text-white mb-4 italic">¿Hablamos de tu proyecto?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada solución es única. Analicemos tus necesidades para ofrecerte una propuesta personalizada y sin compromiso.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gold-400 transition-all hover:scale-105 shadow-xl shadow-gold-500/10"
          >
            Solicitar propuesta personalizada
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
