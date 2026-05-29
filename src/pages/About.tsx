import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, UserCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { usePageSeo } from '../hooks/usePageSeo';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function About() {
  const { t, language } = useLanguage();
  const fallbackAbout = translations.es.about;
  const experiences = Array.isArray(t.about.experiences) && t.about.experiences.length > 0
    ? t.about.experiences
    : fallbackAbout.experiences;
  const education = Array.isArray(t.about.education) && t.about.education.length > 0
    ? t.about.education
    : fallbackAbout.education;
  const experienceTitle = t.about.experienceTitle || fallbackAbout.experienceTitle;
  const educationTitle = t.about.educationTitle || fallbackAbout.educationTitle;

  usePageSeo({
    title: `${t.nav.about} | ${t.home.heroName}`,
    description: t.about.introOne
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* Intro Section */}
      <motion.div
        initial="hidden" animate="visible" variants={staggerContainer}
        className="grid md:grid-cols-5 gap-12 items-center mb-24"
      >
        <motion.div variants={fadeIn} className="md:col-span-2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#333] relative z-10">
            <img
              src="/images/profile.jpg"
              alt="Arnau Agudo Torelló"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 -right-4 w-full h-full border-2 border-[var(--color-brand-500)] rounded-2xl -z-10 opacity-50"></div>
        </motion.div>

        <motion.div variants={fadeIn} className="md:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Arnau Agudo Torelló</h1>
          <p className="text-xl text-[var(--color-brand-500)] mb-6">{t.about.role}</p>
          <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
            <p>
              {t.about.introOne}
            </p>
            <p>
              {t.about.introTwo}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2"><UserCircle size={18} className="text-[var(--color-brand-500)]" /> {t.about.contact}</h3>
              <ul className="text-zinc-400 space-y-1 text-sm">
                <li>amagudo05@gmail.com</li>
                <li>685 814 298</li>
                <li>{t.about.location}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2"><Code2 size={18} className="text-[var(--color-brand-500)]" /> {t.about.languages}</h3>
              <ul className="text-zinc-400 space-y-1 text-sm">
                {t.about.languageItems.map((languageItem) => (
                  <li key={languageItem}>{languageItem}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Experience */}
        <motion.div
          key={`experience-${language}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[var(--color-brand-500)]/10 rounded-lg text-[var(--color-brand-500)]">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold">{experienceTitle}</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#333] before:to-transparent">
            {experiences.map((experience, index) => (
              <motion.div key={experience.date + experience.title} variants={fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className={`flex items-center justify-center w-4 h-4 rounded-full border-4 border-[#121212] absolute left-0 md:left-1/2 -translate-x-1/2 shadow shrink-0 z-10 ${index === 0 ? 'bg-[var(--color-brand-500)]' : 'bg-zinc-600'}`}></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl bg-[#1e1e1e] border border-[#333] group-hover:border-[var(--color-brand-500)]/50 transition-colors ml-8 md:ml-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--color-brand-500)] text-sm font-semibold tracking-wider uppercase">{experience.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                  <p className={`text-zinc-400 font-medium text-sm${experience.note ? ' mb-2' : ''}`}>{experience.company}</p>
                  {experience.note && <p className="text-zinc-500 text-sm">{experience.note}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Skills */}
        <motion.div
          key={`education-${language}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[var(--color-brand-500)]/10 rounded-lg text-[var(--color-brand-500)]">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold">{educationTitle}</h2>
          </div>

          <div className="space-y-6 mb-12">
            {education.map((educationItem) => (
              <motion.div key={educationItem.date + educationItem.title} variants={fadeIn} className="p-6 rounded-xl bg-[#1e1e1e] border border-[#333]">
                <div className="text-[var(--color-brand-500)] font-mono text-sm mb-2">{educationItem.date}</div>
                <h3 className="text-lg font-bold text-white mb-1">{educationItem.title}</h3>
                <p className="text-zinc-400">{educationItem.school}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6">{t.about.technologiesTitle}</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Laravel',
              'Tailwind CSS',
              'MySQL',
              'MongoDB',
              'Git'
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="px-4 py-2 bg-[#2a2a2a] rounded-full border border-[#444] text-sm text-zinc-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6">{t.about.keySkillsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {t.about.skills.map((skill, index) => (
              <motion.div
                key={index} variants={fadeIn}
                className="px-4 py-2 bg-[#2a2a2a] rounded-full border border-[#444] text-sm flex items-center gap-2"
              >
                <span className="text-zinc-200">{skill.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-500)] bg-[var(--color-brand-500)]/10 px-2 py-0.5 rounded-full">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
