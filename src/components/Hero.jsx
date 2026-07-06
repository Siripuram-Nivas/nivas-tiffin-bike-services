import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const foodItems = [
  { emoji: '🍽️', name: 'Chicken Curry Meals', price: '₹100', img: '/chicken_curry_meals_1778318885696.png' },
  { emoji: '🌶️', name: 'Mirchi Bajji',         price: '₹30',  img: '/mirchi_bajji_card_1778318867371.png' },
  { emoji: '🥣', name: 'Fresh Punugulu',       price: '₹30',  img: '/punugulu_snacks_1778318929255.png' },
  { emoji: '🫓', name: 'Jonna Rotte',           price: '₹40',  img: '/jonna_rotte_1778320253761.png' },
  { emoji: '🍱', name: 'Kara Boondhi',          price: '₹30',  img: '/kara_boondhi_1778320236218.png' },
];

const FloatingCard = ({ item, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`glass rounded-2xl p-3 shadow-card flex items-center gap-3 ${className}`}
    style={{ animation: `float ${3 + delay}s ease-in-out ${delay * 0.5}s infinite` }}
  >
    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
      <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-bold text-gray-900 dark:text-white truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.name}</p>
      <p className="text-brand-orange font-bold text-sm">{item.price}</p>
    </div>
  </motion.div>
);

const Hero = ({ lang }) => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center pt-[72px] overflow-hidden" aria-label="Hero section">

      {/* Background Orbs - Removed opacity classes, adjusted rgba values to compensate */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 70%)' }} />

      <div className="section-container py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* Open badge */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-200 dark:border-orange-700 shadow-soft mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse shrink-0" />
              <Clock size={13} className="text-brand-orange" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {lang === 'en' ? 'Open Daily: 5:00 AM – 10:30 PM' : 'ప్రతిరోజూ 5:00 AM – 10:30 PM'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp} custom={1} initial="hidden" animate="visible"
              className="heading-lg text-gray-900 dark:text-white mb-6 text-balance"
            >
              {lang === 'en' ? (
                <>
                  Fresh Homemade{' '}
                  <span className="text-gradient">Tiffins</span>
                  <br />Every Day
                  <br />
                  <span className="text-gray-600 dark:text-gray-300 text-3xl md:text-4xl font-semibold">With Traditional Taste</span>
                </>
              ) : (
                <>
                  తాజా ఇంటి{' '}
                  <span className="text-gradient">టిఫిన్స్</span>
                  <br />ప్రతిరోజూ
                  <br />
                  <span className="text-gray-600 dark:text-gray-300 text-3xl md:text-4xl font-semibold">సాంప్రదాయ రుచితో</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp} custom={2} initial="hidden" animate="visible"
              className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
            >
              {lang === 'en'
                ? 'Fresh breakfast, meals and evening snacks prepared daily using quality ingredients.'
                : 'నాణ్యమైన పదార్ధాలతో తయారుచేసిన తాజా అల్పాహారం, భోజనం మరియు సాయంత్రం స్నాక్స్.'}
            </motion.p>

            {/* Notice */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" animate="visible"
              className="flex items-start gap-2 text-sm text-orange-800 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl px-4 py-3 mb-8"
            >
              <span className="text-orange-500 mt-0.5 shrink-0">📞</span>
              <span>
                {lang === 'en'
                  ? "No online delivery. Please call before visiting to confirm today's menu availability."
                  : 'హోమ్ డెలివరీ లేదు. మెనూ నిర్ధారణ కోసం సందర్శించే ముందు కాల్ చేయండి.'}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a href="tel:+919963090468" className="btn-primary" aria-label="Call Nivas Tiffin Center">
                <Phone size={18} />
                {lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}
              </a>
              <a href="#menu" className="btn-outline" aria-label="View our menu">
                <ArrowRight size={18} />
                {lang === 'en' ? 'View Menu' : 'మెనూ చూడండి'}
              </a>
              <a href="https://wa.me/919110372978" target="_blank" rel="noreferrer"
                className="btn-ghost dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-orange dark:hover:text-brand-orange"
                aria-label="WhatsApp Nivas Tiffin Center"
              >
                <FaWhatsapp size={18} className="text-green-500" />
                WhatsApp
              </a>
            </motion.div>

            {/* Info pills */}
            <motion.div
              variants={fadeUp} custom={5} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                { icon: <MapPin size={13} />, text: 'Sundaragiri, Telangana' },
                { icon: <Phone size={13} />, text: '9963090468' },
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                  <span className="text-brand-orange">{pill.icon}</span>
                  {pill.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — food visual */}
          <div className="relative lg:h-[580px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-100 dark:from-gray-800 to-orange-50 dark:to-transparent scale-105 -rotate-2" />
              <div className="relative rounded-3xl overflow-hidden shadow-hover bg-white dark:bg-gray-900">
                <img
                  src="/tiffin_hero_food_1778318760478.png"
                  alt="Fresh Homemade Tiffins and Meals at Nivas Tiffin Center"
                  className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Nivas Tiffin Center</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Sundaragiri, Telangana</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                      <span className="text-xs font-bold">Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <FloatingCard item={foodItems[0]} delay={0.5} className="absolute -top-2 -left-4 lg:-left-12 w-52 z-20 hidden sm:flex bg-white dark:bg-gray-800" />
            <FloatingCard item={foodItems[1]} delay={0.7} className="absolute top-16 -right-4 lg:-right-12 w-52 z-20 hidden sm:flex bg-white dark:bg-gray-800" />
            <FloatingCard item={foodItems[2]} delay={0.9} className="absolute bottom-20 -left-4 lg:-left-12 w-52 z-20 hidden sm:flex bg-white dark:bg-gray-800" />
            <FloatingCard item={foodItems[3]} delay={1.1} className="absolute -bottom-4 right-8 lg:right-4 w-52 z-20 hidden lg:flex bg-white dark:bg-gray-800" />

            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-4 right-4 lg:-right-6 glass bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 z-20 shadow-card"
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl">⭐</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>4.8 / 5</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="hidden lg:flex justify-center mt-12"
        >
          <a href="#specials" className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors group" aria-label="Scroll to specials">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
              <ChevronDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
