import { useEffect, useState } from 'react';
import { Menu, X, Phone, Sun, Moon, Monitor, ShoppingBag } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { business, telLink } from '../data/business';
import { whatsappLink, generalEnquiryMessage } from '../lib/whatsapp';

const sections = ['home', 'specials', 'menu', 'about', 'gallery', 'contact'];

const ThemeIcon = ({ theme, size = 16 }) => {
  if (theme === 'dark') return <Moon size={size} />;
  if (theme === 'light') return <Sun size={size} />;
  return <Monitor size={size} />;
};

const Navbar = ({ lang, toggleLang, cartCount, openEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

  const links = [
    { id: 'specials', en: 'Specials', te: 'స్పెషల్స్' },
    { id: 'menu', en: 'Menu', te: 'మెనూ' },
    { id: 'about', en: 'About', te: 'మా గురించి' },
    { id: 'gallery', en: 'Gallery', te: 'ఫోటోలు' },
    { id: 'contact', en: 'Contact', te: 'సంప్రదించండి' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const cycleTheme = () => {
    const order = ['light', 'dark', 'system'];
    setTheme(order[(order.indexOf(theme) + 1) % order.length]);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-hair bg-cream-50/95 backdrop-blur-md dark:bg-forest-950/95'
          : 'border-transparent bg-cream-50/80 backdrop-blur-sm dark:bg-forest-950/80'
      }`}
    >
      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Nivas Tiffin Center home">
            <img
              src="/img/logo-192.webp"
              alt="Nivas Tiffin Center logo"
              width="44"
              height="44"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-line dark:ring-forest-700"
            />
            <span className="leading-none">
              <span className="block font-display text-xl font-semibold text-body">Nivas</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta-500 dark:text-saffron-400">
                Tiffin Center
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={`text-sm font-medium transition-colors hover:text-terracotta-500 dark:hover:text-saffron-400 ${
                  activeSection === link.id
                    ? 'text-terracotta-500 dark:text-saffron-400'
                    : 'text-body'
                }`}
              >
                {lang === 'en' ? link.en : link.te}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={cycleTheme}
              className="rounded-lg border border-hair p-2.5 text-body transition-colors hover:border-terracotta-500 hover:text-terracotta-500 dark:hover:border-saffron-400 dark:hover:text-saffron-400"
              aria-label={`Switch theme, current: ${theme}`}
              title={lang === 'en' ? 'Switch theme' : 'థీమ్ మార్చండి'}
            >
              <ThemeIcon theme={theme} size={15} />
            </button>
            <button
              type="button"
              onClick={toggleLang}
              lang={lang === 'en' ? 'te' : 'en'}
              className="rounded-lg border border-hair px-3 py-2.5 text-xs font-semibold text-body transition-colors hover:border-terracotta-500 hover:text-terracotta-500 dark:hover:border-saffron-400 dark:hover:text-saffron-400"
              aria-label={lang === 'en' ? 'తెలుగులో చూడండి' : 'View in English'}
            >
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
            <button
              type="button"
              onClick={openEnquiry}
              className="relative rounded-lg border border-hair p-2.5 text-body transition-colors hover:border-terracotta-500 hover:text-terracotta-500 dark:hover:border-saffron-400 dark:hover:text-saffron-400"
              aria-label={
                lang === 'en'
                  ? `Takeaway enquiry, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`
                  : `టేక్అవే విచారణ, ${cartCount} వస్తువులు`
              }
            >
              <ShoppingBag size={16} />
              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta-500 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <a href={telLink(business.phones[0].e164)} className="btn-deep !px-4">
              <Phone size={15} />
              {lang === 'en' ? 'Call to order' : 'కాల్ చేయండి'}
            </a>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              onClick={cycleTheme}
              className="rounded-lg p-2 text-body"
              aria-label={`Switch theme, current: ${theme}`}
            >
              <ThemeIcon theme={theme} size={17} />
            </button>
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-lg border border-hair px-2 py-1.5 text-[11px] font-bold text-body"
              aria-label={lang === 'en' ? 'తెలుగులో చూడండి' : 'View in English'}
            >
              {lang === 'en' ? 'తె' : 'EN'}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-lg p-2 text-body"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-hair bg-cream-50 px-4 pb-6 pt-3 dark:bg-forest-950 lg:hidden"
        >
          <nav className="mx-auto flex max-w-lg flex-col" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="border-b border-hair py-3.5 text-base font-medium text-body"
              >
                {lang === 'en' ? link.en : link.te}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-4 grid max-w-lg grid-cols-2 gap-2">
            <a href={telLink(business.phones[0].e164)} className="btn-deep">
              <Phone size={15} />
              {lang === 'en' ? 'Call' : 'కాల్'}
            </a>
            <a
              href={whatsappLink(generalEnquiryMessage(lang))}
              target="_blank"
              rel="noreferrer"
              className="btn-wa-soft"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
