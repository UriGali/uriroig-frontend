import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 relative overflow-hidden">
      {/* Círculo de luz de fondo para dar profundidad */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h2 className="text-blue-500 font-mono tracking-widest uppercase text-[10px] mb-4 italic">
          Desarrollo Web & Automatización n8n
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          Uri <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-light italic">Roig</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          Transformo ideas en experiencias digitales <span className="text-white italic font-medium">impecables</span>.
          Especializado en arquitecturas modernas y optimización de negocios.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/contacto"
            className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition-all hover:scale-105 shadow-xl shadow-white/5"
          >
            Pedir Presupuesto
          </Link>
          <a
            href="#services"
            className="border border-white/20 px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
