import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DailySpecials from './components/DailySpecials';
import BikeServices from './components/BikeServices';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceProcess from './components/ServiceProcess';
import BikeFAQ from './components/BikeFAQ';
import MechanicGallery from './components/MechanicGallery';
import StatsCounters from './components/StatsCounters';
import BikeCTA from './components/BikeCTA';
import BikeCareTips from './components/BikeCareTips';
import MechanicTestimonials from './components/MechanicTestimonials';
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
          <WhyChooseUs lang={lang} />
          <ServiceProcess lang={lang} />
          <BikeCareTips lang={lang} />
          <MechanicGallery lang={lang} />
          <StatsCounters lang={lang} />
          <BikeFAQ lang={lang} />
          <MechanicTestimonials lang={lang} />
          <BikeCTA lang={lang} />
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
