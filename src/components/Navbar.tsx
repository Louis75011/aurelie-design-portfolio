import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cross } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 border-b border-purple/10',
        isScrolled ? 'bg-cream/90 backdrop-blur-md py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-baseline justify-between">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-purple">
            Aurélie Renier
          </span>
          <span className="hidden sm:inline label-caps mt-1">
            Graphiste Catholique
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-purple',
                location.pathname === link.path ? 'text-purple' : 'text-black/50'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border-l border-purple/20 pl-10 text-[10px] uppercase tracking-[0.2em] font-bold text-purple hover:text-pink transition-colors"
          >
            Audit offert
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-purple p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-xl border-t border-purple/10 flex flex-col p-6 gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-serif transition-colors',
                  location.pathname === link.path ? 'text-purple' : 'text-black/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-purple text-cream text-center py-4 rounded-xl font-medium"
            >
              Audit offert
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
