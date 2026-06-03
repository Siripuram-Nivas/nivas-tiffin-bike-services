import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BikeFAQ = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      qEn: 'How long does a general bike service take?',
      qTe: 'జనరల్ బైక్ సర్వీస్‌కు ఎంత సమయం పడుతుంది?',
      aEn: 'A standard general service usually takes about 2 to 3 hours depending on the bike\'s condition and current workshop load.',
      aTe: 'సాధారణ జనరల్ సర్వీస్‌కు సుమారు 2 నుండి 3 గంటల సమయం పడుతుంది.',
    },
    {
      qEn: 'Do you provide home pickup and drop?',
      qTe: 'మీరు హోమ్ పికప్ మరియు డ్రాప్ అందిస్తారా?',
      aEn: 'Yes, we offer pickup and drop services within the village and nearby areas for a minimal charge.',
      aTe: 'అవును, మేము గ్రామ పరిధిలో పికప్ మరియు డ్రాప్ సేవలను అందిస్తాము.',
    },
    {
      qEn: 'What is included in the regular maintenance package?',
      qTe: 'రెగ్యులర్ మెయింటెనెన్స్ ప్యాకేజీలో ఏమేమి ఉంటాయి?',
      aEn: 'Our regular package includes engine oil change, brake check, chain lubrication, electrical wiring check, and a thorough water wash.',
      aTe: 'మా రెగ్యులర్ ప్యాకేజీలో ఆయిల్ చేంజ్, బ్రేక్ చెక్, చైన్ లూబ్రికేషన్ మరియు వాటర్ వాష్ ఉంటాయి.',
    },
    {
      qEn: 'Do you repair all brands of motorcycles?',
      qTe: 'మీరు అన్ని బ్రాండ్ల మోటార్‌సైకిళ్లను రిపేర్ చేస్తారా?',
      aEn: 'Yes, we have experienced mechanics who can work on Honda, Bajaj, TVS, Yamaha, Hero, Royal Enfield, and more.',
      aTe: 'అవును, మేము అన్ని ప్రముఖ బ్రాండ్ల బైక్‌లకు సర్వీస్ అందిస్తాము.',
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-cream/50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4 text-brand-charcoal">
            {lang === 'en' ? 'Frequently Asked Questions' : 'తరచుగా అడిగే ప్రశ్నలు'}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset"
              >
                <span className="font-bold text-brand-charcoal">
                  {lang === 'en' ? faq.qEn : faq.qTe}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-brand-blue" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                      {lang === 'en' ? faq.aEn : faq.aTe}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeFAQ;
