import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set Document Title based on path
    const path = pathname.split('/')[1] || '';
    const titles: Record<string, string> = {
      '': 'Accueil | Aurélie Renier',
      'portfolio': 'Portfolio | Aurélie Renier',
      'about': 'À Propos | Aurélie Renier',
      'contact': 'Contact | Aurélie Renier',
      'legal': 'Mentions Légales | Aurélie Renier',
    };
    document.title = titles[path] || 'Aurélie Renier — Graphiste Catholique';
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink selection:text-cream">
      <header>
        <Navbar />
      </header>
      
      <main id="main-content" className="flex-grow pt-24" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
