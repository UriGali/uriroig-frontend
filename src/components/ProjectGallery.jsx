import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ACCENTS = {
  blue:   { border: '#3b82f6', glow: 'rgba(59,130,246,0.25)' },
  orange: { border: '#f97316', glow: 'rgba(249,115,22,0.25)' },
  gold:   { border: '#eab308', glow: 'rgba(234,179,8,0.2)'   },
  silver: { border: '#a8a29e', glow: 'rgba(168,162,158,0.2)' },
};

const ProjectCard = ({ project, index, colClass, heightClass }) => {
  const { t } = useTranslation();
  const accent = ACCENTS[project.accent];

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer block ${colClass} ${heightClass}`}
      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.07)' }}
    >
      {/* Full-bleed image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-700 ease-out"
      />

      {/* Gradient overlay – lifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 group-hover:from-black/85 group-hover:via-black/25 transition-all duration-500" />

      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accent.border}, transparent)` }}
      />

      {/* Index watermark */}
      <span
        className="absolute top-4 right-5 text-[11px] font-mono tracking-[0.3em] transition-opacity duration-300"
        style={{ color: accent.border, opacity: 0.5 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
        {/* Badge */}
        <span
          className="self-start inline-flex items-center px-3 py-[5px] rounded-full text-[9px] font-mono uppercase tracking-[0.3em] mb-4 border transition-colors duration-300"
          style={{
            color: accent.border,
            borderColor: `${accent.border}40`,
            backgroundColor: `${accent.border}12`,
          }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.025em] leading-tight mb-3">
          {project.title}
        </h3>

        {/* Description — hidden, slides in on hover */}
        <p className="text-[13px] text-white/55 leading-relaxed mb-5 max-w-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
          {project.desc}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-75 ease-out">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent.border }}>
            {t('projects.view_live')}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent.border }} />
        </div>
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent.border}40, 0 0 60px -10px ${accent.glow}` }}
      />
    </motion.a>
  );
};

const ProjectGallery = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Plastindustrial | Corporate Web',
      category: t('projects.plastindustrial_category'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
      desc: t('projects.plastindustrial_desc'),
      link: 'https://plastindustrial.com',
      accent: 'blue',
    },
    {
      title: 'Hockey Beach 2026',
      category: t('projects.bhcbevents_category'),
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
      desc: t('projects.bhcbevents_desc'),
      link: 'https://bhcbevents.com',
      accent: 'orange',
    },
    {
      title: 'Heretat Vallès | Real Estate VIP',
      category: t('projects.realestate_category'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      desc: t('projects.realestate_desc'),
      link: 'https://heretat-valles-dsb4qvbm6-urigalis-projects.vercel.app',
      accent: 'gold',
    },
    {
      title: 'Chronos | Luxury Store',
      category: t('projects.chronos_category'),
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      desc: t('projects.chronos_desc'),
      link: 'https://chronos-luxury-store.vercel.app',
      accent: 'silver',
    },
  ];

  return (
    <section className="min-h-screen bg-[#080809] px-5 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.55em] text-white/20 mb-5">
            — Selected Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.035em] leading-[1.05] bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent">
            {t('projects.heading')}
          </h1>
          <div className="flex items-center gap-4 mt-5">
            <div className="h-px w-10 bg-white/15 shrink-0" />
            <p className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/20">
              {t('projects.tagline')}
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Row 1: Plastindustrial wide + Hockey Beach */}
          <ProjectCard project={projects[0]} index={0} colClass="md:col-span-7" heightClass="h-[480px] md:h-[520px]" />
          <ProjectCard project={projects[1]} index={1} colClass="md:col-span-5" heightClass="h-[480px] md:h-[520px]" />

          {/* Row 2: Heretat narrow + Chronos wide */}
          <ProjectCard project={projects[2]} index={2} colClass="md:col-span-5" heightClass="h-[380px] md:h-[420px]" />
          <ProjectCard project={projects[3]} index={3} colClass="md:col-span-7" heightClass="h-[380px] md:h-[420px]" />

        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;
