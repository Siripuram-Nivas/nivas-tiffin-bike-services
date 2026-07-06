import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home',     labelEn: 'Home',        labelTe: 'హోమ్' },
    { href: '#specials', labelEn: 'Specials',     labelTe: 'స్పెషల్స్' },
    { href: '#menu',     labelEn: 'Tiffin Menu',  labelTe: 'టిఫిన్ మెనూ' },
    { href: '#reviews',  labelEn: 'Reviews',      labelTe: 'రివ్యూలు' },
    { href: '#contact',  labelEn: 'Contact',      labelTe: 'సంప్రదించండి' },
  ];

  const services = [
    { labelEn: 'Morning Tiffins (5 AM–11 AM)',    labelTe: 'ఉదయం టిఫిన్స్ (5 AM–11 AM)' },
    { labelEn: 'Afternoon Meals (11 AM–3 PM)',    labelTe: 'మధ్యాహ్న భోజనం (11 AM–3 PM)' },
    { labelEn: 'Evening Snacks (4 PM–10:30 PM)',  labelTe: 'సాయంత్రం స్నాక్స్ (4 PM–10:30 PM)' },
  ];

  return (
    /* Footer is intentionally dark in both themes — premium dark footer pattern */
    <footer className="bg-gray-900 dark:bg-[#0A0F1A] text-gray-300" aria-label="Site footer">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/nivas_logo_1778318840012.png" alt="Nivas Tiffin Center Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-orange/30" />
              <div>
                <h3 className="font-bold text-xl text-white leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>Nivas</h3>
                <p className="text-brand-orange text-xs font-semibold uppercase tracking-wide">Tiffin Center</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {lang === 'en'
                ? 'Your trusted local destination for authentic homemade tiffins and fresh daily meals in Sundaragiri, Telangana.'
                : 'సుందరగిరి, తెలంగాణలో స్వచ్ఛమైన ఇంటి టిఫిన్స్ మరియు తాజా భోజనం కోసం మీ విశ్వసనీయ స్థానం.'}
            </p>
            <div className="flex gap-3">
              <a href="tel:+919963090468" className="p-2.5 rounded-xl bg-white/10 hover:bg-brand-orange text-white transition-all duration-200" aria-label="Call Nivas Tiffin Center">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/919110372978" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-green-500 text-white transition-all duration-200" aria-label="WhatsApp Nivas Tiffin Center">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://maps.google.com/?q=18.194619,79.199441" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500 text-white transition-all duration-200" aria-label="View on Google Maps">
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {lang === 'en' ? 'Quick Links' : 'క్విక్ లింక్స్'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {lang === 'en' ? link.labelEn : link.labelTe}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {lang === 'en' ? 'Opening Hours' : 'పనివేళలు'}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-brand-orange shrink-0" />
                <div>
                  <p className="text-white font-semibold">5:00 AM – 10:30 PM</p>
                  <p className="text-gray-500 text-xs">{lang === 'en' ? 'Open All Days' : 'అన్ని రోజులు'}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-3">
                {services.map((s, i) => (
                  <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="text-brand-success mt-0.5 shrink-0">✓</span>
                    {lang === 'en' ? s.labelEn : s.labelTe}
                  </li>
                ))}
              </ul>
              <div className="mt-3 px-3 py-2 rounded-xl bg-red-900/30 border border-red-800/40 text-xs text-red-300">
                🚫 {lang === 'en' ? 'No Home Delivery' : 'హోమ్ డెలివరీ లేదు'}
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {lang === 'en' ? 'Location' : 'లొకేషన్'}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={15} className="text-brand-orange shrink-0 mt-0.5" />
                <span>55VX+VRM, Sundaragiri,<br />Telangana – 505467</span>
              </div>
              <div className="flex flex-col gap-2">
                <a href="tel:+919963090468" className="flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors" aria-label="Call 9963090468">
                  <Phone size={13} className="text-brand-orange" />9963090468
                </a>
                <a href="tel:+919701513468" className="flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors" aria-label="Call 9701513468">
                  <Phone size={13} className="text-brand-orange" />9701513468
                </a>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=55VX%2BVRM+Sundaragiri+Telangana+505467" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-brand-orange hover:underline font-semibold"
                aria-label="View on Google Maps"
              >
                <MapPin size={12} />
                {lang === 'en' ? 'View on Google Maps' : 'గూగుల్ మ్యాప్స్‌లో చూడండి'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {currentYear} Nivas Tiffin Center. {lang === 'en' ? 'All rights reserved.' : 'సర్వ హక్కులు ప్రత్యేకించబడినవి.'}</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success" />
            {lang === 'en' ? 'Built for the Local Community of Sundaragiri' : 'సుందరగిరి స్థానిక ప్రజల కోసం నిర్మించబడింది'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
