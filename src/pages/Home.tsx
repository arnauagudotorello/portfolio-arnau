import { memo, useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, User } from 'lucide-react';
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { useLanguage } from '../context/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';

import type { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

type Technology = {
  name: string;
  Icon: IconType;
  color: string;
};

type OrbitIconProps = {
  tech: Technology;
  angle: number;
  radius: number;
  rotation: MotionValue<number>;
  occluderRadius: number;
  badgeSize: number;
  className: string;
  iconSize: number;
};

function OrbitIcon({
  tech,
  angle,
  radius,
  rotation,
  occluderRadius,
  badgeSize,
  className,
  iconSize
}: OrbitIconProps) {
  const opacity = useTransform(rotation, (currentRotation) => {
    const phase = ((currentRotation + angle) * Math.PI) / 180;
    const x = radius * Math.sin(phase);
    const z = radius * Math.cos(phase);
    const isBehind = z < 0;
    const fullyInsideOccluder = Math.abs(x) <= occluderRadius - badgeSize / 2;

    return isBehind && fullyInsideOccluder ? 0 : 1;
  });

  return (
    <motion.div
      aria-label={tech.name}
      className={className}
      style={{
        transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateY(${-angle}deg)`,
        opacity
      }}
    >
      <tech.Icon size={iconSize} style={{ color: tech.color }} aria-hidden="true" />
    </motion.div>
  );
}

const technologies: Technology[] = [
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' }
];

const outerTechnologies = technologies.slice(0, 8);
const innerTechnologies = technologies.slice(8);

const TechnologiesCarousel = memo(function TechnologiesCarousel() {
  const reduceMotion = useReducedMotion();
  const outerRotation = useMotionValue(0);
  const innerRotation = useMotionValue(0);
  const scrollBoostRef = useRef(0);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const delta = window.scrollY - lastScrollYRef.current;
      lastScrollYRef.current = window.scrollY;

      const nextBoost = delta * 0.05;
      scrollBoostRef.current = Math.max(-10, Math.min(10, nextBoost));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useAnimationFrame((_, deltaMs) => {
    if (reduceMotion) {
      return;
    }

    scrollBoostRef.current *= 0.92;

    const boost = scrollBoostRef.current;
    const outerSpeed = 16 + boost * 2;
    const innerSpeed = 24 + boost * 2.5;

    const nextOuter = (outerRotation.get() + (outerSpeed * deltaMs) / 1000) % 360;
    const nextInner = (innerRotation.get() - (innerSpeed * deltaMs) / 1000) % 360;

    outerRotation.set(nextOuter);
    innerRotation.set(nextInner);
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div
        className="relative mx-auto flex h-[300px] w-full max-w-4xl items-center justify-center overflow-hidden md:h-[360px] [perspective:1200px]"
      >
        <div className="absolute z-10 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute z-10 h-44 w-44 rounded-full border border-brand-500/15 bg-[#111111] md:h-52 md:w-52" />
        <div className="absolute z-0 h-64 w-64 rounded-full border border-white/8 md:h-80 md:w-80" />

        <motion.div
          style={{ rotateY: outerRotation }}
          className="absolute z-20 h-64 w-64 md:h-80 md:w-80 [transform-style:preserve-3d]"
        >
          {outerTechnologies.map((tech, index) => {
            const angle = (360 / outerTechnologies.length) * index;

            return (
              <OrbitIcon
                key={`outer-${tech.name}`}
                tech={tech}
                angle={angle}
                radius={150}
                rotation={outerRotation}
                occluderRadius={88}
                badgeSize={48}
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-[#101010]/90 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur md:h-14 md:w-14 md:rounded-2xl"
                iconSize={24}
              />
            );
          })}
        </motion.div>

        <motion.div
          style={{ rotateY: innerRotation }}
          className="absolute z-20 h-48 w-48 md:h-56 md:w-56 [transform-style:preserve-3d]"
        >
          {innerTechnologies.map((tech, index) => {
            const angle = (360 / innerTechnologies.length) * index;

            return (
              <OrbitIcon
                key={`inner-${tech.name}`}
                tech={tech}
                angle={angle}
                radius={90}
                rotation={innerRotation}
                occluderRadius={88}
                badgeSize={40}
                className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-[#0d0d0d]/90 shadow-[0_6px_20px_rgba(0,0,0,0.35)] backdrop-blur md:h-12 md:w-12 md:rounded-xl"
                iconSize={20}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
});

export default function Home() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroText = `${t.home.heroName}\n${t.home.heroRole}`;

  usePageSeo({
    title: `${t.home.heroName} | Portfolio`,
    description: t.home.projectsDescription
  });

  const [typedName, typedRole = ''] = typedText.split('\n');

  useEffect(() => {
    setTypedText('');
    setIsDeleting(false);
  }, [heroText]);

  useEffect(() => {
    if (reduceMotion) {
      setTypedText(heroText);
      setIsDeleting(false);
      return;
    }

    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseAfterTyping = 1400;
    const pauseAfterDeleting = 300;

    let timeoutId: number;

    if (!isDeleting && typedText === heroText) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      return () => window.clearTimeout(timeoutId);
    }

    if (isDeleting && typedText === '') {
      timeoutId = window.setTimeout(() => setIsDeleting(false), pauseAfterDeleting);
      return () => window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(
      () => {
        setTypedText((prev) =>
          isDeleting ? prev.slice(0, -1) : heroText.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => window.clearTimeout(timeoutId);
  }, [typedText, isDeleting, heroText, reduceMotion]);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)] text-sm font-medium mb-8 border border-[var(--color-brand-500)]/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-500)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-500)]"></span>
          </span>
          {t.home.availableForWork}
        </motion.div>

        <div className="w-full min-h-[152px] md:min-h-[214px]">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight min-h-[58px] md:min-h-[92px]" aria-label={heroText}>
            <span className="text-brand-500">{typedName}</span>
            {!typedText.includes('\n') && (
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="ml-2 inline-block text-brand-500"
              >
                |
              </motion.span>
            )}
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-zinc-300 font-medium tracking-wide min-h-[30px] md:min-h-[38px]">
            {typedRole || '\u00A0'}
            {typedText.includes('\n') && (
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="ml-1 inline-block text-brand-500"
              >
                |
              </motion.span>
            )}
          </motion.p>
        </div>
      </motion.section>

      {/* Technologies Carousel */}
      <TechnologiesCarousel />

      {/* Summary Section */}
      <section className="grid md:grid-cols-2 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="group relative bg-[#1e1e1e] rounded-2xl p-8 border border-[#333] hover:border-[var(--color-brand-500)]/50 transition-colors overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
            <User size={120} />
          </div>
          <div className="h-12 w-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center mb-6 border border-[#444] text-[var(--color-brand-500)]">
            <User size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.home.aboutTitle}</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            {t.home.aboutDescription}
          </p>
          <Link to="/sobre-mi" className="inline-flex items-center text-[var(--color-brand-500)] font-medium hover:text-[var(--color-brand-600)] transition-colors group/link">
            {t.home.readProfile}
            <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-[#1e1e1e] rounded-2xl p-8 border border-[#333] hover:border-[var(--color-brand-500)]/50 transition-colors overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
            <Terminal size={120} />
          </div>
          <div className="h-12 w-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center mb-6 border border-[#444] text-[var(--color-brand-500)]">
            <Terminal size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.home.projectsTitle}</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            {t.home.projectsDescription}
          </p>
          <Link to="/proyectos" className="inline-flex items-center text-[var(--color-brand-500)] font-medium hover:text-[var(--color-brand-600)] transition-colors group/link">
            {t.home.explorePortfolio}
            <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
