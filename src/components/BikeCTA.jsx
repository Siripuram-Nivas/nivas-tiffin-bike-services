import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const BikeCTA = ({ lang }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-brand-charcoal">
            {lang === 'en' ? 'Need Bike Service Today?' : 'ఈరోజు బైక్ సర్వీస్ కావాలా?'}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Our expert mechanics are ready to get your bike running smoothly again. Fast, reliable, and affordable.' 
              : 'మీ బైక్‌ను అద్భుతంగా పనిచేసేలా చేయడానికి మా నిపుణులైన మెకానిక్స్ సిద్ధంగా ఉన్నారు. వేగంగా, నమ్మకంగా మరియు అందుబాటు ధరలో.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919110372978?text=Hello,%20I%20need%20urgent%20bike%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {lang === 'en' ? 'Call Mechanic' : 'మెకానిక్‌కు కాల్ చేయండి'}
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919110372978?text=Hello,%20I%20would%20like%20to%20book%20a%20bike%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-green-600 transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              {lang === 'en' ? 'WhatsApp Mechanic' : 'వాట్సాప్ మెకానిక్'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BikeCTA;
