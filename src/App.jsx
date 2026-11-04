import { useCallback, useEffect, useMemo, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailySpecials from './components/DailySpecials';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import EnquiryDrawer from './components/EnquiryDrawer';
import { menuById } from './data/menu';
import { changeQty, getTotals, lineKey } from './lib/enquiry';

const App = () => {
  const [lang, setLang] = useState('en');
  const [cart, setCart] = useState({});
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const { lines, count, total } = useMemo(() => getTotals(cart, menuById), [cart]);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'te';
  }, [lang]);

  const addItem = useCallback((id, portion = 'full') => {
    setCart((current) => changeQty(current, lineKey(id, portion), 1));
    const item = menuById[id];
    if (item) {
      setAnnouncement(
        lang === 'en'
          ? `${item.nameEn} added to your takeaway enquiry.`
          : `${item.nameTe} మీ టేక్అవే విచారణలో చేర్చబడింది.`
      );
    }
  }, [lang]);

  const changeLineQty = useCallback((key, delta) => {
    setCart((current) => changeQty(current, key, delta));
  }, []);

  const openEnquiry = useCallback(() => setEnquiryOpen(true), []);
  const closeEnquiry = useCallback(() => setEnquiryOpen(false), []);
  const clearEnquiry = useCallback(() => setCart({}), []);
  const toggleLang = useCallback(() => setLang((current) => (current === 'en' ? 'te' : 'en')), []);

  return (
    <div className="min-h-screen bg-page text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream-50"
      >
        {lang === 'en' ? 'Skip to content' : 'ముఖ్య విషయానికి వెళ్లండి'}
      </a>

      <Navbar lang={lang} toggleLang={toggleLang} cartCount={count} openEnquiry={openEnquiry} />

      <main id="main">
        <Hero lang={lang} />
        <DailySpecials lang={lang} cart={cart} onAdd={addItem} />
        <MenuSection lang={lang} cart={cart} onAdd={addItem} />
        <About lang={lang} />
        <Gallery lang={lang} />
        <WhyChooseUs lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      <MobileActionBar lang={lang} cartCount={count} openEnquiry={openEnquiry} />

      {count > 0 && (
        <button
          type="button"
          onClick={openEnquiry}
          className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-forest-800 px-5 py-3.5 text-sm font-semibold text-cream-50 shadow-lift transition-colors hover:bg-forest-700 md:flex"
        >
          <ShoppingBag size={16} aria-hidden="true" />
          {lang === 'en' ? 'Takeaway enquiry' : 'టేక్అవే విచారణ'}
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-saffron-400 px-1.5 text-[11px] font-bold text-forest-950">
            {count}
          </span>
        </button>
      )}

      <EnquiryDrawer
        open={enquiryOpen}
        onClose={closeEnquiry}
        lang={lang}
        lines={lines}
        count={count}
        total={total}
        onChangeQty={changeLineQty}
        onClear={clearEnquiry}
      />

      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
};

export default App;
