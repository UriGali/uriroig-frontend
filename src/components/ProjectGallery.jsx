import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Web Corporativa para Negocio Local',
    category: 'Diseño & Desarrollo',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    desc: 'Creación de una web moderna y rápida para mejorar la presencia online de una empresa, optimizada para que los clientes contacten fácilmente.'
  },
  {
    title: 'Automatización de Procesos con n8n',
    category: 'Eficiencia Digital',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    desc: 'Conectamos tus herramientas favoritas (CRM, Slack, Google Sheets) mediante n8n para eliminar tareas repetitivas y centralizar toda tu información sin errores humanos.'
  },
  {
    title: 'Landing Page para Campaña de Ads',
    category: 'Marketing & Web',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=600&auto=format&fit=crop',
    desc: 'Diseño de una página de aterrizaje enfocada exclusivamente en captar clientes desde anuncios de Facebook e Instagram.'
  },
  {
    title: 'Optimización de Velocidad Web',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    desc: 'Mejora técnica de una web existente para que cargue al instante, evitando que los usuarios se vayan por esperar demasiado.'
  }
];

const ProjectGallery = () => {
  return (
    <section id="work" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2 italic">Proyectos Recientes</h2>
          <p className="text-gray-400">Soluciones prácticas para problemas reales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden group transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-tighter">{p.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;