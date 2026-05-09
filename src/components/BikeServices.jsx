import React from 'react';
import { Wrench, Settings, Droplets, AlertTriangle, ShieldCheck, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

const BikeServices = ({ lang }) => {
  const services = [
    { icon: <Settings />, nameEn: 'General Servicing', nameTe: 'జనరల్ సర్వీసింగ్' },
    { icon: <AlertTriangle />, nameEn: 'Puncture Repair', nameTe: 'పంచర్ రిపేర్' },
    { icon: <Cog />, nameEn: 'Engine Work', nameTe: 'ఇంజిన్ వర్క్' },
    { icon: <Droplets />, nameEn: 'Oil Change', nameTe: 'ఆయిల్ చేంజ్' },
    { icon: <ShieldCheck />, nameEn: 'Brake Repair', nameTe: 'బ్రేక్ రిపేర్' },
    { icon: <Wrench />, nameEn: 'Daily Maintenance', nameTe: 'రోజువారీ నిర్వహణ' },
  ];

  return (
    <section className="bg-brand-charcoal text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gear background */}
      <div className="absolute opacity-5 -right-20 -top-20">
        <Cog size={400} className="animate-spin-slow" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="heading-md mb-4 text-brand-blue">
              {lang === 'en' ? 'Professional Bike Mechanic' : 'ప్రొఫెషనల్ బైక్ మెకానిక్'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              {lang === 'en' 
                ? 'Expert repair services for all types of motorcycles. Trust us to keep your ride smooth and safe.'
                : 'అన్ని రకాల మోటార్‌సైకిళ్లకు నిపుణులైన రిపేర్ సేవలు. మీ ప్రయాణం సురక్షితంగా సాగడానికి మమ్మల్ని నమ్మండి.'}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-brand-blue transition-colors"
                >
                  <div className="text-brand-blue bg-blue-900/30 p-2 rounded-md">
                    {service.icon}
                  </div>
                  <span className="font-medium text-sm">
                    {lang === 'en' ? service.nameEn : service.nameTe}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-5 flex items-start gap-4">
              <AlertTriangle className="text-red-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-red-400">
                  {lang === 'en' ? 'Emergency Breakdown?' : 'ఎమర్జెన్సీ బ్రేక్‌డౌన్?'}
                </h4>
                <p className="text-sm text-gray-300 mt-1 mb-3">
                  {lang === 'en' 
                    ? 'We provide emergency repair services in the village area.' 
                    : 'గ్రామ పరిధిలో మేము అత్యవసర రిపేర్ సేవలు అందిస్తాము.'}
                </p>
                <a href="tel:+919701513468" className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded transition-colors">
                  {lang === 'en' ? 'Call Mechanic Now' : 'మెకానిక్‌కు కాల్ చేయండి'}
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-2xl mix-blend-overlay"></div>
            <img 
              src="/bike_repair_hero_1778318790816.png" 
              alt="Bike Mechanic at work" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-gray-800"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="font-bold text-2xl mb-1">10+ Years</div>
              <div className="text-sm text-blue-100">
                {lang === 'en' ? 'Experience in Bike Servicing' : 'బైక్ సర్వీసింగ్‌లో అనుభవం'}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BikeServices;
