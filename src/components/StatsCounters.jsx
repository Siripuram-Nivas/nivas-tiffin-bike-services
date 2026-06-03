import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + '+';
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef} className="font-bold">{from}+</span>;
};

const StatsCounters = ({ lang }) => {
  const stats = [
    { value: 5000, labelEn: 'Bikes Serviced', labelTe: 'బైక్‌ల సర్వీస్', delay: 0.1 },
    { value: 1500, labelEn: 'Happy Customers', labelTe: 'సంతోషకరమైన కస్టమర్లు', delay: 0.2 },
    { value: 10, labelEn: 'Years Experience', labelTe: 'సంవత్సరాల అనుభవం', delay: 0.3 },
  ];

  return (
    <section className="bg-brand-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, type: 'spring' }}
              className="py-6 md:py-0 flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-5xl text-brand-blue mb-2">
                <Counter from={0} to={stat.value} />
              </div>
              <div className="text-gray-400 font-medium text-lg">
                {lang === 'en' ? stat.labelEn : stat.labelTe}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounters;
