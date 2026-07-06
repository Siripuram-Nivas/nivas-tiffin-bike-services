import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Utensils } from 'lucide-react';

const menuData = {
  morning: [
    { nameEn: 'Idli',                     nameTe: 'ఇడ్లీ',                   priceFull: 30,  priceHalf: 20,  isVeg: true  },
    { nameEn: 'Dosa',                     nameTe: 'దోసె',                    priceFull: 30,  priceHalf: 20,  isVeg: true  },
    { nameEn: 'Puri',                     nameTe: 'పూరి',                    priceFull: 30,  priceHalf: 20,  isVeg: true  },
    { nameEn: 'Bonda',                    nameTe: 'బోండా',                   priceFull: 30,  priceHalf: 20,  isVeg: true  },
    { nameEn: 'Vada',                     nameTe: 'వడ',                      priceFull: 30,  priceHalf: 20,  isVeg: true  },
    { nameEn: 'Chapathi + Chicken Curry', nameTe: 'చపాతీ + చికెన్ కర్రీ',    priceFull: 50,  priceHalf: null, isVeg: false },
  ],
  afternoon: [
    { nameEn: 'Dal Rice',                 nameTe: 'పప్పు అన్నం',              priceFull: 70,  priceHalf: null, isVeg: true  },
    { nameEn: 'Chicken Curry Meals',      nameTe: 'చికెన్ కర్రీ మీల్స్',      priceFull: 100, priceHalf: null, isVeg: false },
    { nameEn: 'Chapathi + Dal',           nameTe: 'చపాతీ + పప్పు',            priceFull: 40,  priceHalf: null, isVeg: true  },
    { nameEn: 'Chapathi + Chicken Curry', nameTe: 'చపాతీ + చికెన్ కర్రీ',    priceFull: 50,  priceHalf: null, isVeg: false },
    { nameEn: 'Extra Chapathi',           nameTe: 'అదనపు చపాతీ (ఒకటి)',      priceFull: 15,  priceHalf: null, isVeg: true  },
    { nameEn: 'Mirchi Bajji',             nameTe: 'మిర్చి బజ్జీ',              priceFull: 30,  priceHalf: null, isVeg: true  },
  ],
  evening: [
    { nameEn: 'Mirchi Bajji',             nameTe: 'మిర్చి బజ్జీ',              priceFull: 30,  priceHalf: 20,  isVeg: true  },
    { nameEn: 'Punugulu',                 nameTe: 'పునుగులు',                 priceFull: 30,  priceHalf: null, isVeg: true  },
    { nameEn: 'Handmade Kara Boondhi',    nameTe: 'కారా బూందీ',               priceFull: 30,  priceHalf: null, isVeg: true  },
    { nameEn: 'Jonna Rotte',              nameTe: 'జొన్న రొట్టె',              priceFull: 40,  priceHalf: null, isVeg: true  },
  ],
};

const tabs = [
  { id: 'morning',   labelEn: '☀️ Morning Tiffins',  labelTe: '☀️ ఉదయం టిఫిన్స్',    time: '5 AM – 11 AM' },
  { id: 'afternoon', labelEn: '🌤️ Afternoon Meals',  labelTe: '🌤️ మధ్యాహ్న భోజనం',    time: '11 AM – 3 PM' },
  { id: 'evening',   labelEn: '🌙 Evening Snacks',   labelTe: '🌙 సాయంత్రం స్నాక్స్',  time: '4 PM – 10:30 PM' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MenuCard = ({ item, lang, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="group relative bg-white dark:bg-gray-800 rounded-2xl
               border border-brand-border dark:border-gray-700
               shadow-soft hover:shadow-card transition-all duration-300
               p-4 flex items-center justify-between gap-3"
  >
    <div className="flex items-center gap-3 min-w-0">
      {/* Veg/Non-veg indicator */}
      <div className={`w-5 h-5 shrink-0 rounded-sm border-2 flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
        <div className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-brand-dark dark:text-white group-hover:text-brand-orange transition-colors duration-200 truncate"
          style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {lang === 'en' ? item.nameEn : item.nameTe}
        </h4>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-brand-orange font-bold text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>₹{item.priceFull}</span>
          {item.priceHalf && (
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded-full border border-orange-100 dark:border-orange-800 font-semibold"
            >
              {lang === 'en' ? 'Half' : 'హాఫ్'}: ₹{item.priceHalf}
            </motion.span>
          )}
        </div>
      </div>
    </div>

    <a
      href="tel:+919963090468"
      className="shrink-0 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400
                 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-brand-orange
                 border border-transparent hover:border-orange-100 dark:hover:border-orange-800
                 transition-all duration-200"
      title={lang === 'en' ? 'Call to confirm availability' : 'లభ్యత కోసం కాల్ చేయండి'}
      aria-label={`Call to order ${lang === 'en' ? item.nameEn : item.nameTe}`}
    >
      <PhoneCall size={17} />
    </a>
  </motion.div>
);

const MenuSection = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('morning');

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0F172A]" aria-label="Menu section">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300">
            <Utensils size={14} />
            {lang === 'en' ? 'Full Menu' : 'పూర్తి మెనూ'}
          </div>
          <h2 className="heading-md text-brand-dark dark:text-white mb-4">
            {lang === 'en' ? 'Our Menu' : 'మా మెనూ'}
          </h2>
          <div className="divider" />
          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-lg mx-auto">
            {lang === 'en'
              ? 'Fresh homemade food prepared daily with quality ingredients. Prices may vary — call to confirm.'
              : 'నాణ్యమైన పదార్ధాలతో ప్రతిరోజూ తాజాగా తయారుచేసిన ఇంటి భోజనం.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1.5 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-brand-orange shadow-soft'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {lang === 'en' ? tab.labelEn : tab.labelTe}
                {activeTab === tab.id && (
                  <>
                    <motion.span
                      layoutId="tab-bg"
                      className="absolute inset-0 bg-white dark:bg-gray-700 rounded-xl shadow-soft -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                    <div className="text-xs text-gray-500 dark:text-gray-500 font-normal block mt-0.5 leading-tight">{tab.time}</div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 gap-3"
              role="tabpanel"
            >
              {menuData[activeTab].map((item, index) => (
                <MenuCard key={`${activeTab}-${index}`} item={item} lang={lang} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/40 rounded-2xl p-5 flex items-start gap-3"
          >
            <span className="text-amber-500 text-lg shrink-0">💡</span>
            <p className="text-sm text-amber-800 dark:text-amber-300 font-medium leading-relaxed">
              {lang === 'en'
                ? 'No online ordering available. Please call us to check item availability before visiting. Menu availability may vary daily.'
                : 'ఆన్‌లైన్ ఆర్డర్ లేదు. సందర్శించే ముందు వస్తువుల లభ్యత తెలుసుకోవడానికి మాకు కాల్ చేయండి.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
