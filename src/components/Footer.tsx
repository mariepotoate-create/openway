import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, Facebook, Linkedin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F6B3F] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* COLONNE 1 : LOGO & DESCRIPTION */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-white p-2 rounded-[12px] shadow-lg">
                <Compass className="h-6 w-6 text-[#0F6B3F]" />
              </div>
              <span className="text-2xl font-bold tracking-tight">OPENWAY</span>
            </div>
            <p className="text-green-100/80 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Votre partenaire de confiance pour une orientation académique réussie et un avenir serein.
            </p>
            {/* RÉSEAUX SOCIAUX */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION (AVEC HOVER MODERNE) */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-300">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'À propos', path: '/about' },
                { name: 'Nos services', path: '/services' },
                { name: 'Réservation', path: '/booking' },
                { name: 'Inscription', path: '/register' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-green-100/70 hover:text-white transition-all flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <span className="h-1 w-0 bg-green-300 group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT DIRECT */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-300">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col md:flex-row items-center gap-3 text-green-100/70">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>+229 0190250704</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3 text-green-100/70">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="break-all">rolandeazk@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : RÉASSURANCE CONFIDENTIALITÉ (CIBLÉ APPEL D'OFFRES) */}
          <div className="bg-white/5 p-6 rounded-[20px] border border-white/10">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-green-300">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-bold">Confidentialité</h3>
            </div>
            <p className="text-xs text-green-100/60 leading-relaxed">
              OPENWAY s'engage à protéger vos données personnelles. Toutes les informations d'inscription sont sécurisées et traitées en toute discrétion.
            </p>
          </div>
        </div>

        {/* LIGNE DE COPYRIGHT ÉLÉGANTE */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-100/50 uppercase tracking-widest font-semibold">
          <p>&copy; {new Date().getFullYear()} OPENWAY. BY RÉNATO TCHOBO.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Vie Privée</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}