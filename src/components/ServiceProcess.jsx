import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, CheckCircle, Flag, ThumbsUp, Wrench } from 'lucide-react';

const ServiceProcess = ({ lang }) => {
  const processSteps = [
    {
      id: 1,
      icon: <Search className="w-6 h-6 text-white" />,
      titleEn: 'Bike Inspection',
      titleTe: 'బైక్ ఇన్స్పెక్షన్',
      descEn: 'Thorough visual and mechanical check.',
      descTe: 'విజువల్ మరియు మెకానికల్ చెక్.',
    },
    {
      id: 2,
      icon: <PenTool className="w-6 h-6 text-white" />,
      titleEn: 'Problem Identification',
      titleTe: 'సమస్య గుర్తింపు',
      descEn: 'Pinpointing exact issues accurately.',
      descTe: 'ఖచ్చితమైన సమస్యను గుర్తించడం.',
    },
    {
      id: 3,
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      titleEn: 'Service Recommendation',
      titleTe: 'సర్వీస్ సిఫార్సు',
      descEn: 'Transparent advice on needed repairs.',
      descTe: 'అవసరమైన రిపేర్లపై పారదర్శక సలహా.',
    },
    {
      id: 4,
      icon: <Wrench className="w-6 h-6 text-white" />,
      titleEn: 'Repair & Maintenance',
      titleTe: 'రిపేర్ & నిర్వహణ',
      descEn: 'Expert fixing and parts replacement.',
      descTe: 'నైపుణ్యంతో కూడిన రిపేర్ మరియు విడిభాగాల మార్పిడి.',
    },
    {
      id: 5,
      icon: <ThumbsUp className="w-6 h-6 text-white" />,
      titleEn: 'Quality Check',
      titleTe: 'క్వాలిటీ చెక్',
      descEn: 'Final testing for safety and performance.',
      descTe: 'భద్రత మరియు పనితీరు కోసం తుది పరీక్ష.',
    },
    {
      id: 6,
      icon: <Flag className="w-6 h-6 text-white" />,
      titleEn: 'Ready for Pickup',
      titleTe: 'పికప్‌కు సిద్ధంగా ఉంది',
      descEn: 'Your bike is clean and ready to ride.',
      descTe: 'మీ బైక్ సిద్ధంగా ఉంది.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4 text-brand-charcoal">
            {lang === 'en' ? 'Our Service Process' : 'మా సర్వీస్ ప్రాసెస్'}
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'A systematic approach to ensure your motorcycle gets the best care possible.'
              : 'మీ మోటార్‌సైకిల్‌కు ఉత్తమమైన సంరక్షణ అందించడానికి ఒక క్రమబద్ధమైన విధానం.'}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-brand-orange shadow-lg flex items-center justify-center z-10 hidden md:flex">
                  {step.icon}
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:max-w-sm ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right text-center'}`}>
                    <div className="flex items-center gap-3 mb-2 justify-center md:hidden bg-brand-orange w-12 h-12 rounded-full mx-auto">
                      {step.icon}
                    </div>
                    <div className="text-brand-orange font-bold text-sm mb-1">
                      {lang === 'en' ? `Step ${step.id}` : `దశ ${step.id}`}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-charcoal">
                      {lang === 'en' ? step.titleEn : step.titleTe}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {lang === 'en' ? step.descEn : step.descTe}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
