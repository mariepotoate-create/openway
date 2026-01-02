import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Nos services' },
    { path: '/booking', label: 'Réserver un appel' }, // [cite: 7]
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO OPENWAY [cite: 1] */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#0F6B3F] p-2 rounded-xl transition-transform group-hover:rotate-12">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-[#0F6B3F]">OPENWAY</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Orientation</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#0F6B3F] after:transition-all ${
                  isActive(link.path) 
                    ? 'text-[#0F6B3F] after:w-full' 
                    : 'text-gray-600 hover:text-[#0F6B3F] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA INSCRIPTION [cite: 8, 12] */}
            <Link
              to="/register"
              className="
                bg-[#0F6B3F] 
                text-white 
                px-6 
                py-2.5 
                text-sm 
                font-bold 
                transition-all 
                duration-300
                rounded-[15px]
                border-4 border-transparent
                hover:bg-white 
                hover:text-[#0F6B3F] 
                hover:border-double 
                hover:border-[#0F6B3F]
                flex items-center justify-center
              "
            >
              Inscription
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-7 w-7 text-[#0F6B3F]" /> : <Menu className="h-7 w-7 text-gray-600" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION  */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-base font-medium rounded-lg ${
                  isActive(link.path) ? 'bg-green-50 text-[#0F6B3F]' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#0F6B3F] text-white py-3 rounded-[15px] font-bold"
              >
                S'inscrire en ligne
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}