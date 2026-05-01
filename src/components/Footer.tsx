import { Link } from 'react-router-dom';
import { SOCIALS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white border-t border-purple/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          <div className="flex flex-col">
            <span className="label-caps !text-black opacity-50 mb-1">Instagram</span>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-tight hover:text-purple">@votre_graphiste_catholique</a>
          </div>
          <div className="flex flex-col">
            <span className="label-caps !text-black opacity-50 mb-1">LinkedIn</span>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-tight hover:text-purple">Aurélie Renier</a>
          </div>
          <div className="flex flex-col">
            <span className="label-caps !text-black opacity-50 mb-1">Email</span>
            <a href={`mailto:${SOCIALS.email}`} className="text-xs font-bold tracking-tight hover:text-purple">{SOCIALS.email}</a>
          </div>
          <div className="flex flex-col">
            <span className="label-caps !text-black opacity-50 mb-1">Légal</span>
            <Link to="/legal" className="text-xs font-bold tracking-tight hover:text-purple">Mentions Légales</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:block h-px w-24 bg-pink" aria-hidden="true"></div>
          <p className="label-caps !text-purple">Travaillons ensemble</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-purple/5 flex justify-between items-center opacity-40 text-[9px] uppercase tracking-widest font-bold">
        <span>© {currentYear} Aurélie Renier — Arx Systema</span>
        <span>Beauté et Vérité</span>
      </div>
    </footer>
  );
}
