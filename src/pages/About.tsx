import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <div id="about-page">
      <section className="py-24 px-6 overflow-hidden" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-[12px] border-cream shadow-2xl relative z-10">
                <img
                  src={IMAGES.profile}
                  alt="Portrait d'Aurélie Renier"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink/20 rounded-full blur-3xl z-0" aria-hidden="true" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple/10 rounded-full blur-3xl z-0" aria-hidden="true" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-purple uppercase tracking-widest font-medium text-sm mb-6 inline-block">
                Ma Mission
              </span>
              <h1 id="about-heading" className="text-5xl font-serif leading-tight mb-8">
                Graphiste pour une <br />
                <span className="italic text-purple">beauté qui témoigne.</span>
              </h1>
              
              <div className="space-y-6 text-lg text-black/70 font-light leading-relaxed mb-10">
                <p>
                  Bonjour, je suis Aurélie Renier. Ma passion est d'aider les entrepreneurs catholiques à aligner leur image de marque avec leur foi.
                </p>
                <p>
                  Je crois fermement que la communication professionnelle et l'esthétique soignée sont des outils d'évangélisation puissants. Votre entreprise est une vocation ; son identité visuelle doit en être le reflet fidèle.
                </p>
                <p>
                  Basée dans les Yvelines, je collabore avec des clients dans toute la France sous l'entité Arx Systema, toujours avec la volonté d'élever chaque projet par le beau et le vrai.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  "Écoute spirituelle du projet",
                  "Design haut de gamme",
                  "Rigueur et Bienveillance",
                  "Accompagnement dédié",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-pink" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block bg-purple text-cream px-10 py-4 rounded-full text-lg font-medium hover:bg-pink transition-all shadow-xl shadow-purple/10"
              >
                On en discute ?
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services summary or similar */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-16">
            Comment je vous <span className="italic text-purple">accompagne</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-purple">01.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Identité Visuelle</h3>
              <p className="text-black/60 font-light">Logo, palette, typographies et charte graphique complète.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-purple">02.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Print & Édition</h3>
              <p className="text-black/60 font-light">Cartes de visite, plaquettes, livres et affiches.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-purple">03.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Audit Conseil</h3>
              <p className="text-black/60 font-light">Analyse de votre communication actuelle et pistes d'amélioration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
