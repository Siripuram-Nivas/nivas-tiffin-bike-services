import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

/* ─── Theme toggle data ──────────────────────────────────────── */
const themeOptions = [
  { id: 'light',  labelEn: 'Light',  labelTe: 'లైట్',  Icon: Sun },
  { id: 'dark',   labelEn: 'Dark',   labelTe: 'డార్క్', Icon: Moon },
  { id: 'system', labelEn: 'System', labelTe: 'సిస్టమ్', Icon: Monitor },
];

const ThemeIcon = ({ theme, size = 16 }) => {
  if (theme === 'dark')   return <Moon   size={size} />;
  if (theme === 'light')  return <Sun    size={size} />;
  return <Monitor size={size} />;
};

/* ─── Theme dropdown ─────────────────────────────────────────── */
const ThemeDropdown = ({ lang }) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700
                   text-sm font-semibold text-gray-600 dark:text-gray-300
                   hover:border-brand-orange hover:text-brand-orange
                   bg-white dark:bg-gray-800 transition-all duration-200"
        aria-label="Switch theme"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <ThemeIcon theme={theme} size={14} />
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Theme selection"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-36 rounded-2xl
                       bg-white dark:bg-gray-800
                       border border-gray-100 dark:border-gray-700
                       shadow-card overflow-hidden z-50 py-1"
          >
            {themeOptions.map(({ id, labelEn, labelTe, Icon }) => (
              <li key={id}>
                <button
                  role="option"
                  aria-selected={theme === id}
                  onClick={() => { setTheme(id); setOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium
                              transition-colors duration-150 ${
                    theme === id
                      ? 'text-brand-orange bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={14} />
                  {lang === 'en' ? labelEn : labelTe}
                  {theme === id && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main Navbar ────────────────────────────────────────────── */
const Navbar = ({ lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

  const links = [
    { name: lang === 'en' ? 'Home'     : 'హోమ్',           href: '#home',     id: 'home' },
    { name: lang === 'en' ? 'Specials' : 'స్పెషల్స్',       href: '#specials', id: 'specials' },
    { name: lang === 'en' ? 'Menu'     : 'మెనూ',            href: '#menu',     id: 'menu' },
    { name: lang === 'en' ? 'Reviews'  : 'రివ్యూలు',        href: '#reviews',  id: 'reviews' },
    { name: lang === 'en' ? 'Contact'  : 'సంప్రదించండి',    href: '#contact',  id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'specials', 'menu', 'reviews', 'contact'];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Mobile quick-theme cycle: light → dark → system → light
  const cycleTheme = () => {
    const order = ['light', 'dark', 'system'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-soft border-b border-brand-border dark:border-gray-700'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[72px] items-center">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-3 group" aria-label="Nivas Tiffin Center Home">
            <div className="relative">
              <img
                src="/nivas_logo_1778318840012.png"
                alt="Nivas Tiffin Center Logo"
                className="h-11 w-11 rounded-full object-cover shadow-md ring-2 ring-brand-orange/20 group-hover:ring-brand-orange/50 transition-all duration-300"
              />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-brand-success rounded-full border-2 border-white dark:border-gray-900" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl text-brand-dark dark:text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Nivas</span>
              <span className="text-xs text-brand-orange font-semibold tracking-wide uppercase">Tiffin Center</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-brand-orange bg-orange-50 dark:bg-orange-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-orange hover:bg-orange-50/50 dark:hover:bg-orange-900/10'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-orange-100 dark:bg-orange-900/30 -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme dropdown */}
            <ThemeDropdown lang={lang} />

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700
                         text-sm font-semibold text-gray-600 dark:text-gray-300
                         hover:border-brand-orange hover:text-brand-orange
                         bg-white dark:bg-gray-800 transition-all duration-200"
              aria-label="Switch language"
            >
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>

            {/* Call button */}
            <a
              href="tel:+919963090468"
              className="btn-primary !py-2.5 !px-5 text-sm"
              aria-label="Call Nivas Tiffin Center"
            >
              <Phone size={15} />
              <span>{lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme cycle button (mobile) */}
            <button
              onClick={cycleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-gray-700
                         text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800
                         hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
              aria-label="Toggle theme"
            >
              <ThemeIcon theme={theme} size={16} />
            </button>

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700
                         text-xs font-bold text-gray-600 dark:text-gray-300
                         bg-white dark:bg-gray-800"
              aria-label="Switch language"
            >
              {lang === 'en' ? 'తె' : 'EN'}
            </button>

            <a
              href="tel:+919963090468"
              className="p-2 rounded-full bg-brand-orange text-white shadow-orange"
              aria-label="Call now"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[72px] bg-black/20 dark:bg-black/40 md:hidden z-40"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden absolute top-full left-0 right-0
                         bg-white dark:bg-gray-900
                         border-t border-brand-border dark:border-gray-700
                         shadow-xl z-50"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors ${
                      activeSection === link.id
                        ? 'bg-orange-50 dark:bg-orange-900/20 text-brand-orange'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-brand-orange'
                    }`}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    )}
                    {link.name}
                  </motion.a>
                ))}

                {/* Theme selector inside mobile menu */}
                <div className="pt-2 pb-1 border-t border-gray-100 dark:border-gray-800 mt-2">
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 px-4 pb-2 uppercase tracking-wider">Theme</p>
                  <div className="grid grid-cols-3 gap-2 px-2">
                    {themeOptions.map(({ id, labelEn, Icon }) => (
                      <button
                        key={id}
                        onClick={() => setTheme(id)}
                        className={`flex flex-col items-center gap-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          theme === id
                            ? 'bg-orange-50 dark:bg-orange-900/20 text-brand-orange border border-orange-200 dark:border-orange-700'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <Icon size={16} />
                        {labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 pb-1 grid grid-cols-2 gap-3">
                  <a href="tel:+919963090468" onClick={closeMenu} className="btn-primary justify-center !py-3 text-sm">
                    <Phone size={16} />
                    {lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}
                  </a>
                  <a href="tel:+919701513468" onClick={closeMenu} className="btn-ghost justify-center !py-3 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
                    <Phone size={16} />
                    9701513468
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
