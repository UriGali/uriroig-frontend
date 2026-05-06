import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BrainCircuit, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceCards = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.web_title'),
      desc: t('services.web_desc'),
      icon: <Globe className="w-12 h-12 text-gold-500" />
    },
    {
      title: t('services.ai_title'),
      desc: t('services.ai_desc'),
      icon: <BrainCircuit className="w-12 h-12 text-emerald-500" />
    },
    {
      title: t('services.growth_title'),
      desc: t('services.growth_desc'),
      icon: <Megaphone className="w-12 h-12 text-orange-500" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-cinzel md:text-5xl font-cinzel font-bold text-white mb-4 italic">{t('services.heading')}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">{t('services.tagline')}</p>
        <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15, borderColor: 'rgba(59, 130, 246, 0.4)' }}
            className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-all" />

            <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              {s.icon}
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-white mb-5">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed text-base">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
