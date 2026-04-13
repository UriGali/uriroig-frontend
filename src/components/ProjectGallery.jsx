import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Heretat Vallès | Real Estate VIP',
    category: 'Identidad Digital Corporativa',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    desc: 'Plataforma inmobiliaria de lujo con estética minimalista y enfoque en conversión de leads de alto valor.',
    link: 'https://heretat-valles-dsb4qvbm6-urigalis-projects.vercel.app'
  },
  {
    title: 'Chronos | Luxury Store',
    category: 'E-commerce de Alto Rendimiento',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    desc: 'Tienda online boutique para productos premium, optimizada para velocidad de carga y experiencia de usuario fluida.',
    link: 'https://chronos-luxury-store.vercel.app'
  },
  {
    title: 'MediPulse AI | Health SaaS',
    category: 'Infraestructura IA & n8n',
    image: '/mediplus.png',
    desc: 'Sistema inteligente de gestión médica con automatización de procesos mediante IA y arquitecturas conectadas.',
    link: 'https://medipulse-ai-saas.vercel.app'
  },
  {
    title: 'Party Animal | E-commerce Brand',
    category: 'Brand Experience & Web',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    desc: 'Lanzamiento de marca con enfoque visual disruptivo y sistemas de venta directa optimizados.',
    link: 'https://party-animal-store.vercel.app'
  }
];

const ProjectGallery = () => {
  return (
    <section id="work" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-2 italic">Portfolio de Soluciones</h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Sistemas reales desplegados en producción.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] overflow-hidden group transition-all hover:border-blue-500/30 shadow-2xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">{p.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4 italic">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{p.desc}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-blue-400 transition-colors group/link"
                >
                  Ver Proyecto Live
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;