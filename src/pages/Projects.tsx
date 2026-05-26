import { motion, type Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'Vinacoteca',
    description: 'Aplicación web para la gestión de una vinacoteca, permitiendo a los usuarios explorar, agregar y organizar su colección de vinos con una interfaz intuitiva y moderna.',
    image: '/images/vinacoteca.png',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'noSQL'],
    links: {
      github: 'https://github.com/agudotorelloarnau/Vinacoteca',
      live: 'https://proyecto-api-sigma.vercel.app'
    }
  },
  {
    id: 2,
    title: 'Proyecto Pescadería',
    description: 'Plataforma de comercio electrónico para una pescadería local, con catálogo de productos.',
    image: '/images/projectebacalla.png',
    tags: ['Vite', 'React', 'noSQL', 'Tailwind CSS', 'IA'],
    links: {
      github: '#',
      live: 'https://frontiabacalla.vercel.app'
    }
  },
  {
    id: 3,
    title: 'Documentación Shopify',
    description: 'Rediseño de la documentación de Shopify, mejorando la navegación y la experiencia del usuario para desarrolladores que integran con la plataforma.',
    image: '/images/documentacionShopify.png',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    links: {
      github: 'https://github.com/arnauagudofpllefia/codespaces-for-php-demo/tree/proyectoShopify',
      live: 'https://proyectoshopify.onrender.com'
    }
  },
  {
    id: 4,
    title: 'App de reservas de gimnasio (en desarrollo)',
    description: 'Aplicación móvil para la gestión de reservas en un gimnasio, permitiendo a los usuarios reservar maquinas y gestionar su membresía.',
    image: '/images/project-placeholder.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'JWT', 'Laravel', 'MySQL'],
    links: {
      github: '#',
      live: '#'
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.article 
            key={project.id}
            variants={itemVariants}
            className="group bg-[#1e1e1e] rounded-2xl overflow-hidden border border-[#333] hover:border-[var(--color-brand-500)]/50 transition-colors flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden bg-[#2a2a2a]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-500)] transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-6 flex-1 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-[#2a2a2a] text-zinc-300 text-xs font-medium rounded-full border border-[#444]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#333]">
                <a 
                  href={project.links.github}
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span>Código</span>
                </a>
                <a 
                  href={project.links.live}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-brand-500)] hover:text-[var(--color-brand-600)] transition-colors ml-auto"
                >
                  <span>Ver demo</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
