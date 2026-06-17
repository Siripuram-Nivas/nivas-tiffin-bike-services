import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const MenuSection = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('morning');

  const tabs = [
    { id: 'morning', labelEn: 'Morning Tiffins', labelTe: 'ఉదయం టిఫిన్స్' },
    { id: 'afternoon', labelEn: 'Afternoon Meals', labelTe: 'మధ్యాహ్న భోజనం' },
    { id: 'evening', labelEn: 'Evening Snacks', labelTe: 'సాయంత్రం స్నాక్స్' },
  ];

  const menuData = {
    morning: [
      { nameEn: 'Idli', nameTe: 'ఇడ్లీ', priceFull: 30, priceHalf: 20 },
      { nameEn: 'Dosa', nameTe: 'దోసె', priceFull: 30, priceHalf: 20 },
      { nameEn: 'Puri', nameTe: 'పూరి', priceFull: 30, priceHalf: 20 },
      { nameEn: 'Bonda', nameTe: 'బోండా', priceFull: 30, priceHalf: 20 },
      { nameEn: 'Vada', nameTe: 'వడ', priceFull: 30, priceHalf: 20 },
      { nameEn: 'Chapathi + Chicken Curry', nameTe: 'చపాతీ + చికెన్ కర్రీ', priceFull: 50, priceHalf: null },
    ],
    afternoon: [
      { nameEn: 'Dal Rice', nameTe: 'పప్పు అన్నం', priceFull: 70, priceHalf: null },
      { nameEn: 'Chicken Curry Meals', nameTe: 'చికెన్ కర్రీ మీల్స్', priceFull: 100, priceHalf: null },
      { nameEn: 'Chapathi + Dal', nameTe: 'చపాతీ + పప్పు', priceFull: 40, priceHalf: null },
      { nameEn: 'Chapathi + Chicken Curry', nameTe: 'చపాతీ + చికెన్ కర్రీ', priceFull: 50, priceHalf: null },
      { nameEn: 'Extra Chapathi', nameTe: 'అదనపు చపాతీ (ఒకటి)', priceFull: 15, priceHalf: null },
      { nameEn: 'Mirchi Bajji', nameTe: 'మిర్చి బజ్జీ', priceFull: 30, priceHalf: null },
    ],
    evening: [
      { nameEn: 'Mirchi Bajji', nameTe: 'మిర్చి బజ్జీ', priceFull: 30, priceHalf: 20 },
      { nameEn: 'Punugulu', nameTe: 'పునుగులు', priceFull: 30, priceHalf: null },
      { nameEn: 'Handmade Kara Boondhi', nameTe: 'కారా బూందీ', priceFull: 30, priceHalf: null },
      { nameEn: 'Jonna Rotte', nameTe: 'జొన్న రొట్టె', priceFull: 40, priceHalf: null },
    ]
  };

  return (
    <section className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="heading-md text-brand-charcoal mb-4">
          {lang === 'en' ? 'Our Menu' : 'మా మెనూ'}
        </h2>
        <p className="text-gray-600">
          {lang === 'en' ? 'Fresh homemade food prepared daily.' : 'ప్రతిరోజూ తాజాగా తయారుచేసిన ఇంట్లో భోజనం.'}
        </p>
      </div>

      <div className="flex justify-center mb-8 gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === tab.id 
                ? 'bg-brand-orange text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {lang === 'en' ? tab.labelEn : tab.labelTe}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {menuData[activeTab].map((item, index) => (
              <div key={index} className="p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-lg text-brand-charcoal group-hover:text-brand-orange transition-colors">
                    {lang === 'en' ? item.nameEn : item.nameTe}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-brand-orange font-bold">₹{item.priceFull}</span>
                    {item.priceHalf && (
                      <span className="text-sm bg-orange-50 text-orange-700 px-2 py-0.5 rounded border border-orange-100">
                        {lang === 'en' ? 'Half' : 'హాఫ్'}: ₹{item.priceHalf}
                      </span>
                    )}
                  </div>
                </div>
                <a 
                  href={`tel:+919963090468`}
                  className="bg-gray-50 p-3 rounded-full text-gray-400 hover:text-brand-orange hover:bg-orange-50 transition-colors"
                  title={lang === 'en' ? 'Call to order' : 'ఆర్డర్ చేయడానికి కాల్ చేయండి'}
                >
                  <PhoneCall size={20} />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-8 text-center bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm font-medium text-yellow-800">
            {lang === 'en' 
              ? '💡 No online ordering available. Please call us to check availability or place an order.'
              : '💡 ఆన్‌లైన్ ఆర్డర్ లేదు. దయచేసి ఆర్డర్ చేయడానికి లేదా లభ్యత తెలుసుకోవడానికి మాకు కాల్ చేయండి.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
