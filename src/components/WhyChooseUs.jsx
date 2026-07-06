import { motion } from 'framer-motion';
import { Leaf, Heart, BadgeIndianRupee, ShieldCheck, Soup, Smile } from 'lucide-react';

const features = [
  {
    id: 1, Icon: Leaf,
    titleEn: 'Fresh Daily',        titleTe: 'రోజూ తాజా',
    descEn:  'Every item is prepared fresh every single morning. No leftovers, no reheating — ever.',
    descTe:  'ప్రతి రోజూ ఉదయమే తాజాగా తయారుచేస్తాం. మళ్ళీ వేడి చేయడం జరగదు.',
    color: 'from-green-400 to-emerald-500', bg: 'bg-green-50 dark:bg-green-900/10',
    border: 'border-green-100 dark:border-green-800/30', glow: 'rgba(34, 197, 94, 0.15)',
  },
  {
    id: 2, Icon: Heart,
    titleEn: 'Homemade',           titleTe: 'ఇంటి రుచి',
    descEn:  'Cooked with love using time-tested family recipes passed down through generations.',
    descTe:  'తరతరాలుగా వచ్చిన కుటుంబ వంట పద్ధతులతో ప్రేమగా వండుతాం.',
    color: 'from-red-400 to-rose-500', bg: 'bg-red-50 dark:bg-red-900/10',
    border: 'border-red-100 dark:border-red-800/30', glow: 'rgba(239, 68, 68, 0.15)',
  },
  {
    id: 3, Icon: BadgeIndianRupee,
    titleEn: 'Affordable Prices',  titleTe: 'సరసమైన ధరలు',
    descEn:  'Quality food at prices everyone can afford. Starting from just ₹15 per item.',
    descTe:  'అందరికీ అందుబాటులో ఉండే ధరలలో నాణ్యమైన ఆహారం. ₹15 నుండి మొదలు.',
    color: 'from-brand-orange to-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/10',
    border: 'border-orange-100 dark:border-orange-800/30', glow: 'rgba(255, 107, 0, 0.15)',
  },
  {
    id: 4, Icon: ShieldCheck,
    titleEn: 'Quality Ingredients', titleTe: 'నాణ్యమైన పదార్ధాలు',
    descEn:  'Only the best locally sourced, fresh ingredients — no artificial additives or preservatives.',
    descTe:  'స్థానిక తాజా పదార్ధాలే వాడతాం — కృత్రిమ రంగులు లేదా preservatives లేవు.',
    color: 'from-blue-400 to-indigo-500', bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-100 dark:border-blue-800/30', glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: 5, Icon: Soup,
    titleEn: 'Traditional Recipes', titleTe: 'సాంప్రదాయ వంటలు',
    descEn:  'Authentic Telugu flavors — Idli, Dosa, Jonna Rotte, Punugulu — just like grandmother used to make.',
    descTe:  'అసలైన తెలుగు రుచులు — అమ్మమ్మ చేసినట్టే ఉంటాయి.',
    color: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50 dark:bg-amber-900/10',
    border: 'border-amber-100 dark:border-amber-800/30', glow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 6, Icon: Smile,
    titleEn: 'Friendly Service',   titleTe: 'మైత్రీపూర్వకమైన సేవ',
    descEn:  'We treat every customer like family. Come in, feel at home, and leave satisfied.',
    descTe:  'ప్రతి కస్టమర్‌ని కుటుంబ సభ్యుడిలా చూస్తాం. వచ్చి ఇంటి వాతావరణం అనుభవించండి.',
    color: 'from-purple-400 to-violet-500', bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-100 dark:border-purple-800/30', glow: 'rgba(139, 92, 246, 0.15)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WhyChooseUs = ({ lang }) => (
  <section className="py-20 md:py-28 bg-white dark:bg-[#0F172A] relative overflow-hidden" aria-label="Why Choose Nivas Tiffin Center">
    <div className="absolute inset-0 opacity-40 dark:opacity-20"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,107,0,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(249,115,22,0.04) 0%, transparent 50%)' }} />

    <div className="section-container relative z-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <div className="section-label dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300">
          <Heart size={14} />
          {lang === 'en' ? 'Our Promise' : 'మా వాగ్దానం'}
        </div>
        <h2 className="heading-md text-brand-dark dark:text-white mb-4">
          {lang === 'en' ? 'Why Choose Us?' : 'ఎందుకు మా దగ్గరికి వస్తారు?'}
        </h2>
        <div className="divider" />
        <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-xl mx-auto leading-relaxed">
          {lang === 'en'
            ? "We're not just a tiffin center — we're a part of your daily routine. Here's what sets us apart."
            : 'మేము కేవలం టిఫిన్ సెంటర్ మాత్రమే కాదు — మీ రోజువారీ జీవితంలో భాగం.'}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => {
          const { Icon } = feature;
          return (
            <motion.article
              key={feature.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group relative p-6 rounded-3xl ${feature.bg} border ${feature.border} cursor-default overflow-hidden`}
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
              aria-label={lang === 'en' ? feature.titleEn : feature.titleTe}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${feature.glow} 0%, transparent 70%)` }}
              />

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} />
              </div>

              <h3 className="font-bold text-lg text-brand-dark dark:text-white mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {lang === 'en' ? feature.titleEn : feature.titleTe}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'en' ? feature.descEn : feature.descTe}
              </p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
