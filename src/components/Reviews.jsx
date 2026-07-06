import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1, name: 'Raju Kumar', initials: 'RK',
    textEn: 'Best chicken curry meals in the village! Very authentic taste and neat packing. I visit every Sunday without fail.',
    textTe: 'గ్రామంలో బెస్ట్ చికెన్ కర్రీ మీల్స్! చాలా అద్భుతమైన రుచి. ప్రతి ఆదివారం వెళ్తాను.',
    rating: 5, type: 'Non-Veg Meals', color: 'from-orange-400 to-red-400',
  },
  {
    id: 2, name: 'Venkatesh', initials: 'VK',
    textEn: 'Morning idli is super soft and fresh. Daily customer here! The coconut chutney is amazing.',
    textTe: 'ఉదయం ఇడ్లీ చాలా మృదువుగా ఉంటాయి. నేను రోజువారీ కస్టమర్‌ని!',
    rating: 5, type: 'Morning Tiffins', color: 'from-blue-400 to-indigo-400',
  },
  {
    id: 3, name: 'Suresh Reddy', initials: 'SR',
    textEn: 'Mirchi bajji is absolutely crispy and delicious. Evening snacks here are the best in town!',
    textTe: 'మిర్చి బజ్జీ చాలా క్రిస్పీగా మరియు రుచికరంగా ఉంటుంది. సాయంత్రం స్నాక్స్ అద్భుతం!',
    rating: 5, type: 'Evening Snacks', color: 'from-green-400 to-teal-400',
  },
  {
    id: 4, name: 'Padma Devi', initials: 'PD',
    textEn: 'The jonna rotte here is just like home. Very healthy and filling. Prices are very reasonable!',
    textTe: 'ఇక్కడ జొన్న రొట్టె ఇంటి రుచిలా ఉంటుంది. చాలా ఆరోగ్యకరమైనది!',
    rating: 4, type: 'Traditional Food', color: 'from-purple-400 to-pink-400',
  },
  {
    id: 5, name: 'Kiran Kumar', initials: 'KK',
    textEn: 'Punugulu are fresh and crunchy every single evening. The kara boondhi is also excellent. Highly recommended!',
    textTe: 'పునుగులు ప్రతి సాయంత్రం తాజాగా మరియు క్రంచీగా ఉంటాయి. చాలా బాగుంది!',
    rating: 5, type: 'Snacks', color: 'from-yellow-400 to-orange-400',
  },
];

const StarRating = ({ count, max = 5 }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of ${max} stars`}>
    {Array.from({ length: max }, (_, i) => (
      <Star key={i} size={16} className={i < count ? 'star-filled' : 'text-gray-300 dark:text-gray-600 fill-gray-300 dark:fill-gray-600'} />
    ))}
  </div>
);

const Reviews = ({ lang }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index, dir = 1) => { setDirection(dir); setCurrent(index); }, []);
  const next = useCallback(() => goTo((current + 1) % reviews.length, 1), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + reviews.length) % reviews.length, -1), [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit:  (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  };

  const review = reviews[current];

  return (
    <section className="py-20 md:py-28 bg-brand-dark dark:bg-[#0A0F1A] relative overflow-hidden" aria-label="Customer Reviews">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FF6B00 0%, transparent 50%), radial-gradient(circle at 70% 50%, #F97316 0%, transparent 50%)' }} />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold mb-5">
            <Star size={13} className="text-yellow-400 fill-yellow-400" />
            {lang === 'en' ? 'Customer Love' : 'కస్టమర్ రివ్యూలు'}
          </div>
          <h2 className="heading-md text-white mb-3">
            {lang === 'en' ? 'What Our Customers Say' : 'మా కస్టమర్లు ఏమంటున్నారు'}
          </h2>
          <div className="flex justify-center gap-1 mt-3 mb-2">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} size={22} className="star-filled" />)}
          </div>
          <p className="text-gray-400 font-medium text-sm">4.8 / 5 · Based on customer visits</p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                {/* Glass card — uses light glass on dark section background */}
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                >
                  <div className="absolute top-6 right-8 opacity-10">
                    <Quote size={64} className="text-brand-orange fill-brand-orange" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-orange-100/20 text-orange-300 rounded-full text-xs font-bold mb-5 border border-orange-400/20">
                    {review.type}
                  </span>
                  <StarRating count={review.rating} />
                  <blockquote className="mt-4 text-gray-100 text-lg leading-relaxed italic mb-6">
                    "{lang === 'en' ? review.textEn : review.textTe}"
                  </blockquote>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>{review.name}</p>
                      <p className="text-xs text-gray-400">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200" aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Review navigation">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-brand-orange' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to review ${i + 1}`}
                  aria-selected={i === current}
                  role="tab"
                />
              ))}
            </div>
            <button onClick={next} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200" aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
