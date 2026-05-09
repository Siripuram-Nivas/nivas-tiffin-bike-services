import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DailySpecials from './components/DailySpecials';
import BikeServices from './components/BikeServices';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'te' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-cream/30 font-sans text-brand-charcoal">
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
        
        <div id="services">
          <BikeServices lang={lang} />
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
