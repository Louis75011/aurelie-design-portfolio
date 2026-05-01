import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMAGES, PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div id="home-page">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row border-b border-purple/10">
        <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-center border-r border-purple/10 bg-cream">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps mb-8 inline-block">
              Graphiste Freelance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-10 italic text-purple">
              Au service de l'image de ceux qui témoignent de leur Foi.
            </h1>
            <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed mb-12">
              Bonjour, je suis Aurélie, graphiste freelance pour les entrepreneurs catholiques qui veulent une image alignée avec leur foi.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto bg-purple text-cream px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-pink transition-colors text-center"
              >
                Découvrir mon univers
              </Link>
            </div>
          </motion.div>

          <div className="mt-20 p-8 bg-purple/5 border border-purple/10 relative overflow-hidden">
             <div className="relative z-10">
              <p className="label-caps mb-3">Mission</p>
              <p className="text-lg italic font-serif leading-snug text-purple">
                "Travailler ensemble pour donner une dimension spirituelle et professionnelle à votre identité visuelle."
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-purple/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-wider">Audit Offert</span>
                <Link to="/contact" className="text-[10px] opacity-60 uppercase tracking-widest hover:opacity-100 font-bold">Réservez</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 relative h-[400px] md:h-auto overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Aurélie Renier Workspace"
            className="w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-purple/5 mix-blend-overlay" />
        </div>
      </section>

      {/* Featured Portfolio - Grid Layout */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-10 mb-20 pb-10 border-b border-purple/10">
            <h2 className="text-3xl md:text-5xl font-serif italic text-purple">
              Projets <span className="not-italic text-black">Sélectionnés</span>
            </h2>
            <Link
              to="/portfolio"
              className="label-caps text-black hover:text-purple border-b border-transparent hover:border-purple transition-all"
            >
              Voir tout le portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-purple/10 scale-[1.001]">
            {PROJECTS.slice(0, 6).map((project, index) => (
              <div key={index} className="border-r border-b border-purple/10">
                <ProjectCard {...project} index={index % 3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Value Props */}
      <section className="py-32 px-6 bg-cream relative overflow-hidden">
        <div className="spiritual-chic-gradient absolute inset-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
          >
            <Star className="w-12 h-12 text-pink mx-auto mb-10 opacity-50" />
            <blockquote className="text-3xl md:text-5xl font-serif italic text-purple leading-snug mb-12">
              "La beauté est la splendeur de la vérité."
            </blockquote>
            <p className="text-lg text-black/60 uppercase tracking-widest font-medium">
              — Saint Jean-Paul II
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-purple text-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
            Prêt à révéler l'identité <br />
            <span className="italic opacity-80">de votre projet ?</span>
          </h2>
          <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Profitez d'un audit de 30 minutes offert pour faire le point sur votre image de marque et vos besoins graphiques.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cream text-purple px-12 py-6 rounded-full text-xl font-medium transition-all hover:bg-pink hover:text-cream shadow-2xl active:scale-95"
          >
            Demander mon audit offert
          </Link>
        </div>
      </section>
    </div>
  );
}
