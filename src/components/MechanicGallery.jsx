import React from 'react';
import { motion } from 'framer-motion';

const MechanicGallery = ({ lang }) => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleEn: 'Workshop Area',
      titleTe: 'వర్క్‌షాప్ ఏరియా'
    },
    {
      src: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleEn: 'Engine Service',
      titleTe: 'ఇంజిన్ సర్వీస్'
    },
    {
      src: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleEn: 'Repair Work',
      titleTe: 'రిపేర్ వర్క్'
    },
    {
      src: 'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      titleEn: 'Customer Bikes',
      titleTe: 'కస్టమర్ బైక్‌లు'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4 text-brand-charcoal">
            {lang === 'en' ? 'Our Workshop Gallery' : 'మా వర్క్‌షాప్ గ్యాలరీ'}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Take a look at our workspace and the quality of work we deliver every day.' 
              : 'మా పని ప్రదేశం మరియు మేము అందించే నాణ్యమైన సేవలను చూడండి.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group overflow-hidden rounded-xl shadow-md h-64"
            >
              <img 
                src={img.src} 
                alt={lang === 'en' ? img.titleEn : img.titleTe} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-bold text-lg">
                  {lang === 'en' ? img.titleEn : img.titleTe}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanicGallery;
