import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DailySpecials from './components/DailySpecials';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'te' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-[#0F172A] font-sans text-brand-dark dark:text-white transition-colors duration-300">
      <Navbar lang={lang} toggleLang={toggleLang} />

      <main>
        <div id="home">
          <Hero lang={lang} />
        </div>

        <div id="specials">
          <DailySpecials lang={lang} />
        </div>

        <div id="menu">
          <MenuSection lang={lang} />
        </div>

        <div id="why">
          <WhyChooseUs lang={lang} />
        </div>

        <div id="reviews">
          <Reviews lang={lang} />
        </div>

        <div id="contact">
          <Contact lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

export default App;
