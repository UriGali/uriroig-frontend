import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const techs = [
    { name: 'React', color: 'text-gold-400' },
    { name: 'Python', color: 'text-yellow-500' },
    { name: 'n8n', color: 'text-orange-600' },
    { name: 'FastAPI', color: 'text-emerald-500' },
    { name: 'Tailwind', color: 'text-cyan-400' },
    { name: 'PostgreSQL', color: 'text-indigo-400' },
    { name: 'Meta Ads', color: 'text-gold-600' }
];

const TechStack = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-black overflow-hidden border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-center text-[10px] font-cormorant text-gray-500 uppercase tracking-[0.3em] mb-12">
                    {t('techstack.heading')}
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-700">
                    {techs.map((tech, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className={`text-xl md:text-3xl font-cinzel font-bold cursor-default ${tech.color} filter grayscale hover:grayscale-0 transition-all`}
                        >
                            {tech.name}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
