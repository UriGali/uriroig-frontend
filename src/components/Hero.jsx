import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 relative overflow-hidden">
      {/* Círculo de luz de fondo azul para Uri Roig */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h2 className="text-blue-500 font-mono tracking-[0.3em] uppercase text-[10px] mb-4 font-bold">
          Desarrollo Web & Automatización Inteligente
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          URI <span className="text-blue-500 italic font-light">ROIG</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-sans">
          Transformamos ideas en experiencias digitales <span className="text-white italic font-medium">impecables</span>.
          Especialista en arquitecturas modernas y optimización de procesos con IA.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/contacto"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            Pedir Presupuesto
          </Link>
          <a
            href="#work"
            className="border border-white/10 px-10 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors"
          >
            Ver Proyectos
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;