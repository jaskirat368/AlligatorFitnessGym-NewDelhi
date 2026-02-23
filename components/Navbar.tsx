import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2 sm:py-3 transition-all duration-300 pointer-events-none">
      <nav 
        className={`pointer-events-auto relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${scrolled ? 'w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] bg-gray-950/90 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'w-[98%] md:w-[95%] lg:w-[92%] bg-gray-900/60 shadow-lg'} 
        backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2 flex items-center justify-between ring-1 ring-white/5`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center group">
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter text-white transition-colors uppercase inline-block">
            ALLIGATOR
            <span className="text-brand-primary ml-2 drop-shadow-[0_0_8px_rgba(46,190,99,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(46,190,99,1)] transition-all duration-300">
              FITNESS
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - Hidden on Tablet/Mobile (lg breakpoint) */}
        <div className="hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-5 py-2.5 rounded-full text-sm font-sans font-bold tracking-wide uppercase transition-all duration-300 ${
                location.pathname === link.path 
                  ? 'text-black bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
           {/* Call Icon (Mobile & Tablet) */}
           <a href={`tel:${BUSINESS_INFO.phone}`} className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-green-400 border border-white/10 active:scale-95 transition-transform">
             <span className="text-xl">📞</span>
           </a>

           {/* Call Button (Desktop/Laptop) */}
           <a href={`tel:${BUSINESS_INFO.phone}`} className="hidden lg:block">
             <button className="group relative px-6 py-2.5 rounded-full bg-transparent overflow-hidden border border-green-500/50 text-white text-sm font-sans font-bold uppercase tracking-widest hover:border-green-400 transition-all shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
               <span className="relative z-10 group-hover:text-green-300 transition-colors">Join Now</span>
               <div className="absolute inset-0 bg-green-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
             </button>
           </a>

           {/* Mobile/Tablet Menu Toggle */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               {isOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               )}
             </svg>
           </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`pointer-events-auto fixed inset-0 z-[-1] bg-black/80 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className={`absolute top-32 left-4 right-4 bg-gray-900 border border-white/10 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
           <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`p-4 rounded-xl text-center font-sans font-bold text-lg tracking-wide transition-colors ${
                    location.pathname === link.path 
                    ? 'bg-brand-primary text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
           </div>
           
           <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center">
              <p className="text-gray-400 text-xs font-sans uppercase tracking-widest mb-4">Contact Support</p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-sans font-bold text-white hover:text-green-400 transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </a>
           </div>
        </div>
      </div>
    </header>
  );
};