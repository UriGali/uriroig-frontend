import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import ProjectGallery from './components/ProjectGallery';
import Methodology from './components/BudgetCalculator';
import ContactForm from './components/ContactForm';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Legal from './components/Legal';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <>
    <Hero />
    <TechStack />
    <ServiceCards />
    <ProjectGallery />
    <Methodology />
    <FAQ />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* TOASTER ACTUALIZADO: Arriba a la derecha y más visible */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 6000,
          style: {
            background: '#0a0a0a',
            color: '#fff',
            border: '2px solid rgba(59, 130, 246, 0.4)',
            borderRadius: '20px',
            backdropFilter: 'blur(15px)',
            fontSize: '15px',
            fontFamily: 'monospace',
            padding: '20px',
            boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
            minWidth: '320px'
          },
        }}
      />

      <div className="min-h-screen bg-black text-white selection:bg-gold-500/30 font-sans">

        {/* NAVBAR */}
        <nav className="fixed w-full z-50 top-0 py-5 px-10 border-b border-white/10 bg-black/80 backdrop-blur-md flex justify-between items-center">
          <Link to="/" className="text-2xl font-cinzel font-bold tracking-tighter hover:opacity-80 transition-opacity">
            URI<span className="text-blue-500 italic">ROIG</span>
          </Link>

          <div className="flex items-center gap-8 text-[10px] font-cormorant uppercase tracking-[0.2em]">
            <Link to="/" className="hidden md:block text-gray-500 hover:text-white transition-colors">Inicio</Link>
            <Link
              to="/contacto"
              className="bg-gold-600 text-white px-8 py-3 rounded-full font-bold hover:bg-gold-500 transition-all shadow-lg shadow-gold-600/20 active:scale-95"
            >
              Pedir Presupuesto
            </Link>
          </div>
        </nav>

        {/* RUTAS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<div className="pt-32 pb-20"><ContactForm /></div>} />
          <Route path="/aviso-legal" element={<div className="pt-32 pb-20"><Legal /></div>} />
        </Routes>

        {/* FOOTER */}
        <footer className="py-20 bg-black border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-cormorant uppercase tracking-[0.2em] text-gray-600">
            <div className="text-left">
              <p className="text-xl font-bold tracking-tighter text-white">URI<span className="text-blue-500">ROIG</span></p>
              <p className="mt-2 tracking-widest text-[9px]">Soluciones digitales de alto rendimiento.</p>
            </div>

            <div className="flex gap-8">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
              <Link to="/aviso-legal" className="hover:text-white transition-colors">Legal</Link>
            </div>

            <p className="text-gray-800 text-[9px] tracking-[0.3em]">
              © {new Date().getFullYear()} MATADEPERA, BCN.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;