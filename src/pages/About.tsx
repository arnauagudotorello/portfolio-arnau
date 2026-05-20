import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, UserCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Intro Section */}
      <motion.div 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="grid md:grid-cols-5 gap-12 items-center mb-24"
      >
        <motion.div variants={fadeIn} className="md:col-span-2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#333] relative z-10">
            <img src="/images/profile.jpg" alt="Arnau Agudo Torelló" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 -right-4 w-full h-full border-2 border-[var(--color-brand-500)] rounded-2xl -z-10 opacity-50"></div>
        </motion.div>
        
        <motion.div variants={fadeIn} className="md:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Arnau Agudo Torelló</h1>
          <p className="text-xl text-[var(--color-brand-500)] mb-6">Desarrollador Web & Técnico de Sistemas</p>
          <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
            <p>
              Soy un profesional en formación continua, apasionado por la tecnología y el desarrollo de software. Me caracterizo por mi autoconfianza, gran empatía e iniciativa para afrontar nuevos retos.
            </p>
            <p>
              Tengo una sólida base en sistemas microinformáticos y redes, y actualmente estoy ampliando mis conocimientos enfocado en el Desarrollo de Aplicaciones Web. Disfruto trabajando en equipo y planificando soluciones eficaces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2"><UserCircle size={18} className="text-[var(--color-brand-500)]"/> Contacto</h3>
              <ul className="text-zinc-400 space-y-1 text-sm">
                <li>amagudo05@gmail.com</li>
                <li>685 814 298</li>
                <li>Barcelona, España</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2"><Code2 size={18} className="text-[var(--color-brand-500)]"/> Idiomas</h3>
              <ul className="text-zinc-400 space-y-1 text-sm">
                <li>Español (Nativo)</li>
                <li>Catalán (Nativo)</li>
                <li>Inglés (A2)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Experience */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[var(--color-brand-500)]/10 rounded-lg text-[var(--color-brand-500)]">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold">Experiencia</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#333] before:to-transparent">
            
            <motion.div variants={fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-[#121212] bg-[var(--color-brand-500)] absolute left-0 md:left-1/2 -translate-x-1/2 shadow shrink-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl bg-[#1e1e1e] border border-[#333] group-hover:border-[var(--color-brand-500)]/50 transition-colors ml-8 md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--color-brand-500)] text-sm font-semibold tracking-wider uppercase">09/2023 – 12/2023</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Técnico de sistemas (Prácticas)</h3>
                <p className="text-zinc-400 font-medium text-sm">HERFRI SL. (200 horas)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-[#121212] bg-zinc-600 absolute left-0 md:left-1/2 -translate-x-1/2 shadow shrink-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl bg-[#1e1e1e] border border-[#333] group-hover:border-[var(--color-brand-500)]/50 transition-colors ml-8 md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--color-brand-500)] text-sm font-semibold tracking-wider uppercase">04/2023 – 06/2023</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Técnico de sistemas (Prácticas)</h3>
                <p className="text-zinc-400 font-medium text-sm">Revolution Computer (184 horas)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-[#121212] bg-zinc-600 absolute left-0 md:left-1/2 -translate-x-1/2 shadow shrink-0 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl bg-[#1e1e1e] border border-[#333] group-hover:border-[var(--color-brand-500)]/50 transition-colors ml-8 md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--color-brand-500)] text-sm font-semibold tracking-wider uppercase">07/2022</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Certificado de Profesionalidad Nivel 2</h3>
                <p className="text-zinc-400 font-medium text-sm mb-2">HERFRI SL. (40 horas)</p>
                <p className="text-zinc-500 text-sm">Técnico de sistemas en prácticas.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education & Skills */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[var(--color-brand-500)]/10 rounded-lg text-[var(--color-brand-500)]">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold">Formación</h2>
          </div>

          <div className="space-y-6 mb-12">
            <motion.div variants={fadeIn} className="p-6 rounded-xl bg-[#1e1e1e] border border-[#333]">
              <div className="text-[var(--color-brand-500)] font-mono text-sm mb-2">2026 (En curso)</div>
              <h3 className="text-lg font-bold text-white mb-1">Desarrollo de Aplicaciones Web</h3>
              <p className="text-zinc-400">Centro FP Llefià</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6 rounded-xl bg-[#1e1e1e] border border-[#333]">
              <div className="text-[var(--color-brand-500)] font-mono text-sm mb-2">2023</div>
              <h3 className="text-lg font-bold text-white mb-1">Sistemas Microinformáticos y Redes</h3>
              <p className="text-zinc-400">Centro FP Llefià</p>
            </motion.div>

            <motion.div variants={fadeIn} className="p-6 rounded-xl bg-[#1e1e1e] border border-[#333]">
              <div className="text-[var(--color-brand-500)] font-mono text-sm mb-2">2022</div>
              <h3 className="text-lg font-bold text-white mb-1">Curso SOC Sistemas Microinformáticos (600h)</h3>
              <p className="text-zinc-400">Centro FP Llefià</p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Competencias Clave</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Empatía", level: "Muy Avanzado" },
              { name: "Planificación y organización", level: "Muy Avanzado" },
              { name: "Trabajo en equipo", level: "Muy Avanzado" },
              { name: "Autoconfianza", level: "Avanzado" },
              { name: "Iniciativa", level: "Avanzado" },
              { name: "Comunicación", level: "Avanzado" },
              { name: "Resolución de problemas", level: "Avanzado" }
            ].map((skill, index) => (
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
