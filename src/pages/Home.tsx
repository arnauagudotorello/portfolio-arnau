import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, User } from 'lucide-react';

import type { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
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
          Disponible para trabajar
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-zinc-400">Arnau</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          Técnico de sistemas y <span className="text-zinc-200 font-medium">Desarrollador de Aplicaciones Web</span> en formación. Apasionado por la tecnología, creando soluciones eficientes y diseños limpios.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <Link to="/proyectos" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
            Ver Proyectos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/sobre-mi" className="px-8 py-4 bg-[#1e1e1e] border border-[#333] text-white font-semibold rounded-lg hover:bg-[#2a2a2a] transition-colors flex items-center justify-center">
            Conóceme más
          </Link>
        </motion.div>
      </motion.section>

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
          <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Descubre mi trayectoria académica y profesional. Desde mis inicios en sistemas microinformáticos hasta mi actual formación en desarrollo web, además de mis habilidades y competencias clave.
          </p>
          <Link to="/sobre-mi" className="inline-flex items-center text-[var(--color-brand-500)] font-medium hover:text-[var(--color-brand-600)] transition-colors group/link">
            Leer perfil completo
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
          <h2 className="text-2xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Explora una selección de mis trabajos más recientes. Aplicaciones web, diseños interactivos y soluciones de código que demuestran mis capacidades técnicas y creativas.
          </p>
          <Link to="/proyectos" className="inline-flex items-center text-[var(--color-brand-500)] font-medium hover:text-[var(--color-brand-600)] transition-colors group/link">
            Explorar portfolio
            <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
