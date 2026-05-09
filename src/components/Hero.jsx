import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = ({ lang }) => {
  return (
    <div className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-blue/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <Clock size={14} className="text-brand-orange" />
              <span className="text-sm font-semibold text-gray-700">
                {lang === 'en' ? 'Open Daily: 5:00 AM - 10:30 PM' : 'ప్రతిరోజూ ఉదయం 5 నుండి రాత్రి 10:30 వరకు'}
              </span>
            </div>
            
            <h1 className="heading-lg mb-6 leading-tight">
              {lang === 'en' ? (
                <>Fresh Homemade Food & <br/><span className="text-brand-orange">Trusted Bike Repairs</span></>
              ) : (
                <>తాజా ఇంట్లో చేసిన భోజనం & <br/><span className="text-brand-orange">నమ్మకమైన బైక్ రిపేర్లు</span></>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              {lang === 'en' 
                ? 'Your local village spot for authentic hot meals and professional motorcycle mechanic services.'
                : 'రుచికరమైన వేడి వేడి భోజనం మరియు ప్రొఫెషనల్ బైక్ మెకానిక్ సేవల కోసం మన ఊరి సరైన స్థలం.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919963090468" className="btn-primary flex items-center gap-2">
                <Phone size={20} />
                {lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}
              </a>
              <a href="https://wa.me/919110372978" target="_blank" rel="noreferrer" className="btn-outline border-green-500 text-green-600 hover:bg-green-500 flex items-center gap-2 bg-white">
                <FaWhatsapp size={20} />
                {lang === 'en' ? 'WhatsApp' : 'వాట్సాప్'}
              </a>
              <a href="https://maps.google.com/?q=18.194619,79.199441" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-100 bg-white">
                <MapPin size={20} />
                {lang === 'en' ? 'Location' : 'లొకేషన్'}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4 pt-12">
              <img 
                src="/tiffin_hero_food_1778318760478.png" 
                alt="Homemade Tiffin" 
                className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover"
              />
              <div className="bg-white p-4 rounded-xl shadow-md border border-brand-orange/20">
                <h3 className="font-bold text-brand-orange">Tiffin Center</h3>
                <p className="text-sm text-gray-600">Fresh every morning</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-charcoal p-4 rounded-xl shadow-md text-white border border-gray-700">
                <h3 className="font-bold text-brand-blue">Bike Mechanic</h3>
                <p className="text-sm text-gray-400">Expert repair services</p>
              </div>
              <img 
                src="/bike_repair_hero_1778318790816.png" 
                alt="Bike Repair" 
                className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover"
              />
            </div>
            
            {/* Center overlapping circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-2xl z-20 hidden md:block">
              <img src="/nivas_logo_1778318840012.png" alt="Nivas" className="w-16 h-16 rounded-full" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
