import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: lang === 'en' ? 'Home' : 'హోమ్', href: '#home' },
    { name: lang === 'en' ? 'Specials' : 'స్పెషల్స్', href: '#specials' },
    { name: lang === 'en' ? 'Menu' : 'మెనూ', href: '#menu' },
    { name: lang === 'en' ? 'Bike Services' : 'బైక్ సర్వీస్', href: '#services' },
    { name: lang === 'en' ? 'Contact' : 'సంప్రదించండి', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/nivas_logo_1778318840012.png" alt="Nivas Logo" className="h-12 w-12 rounded-full object-cover shadow-sm" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-brand-charcoal leading-tight">Nivas</span>
              <span className="text-xs text-brand-orange font-semibold">Tiffin & Bike Repair</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-orange transition-colors font-medium">
                {link.name}
              </a>
            ))}
            
            <button onClick={toggleLang} className="px-3 py-1 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition-colors">
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
            
            <a href="tel:+919963090468" className="btn-primary flex items-center gap-2 !py-2 !px-4 text-sm">
              <Phone size={16} />
              <span>{lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLang} className="px-2 py-1 rounded border border-gray-200 text-xs font-semibold">
              {lang === 'en' ? 'తె' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-charcoal">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+919963090468" className="mt-4 flex w-full justify-center items-center gap-2 bg-brand-orange text-white px-4 py-3 rounded-md font-semibold">
                <Phone size={18} />
                {lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
