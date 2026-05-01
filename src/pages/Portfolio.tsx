import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <div id="portfolio-page" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            Le <span className="italic text-purple">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-black/60 font-light leading-relaxed"
          >
            Sélection de projets réalisés pour des entrepreneurs, des paroisses et des associations qui partagent nos valeurs.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} index={index % 3} />
          ))}
        </div>
      </div>
    </div>
  );
}
