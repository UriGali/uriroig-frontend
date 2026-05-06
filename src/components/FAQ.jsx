import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(null);

    const questions = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
    ];

    return (
        <section className="py-32 bg-black px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-cinzel font-bold text-white mb-12 italic text-center">{t('faq.heading')}</h2>
                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                            >
                                <span className="text-white font-medium">{item.q}</span>
                                {active === i ? <Minus className="w-4 h-4 text-gold-500" /> : <Plus className="w-4 h-4 text-gray-500" />}
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div
                                        initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                                        className="overflow-hidden bg-white/[0.01]"
                                    >
                                        <p className="p-6 text-gray-400 text-sm leading-relaxed border-t border-white/5">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
