import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Code, Rocket, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Methodology = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-gold-500" />,
      title: t('methodology.step1_title'),
      desc: t('methodology.step1_desc')
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      title: t('methodology.step2_title'),
      desc: t('methodology.step2_desc')
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: t('methodology.step3_title'),
      desc: t('methodology.step3_desc')
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: t('methodology.step4_title'),
      desc: t('methodology.step4_desc')
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-black px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-4 italic">{t('methodology.heading')}</h2>
          <p className="text-gray-500 italic max-w-xl mx-auto">{t('methodology.tagline')}</p>
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
          <h3 className="text-3xl font-cinzel font-bold text-white mb-4 italic">{t('methodology.cta_heading')}</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('methodology.cta_desc')}
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gold-400 transition-all hover:scale-105 shadow-xl shadow-gold-500/10"
          >
            {t('methodology.cta_button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
