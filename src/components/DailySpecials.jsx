import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles, Star } from 'lucide-react';

const specials = [
  {
    id: 1,
    nameEn: 'Chicken Curry Meals',
    nameTe: 'చికెన్ కర్రీ మీల్స్',
    price: '₹100',
    image: '/chicken_curry_meals_1778318885696.png',
    tagEn: 'Hot & Spicy',
    tagTe: 'హాట్ & స్పైసీ',
    isNonVeg: true,
    isBestSeller: true,
    waText: 'Hello, is Chicken Curry Meals available now?',
  },
  {
    id: 2,
    nameEn: 'Fresh Punugulu',
    nameTe: 'వేడి వేడి పునుగులు',
    price: '₹30',
    image: '/punugulu_snacks_1778318929255.png',
    tagEn: 'Evening Special',
    tagTe: 'సాయంత్రం స్పెషల్',
    isNonVeg: false,
    isBestSeller: false,
    waText: 'Hello, is Fresh Punugulu available now?',
  },
  {
    id: 3,
    nameEn: 'Crispy Mirchi Bajji',
    nameTe: 'క్రిస్పీ మిర్చి బజ్జీ',
    price: '₹30',
    image: '/mirchi_bajji_card_1778318867371.png',
    tagEn: 'Customer Favorite',
    tagTe: 'కస్టమర్ ఫేవరెట్',
    isNonVeg: false,
    isBestSeller: true,
    waText: 'Hello, is Mirchi Bajji available now?',
  },
  {
    id: 4,
    nameEn: 'Handmade Kara Boondhi',
    nameTe: 'కారా బూందీ',
    price: '₹30',
    image: '/kara_boondhi_1778320236218.png',
    tagEn: 'Snack',
    tagTe: 'స్నాక్',
    isNonVeg: false,
    isBestSeller: false,
    waText: 'Hello, is Kara Boondhi available now?',
  },
  {
    id: 5,
    nameEn: 'Fresh Jonna Rotte',
    nameTe: 'జొన్న రొట్టె',
    price: '₹40',
    image: '/jonna_rotte_1778320253761.png',
    tagEn: 'Traditional',
    tagTe: 'సాంప్రదాయం',
    isNonVeg: false,
    isBestSeller: false,
    waText: 'Hello, is Jonna Rotte available now?',
  },
];

const SpecialCard = ({ item, lang, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6 }}
    className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden
               shadow-card hover:shadow-hover border border-brand-border dark:border-gray-700
               transition-all duration-300 flex flex-col"
    aria-label={lang === 'en' ? item.nameEn : item.nameTe}
  >
    {/* Best Seller badge */}
    {item.isBestSeller && (
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-orange">
        <Star size={9} fill="white" />
        {lang === 'en' ? 'Best Seller' : 'బెస్ట్ సెల్లర్'}
      </div>
    )}

    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={item.image}
        alt={lang === 'en' ? item.nameEn : item.nameTe}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Tag badge */}
      <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
        {lang === 'en' ? item.tagEn : item.tagTe}
      </div>

      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-bold text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.price}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex items-start gap-2 mb-2">
        <div className={`mt-1.5 w-3.5 h-3.5 rounded-sm border-2 shrink-0 flex items-center justify-center ${item.isNonVeg ? 'border-red-600' : 'border-green-600'}`}>
          <div className={`w-2 h-2 rounded-full ${item.isNonVeg ? 'bg-red-600' : 'bg-green-600'}`} />
        </div>
        <h3 className="font-bold text-brand-dark dark:text-white text-base leading-snug" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {lang === 'en' ? item.nameEn : item.nameTe}
        </h3>
      </div>

      <div className="mb-4">
        <span className="text-brand-orange font-bold text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.price}</span>
        <span className="text-xs text-gray-500 dark:text-gray-500 ml-1">{lang === 'en' ? 'per plate' : 'ప్లేట్'}</span>
      </div>

      <a
        href={`https://wa.me/919110372978?text=${encodeURIComponent(item.waText)}`}
        target="_blank"
        rel="noreferrer"
        className="mt-auto w-full flex items-center justify-center gap-2
                   bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30
                   text-green-700 dark:text-green-400 font-semibold py-2.5 rounded-2xl
                   border border-green-200 dark:border-green-800 transition-colors duration-200 text-sm"
        aria-label={`Check availability of ${lang === 'en' ? item.nameEn : item.nameTe}`}
      >
        <FaWhatsapp size={16} className="text-green-600 dark:text-green-400" />
        {lang === 'en' ? 'Check Availability' : 'లభ్యత తనిఖీ చేయండి'}
      </a>
    </div>
  </motion.article>
);

const DailySpecials = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" aria-label="Daily Specials">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream dark:from-[#0F172A] to-orange-50/50 dark:to-gray-900/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 dark:via-orange-800 to-transparent" />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-orange text-white text-sm font-bold mb-6 shadow-orange">
            <Sparkles size={14} />
            {lang === 'en' ? "Today's Picks" : "ఈ రోజు స్పెషల్స్"}
          </div>

          <h2 className="heading-md text-brand-dark dark:text-white mb-4">
            {lang === 'en' ? (
              <>Today's <span className="text-gradient" style={{ animation: 'glow 2s ease-in-out infinite alternate' }}>Special</span></>
            ) : (
              <>ఈ రోజు <span className="text-gradient">స్పెషల్</span></>
            )}
          </h2>

          <div className="divider" />

          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-5 leading-relaxed">
            {lang === 'en'
              ? 'Freshly prepared specials for today. Call or WhatsApp to check availability — they sell out fast!'
              : 'ఈరోజు తాజాగా తయారుచేసిన స్పెషల్స్. వాట్సాప్ లేదా కాల్ చేయండి — త్వరగా అమ్ముడవుతాయి!'}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['🍗 Chicken Curry Meals', '🟡 Fresh Punugulu', '🌶️ Hot Mirchi Bajji', '🫙 Handmade Kara Boondhi'].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-soft"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {specials.map((item, idx) => (
            <SpecialCard key={item.id} item={item} lang={lang} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919110372978?text=Hello%20Nivas%20Tiffin%20Center!%20What%20are%20today%27s%20specials?"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-orange dark:hover:text-brand-orange inline-flex items-center gap-2"
            aria-label="Ask about today's specials on WhatsApp"
          >
            <FaWhatsapp size={18} className="text-green-500" />
            {lang === 'en' ? "Ask about today's specials" : "ఈ రోజు స్పెషల్స్ అడగండి"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DailySpecials;
