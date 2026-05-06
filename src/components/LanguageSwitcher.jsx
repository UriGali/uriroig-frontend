import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const LANGS = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'ca', label: 'Català',  short: 'CA' },
  { code: 'en', label: 'English', short: 'EN' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGS.find((l) => l.code === i18n.language) || LANGS[0];

  const change = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all text-[10px] font-mono uppercase tracking-widest text-gray-300"
      >
        {current.short}
        <ChevronDown
          className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 z-50">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => change(lang.code)}
              className={`w-full flex items-center justify-between px-5 py-3 text-[10px] font-mono uppercase tracking-widest transition-colors
                ${lang.code === current.code
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-500 hover:text-white hover:bg-white/[0.05]'
                }`}
            >
              <span>{lang.label}</span>
              <span className="text-gray-700">{lang.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
