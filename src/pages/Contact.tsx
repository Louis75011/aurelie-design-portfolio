import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real integration would go here
  };

  return (
    <div id="contact-page" className="py-24 px-6 bg-cream relative overflow-hidden">
      <div className="spiritual-chic-gradient absolute inset-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-10"
            >
              Contactez <span className="italic text-purple">Aurélie</span>
            </motion.h1>
            <p className="text-xl text-black/60 font-light mb-12 max-w-md leading-relaxed">
              Une question, un devis ou simplement l'envie de discuter de votre vision ? Je vous réponds avec joie.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white text-purple rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-pink font-medium">Email</p>
                  <p className="text-lg font-medium">contact@aurelie-renier.fr</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white text-purple rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-pink font-medium">Localisation</p>
                  <p className="text-lg font-medium">Yvelines & France entière</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h4 className="font-serif text-2xl mb-6">Suivez mon aventure</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/votre_graphiste_catholique"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all hover:bg-purple hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/in/aurelie-renier"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all hover:bg-purple hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-[40px] shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Message envoyé !</h3>
                <p className="text-black/60 font-light">Merci pour votre confiance. Je reviens vers vous sous 48h (jours ouvrés).</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-purple border-b border-purple pb-1 font-medium"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium ml-1">Nom / Prénom</label>
                    <input
                      required
                      id="name"
                      type="text"
                      className="w-full bg-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-pink outline-none transition-all"
                      placeholder="Marie Dupont"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                    <input
                      required
                      id="email"
                      type="email"
                      className="w-full bg-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-pink outline-none transition-all"
                      placeholder="marie@projet.fr"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium ml-1">Sujet</label>
                  <input
                      id="subject"
                      type="text"
                      className="w-full bg-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-pink outline-none transition-all"
                      placeholder="Identité visuelle / Audit offert"
                    />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                  <textarea
                    required
                    id="message"
                    rows={6}
                    className="w-full bg-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-pink outline-none transition-all resize-none"
                    placeholder="Dites-m'en plus sur votre magnifique projet..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple text-cream py-5 rounded-2xl text-lg font-medium hover:bg-pink transition-all shadow-xl shadow-purple/10 flex items-center justify-center gap-3"
                >
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-black/40 pt-4">
                  En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
