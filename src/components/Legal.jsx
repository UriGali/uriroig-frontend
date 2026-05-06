import React from 'react';
import { useTranslation } from 'react-i18next';

const Legal = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 bg-black text-gray-400 px-6 max-w-4xl mx-auto leading-relaxed font-mono">
            <h1 className="text-3xl font-bold text-white mb-8 italic uppercase tracking-widest">{t('legal.heading')}</h1>

            <div className="space-y-8 text-xs uppercase tracking-wider">
                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">{t('legal.section1_title')}</h2>
                    <p>
                        {t('legal.section1_body')}
                        <br /><br />
                        <span className="text-white">{t('legal.identity_label')}:</span> {t('legal.identity_value')}<br />
                        <span className="text-white">{t('legal.dni_label')}:</span> [54574639D]<br />
                        <span className="text-white">Email:</span> uriroigg@gmail.com<br />
                        <span className="text-white">{t('legal.location_label')}:</span> {t('legal.location_value')}
                    </p>
                </div>

                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">{t('legal.section2_title')}</h2>
                    <p className="mb-4">
                        {t('legal.section2_intro')}
                    </p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li><span className="text-white">{t('legal.purpose_label')}:</span> {t('legal.purpose_value')}</li>
                        <li><span className="text-white">{t('legal.storage_label')}:</span> {t('legal.storage_value')}</li>
                        <li><span className="text-white">{t('legal.rights_label')}:</span> {t('legal.rights_value')}</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">{t('legal.section3_title')}</h2>
                    <p>{t('legal.section3_body')}</p>
                </div>

                <div>
                    <h2 className="text-blue-500 font-bold mb-4 border-b border-white/10 pb-2">{t('legal.section4_title')}</h2>
                    <p>{t('legal.section4_body')}</p>
                </div>
            </div>
        </section>
    );
};

export default Legal;
