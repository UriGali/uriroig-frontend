import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BrainCircuit, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Creación de Webs de Élite',
    desc: 'Diseño minimalista y funcional. Landing pages y plataformas escalables construidas con React y FastAPI para una velocidad máxima y conversión total.',
    icon: <Globe className="w-12 h-12 text-blue-500" />
  },
  {
    title: 'Automatización con IA',
    desc: 'Optimizamos tu tiempo integrando inteligencia artificial: desde agentes de atención al cliente 24/7 hasta procesos que se ejecutan solos.',
    icon: <BrainCircuit className="w-12 h-12 text-emerald-500" />
  },
  {
    title: 'Estrategia de Growth & Ads',
    desc: 'No solo creamos tu web, la hacemos rentable. Campañas en Facebook Ads e Instagram diseñadas para captar leads y escalar tu facturación.',
    icon: <Megaphone className="w-12 h-12 text-orange-500" />
  }
];

const ServiceCards = () => {
  return (
    <section id="services" className="py-32 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Servicios High-End</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">Soluciones tecnológicas diseñadas para negocios que buscan el siguiente nivel.</p>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15, borderColor: 'rgba(59, 130, 246, 0.4)' }}
            className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />

            <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-5">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed text-base">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;