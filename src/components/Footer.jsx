import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/nivas_logo_1778318840012.png" alt="Logo" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold text-xl text-white">Nivas</h3>
                <p className="text-brand-orange text-sm font-semibold">Tiffin & Bike Repair</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {lang === 'en' 
                ? 'Your trusted local destination for authentic homemade meals and professional motorcycle repair services.'
                : 'స్వచ్ఛమైన ఇంటి భోజనం మరియు నమ్మకమైన బైక్ రిపేర్ సేవల కోసం మీ స్థానిక గమ్యస్థానం.'}
            </p>
            <div className="flex gap-4">
              <a href="tel:+919963090468" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://wa.me/919110372978" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {lang === 'en' ? 'Quick Links' : 'క్విక్ లింక్స్'}
            </h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">{lang === 'en' ? 'Home' : 'హోమ్'}</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">{lang === 'en' ? 'Tiffin Menu' : 'టిఫిన్ మెనూ'}</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">{lang === 'en' ? 'Bike Services' : 'బైక్ సర్వీస్'}</a></li>
              <li><a href="#reviews" className="hover:text-brand-orange transition-colors">{lang === 'en' ? 'Reviews' : 'రివ్యూలు'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {lang === 'en' ? 'Services' : 'మా సేవలు'}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>{lang === 'en' ? '✅ Morning Tiffins' : '✅ ఉదయం టిఫిన్స్'}</li>
              <li>{lang === 'en' ? '✅ Afternoon Meals' : '✅ మధ్యాహ్న భోజనం'}</li>
              <li>{lang === 'en' ? '✅ Evening Snacks' : '✅ సాయంత్రం స్నాక్స్'}</li>
              <li>{lang === 'en' ? '✅ General Servicing' : '✅ జనరల్ సర్వీసింగ్'}</li>
              <li>{lang === 'en' ? '✅ Emergency Repairs' : '✅ ఎమర్జెన్సీ రిపేర్'}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Nivas Tiffin & Bike Repair Services. {lang === 'en' ? 'All rights reserved.' : 'సర్వ హక్కులు ప్రత్యేకించబడినవి.'}</p>
          <p className="flex items-center gap-1">
            {lang === 'en' ? 'Built for the Local Community' : 'స్థానిక ప్రజల కోసం నిర్మించబడింది'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
