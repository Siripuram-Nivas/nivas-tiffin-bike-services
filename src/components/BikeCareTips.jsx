import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ShieldAlert, Settings, BatteryCharging, CalendarCheck } from 'lucide-react';

const BikeCareTips = ({ lang }) => {
  const tips = [
    {
      id: 1,
      icon: <Droplets className="w-8 h-8 text-white" />,
      titleEn: 'Change Engine Oil Regularly',
      titleTe: 'క్రమం తప్పకుండా ఇంజిన్ ఆయిల్ మార్చండి',
      bgColor: 'bg-blue-500'
    },
    {
      id: 2,
      icon: <ShieldAlert className="w-8 h-8 text-white" />,
      titleEn: 'Check Brakes Frequently',
      titleTe: 'తరచుగా బ్రేక్‌లను తనిఖీ చేయండి',
      bgColor: 'bg-red-500'
    },
    {
      id: 3,
      icon: <Settings className="w-8 h-8 text-white" />,
      titleEn: 'Maintain Chain Lubrication',
      titleTe: 'చైన్ లూబ్రికేషన్ నిర్వహించండి',
      bgColor: 'bg-gray-700'
    },
    {
      id: 4,
      icon: <BatteryCharging className="w-8 h-8 text-white" />,
      titleEn: 'Monitor Battery Health',
      titleTe: 'బ్యాటరీ ఆరోగ్యాన్ని పర్యవేక్షించండి',
      bgColor: 'bg-green-500'
    },
    {
      id: 5,
      icon: <CalendarCheck className="w-8 h-8 text-white" />,
      titleEn: 'Service Bike Periodically',
      titleTe: 'క్రమానుగతంగా బైక్‌ను సర్వీస్ చేయించండి',
      bgColor: 'bg-brand-orange'
    }
  ];

  return (
    <section className="bg-brand-cream/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-brand-charcoal">
            {lang === 'en' ? 'Bike Care Tips' : 'బైక్ కేర్ చిట్కాలు'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Simple habits to keep your motorcycle running smoothly and avoid costly repairs.'
              : 'ఖరీదైన రిపేర్లను నివారించడానికి సులభమైన అలవాట్లు.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tips.map((tip, idx) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${tip.bgColor} rounded-2xl p-6 shadow-lg text-center flex flex-col items-center justify-center min-h-[180px] cursor-pointer`}
            >
              <div className="mb-4 bg-white/20 p-3 rounded-full">
                {tip.icon}
              </div>
              <h3 className="text-white font-bold text-sm">
                {lang === 'en' ? tip.titleEn : tip.titleTe}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeCareTips;
