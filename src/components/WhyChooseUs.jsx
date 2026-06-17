import { motion } from 'framer-motion';
import { Shield, Clock, HeartHandshake, IndianRupee, ThumbsUp } from 'lucide-react';

const WhyChooseUs = ({ lang }) => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      titleEn: 'Trusted Village Mechanic',
      titleTe: 'విశ్వసనీయ గ్రామ మెకానిక్',
      descEn: 'A local expert you can rely on for honest opinions and top-quality repairs.',
      descTe: 'నిజాయితీ గల అభిప్రాయాలు మరియు నాణ్యమైన రిపేర్ల కోసం మీరు నమ్మదగిన స్థానిక నిపుణుడు.',
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-brand-blue" />,
      titleEn: 'Honest Pricing',
      titleTe: 'నిజాయితీ గల ధరలు',
      descEn: 'Transparent and reasonable pricing with no hidden charges.',
      descTe: 'ఎలాంటి అదనపు ఛార్జీలు లేకుండా పారదర్శకమైన మరియు సరసమైన ధరలు.',
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      titleEn: 'Same-Day Service',
      titleTe: 'అదే రోజు సర్వీస్',
      descEn: 'Quick turnaround time so you can get back on the road safely.',
      descTe: 'మీరు సురక్షితంగా ప్రయాణించడానికి వేగవంతమైన సర్వీస్.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-brand-blue" />,
      titleEn: 'Experienced Service',
      titleTe: 'అనుభవజ్ఞులైన సేవలు',
      descEn: 'Years of hands-on experience handling all makes and models of motorcycles.',
      descTe: 'అన్ని మోటార్‌సైకిల్ మోడళ్లను రిపేర్ చేయడంలో ఎంతో అనుభవం.',
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-brand-blue" />,
      titleEn: 'Quality Workmanship',
      titleTe: 'నాణ్యమైన పనితనం',
      descEn: 'We use high-quality parts and provide guaranteed professional repairs.',
      descTe: 'మేము అధిక నాణ్యత గల విడిభాగాలను ఉపయోగిస్తాము మరియు గ్యారెంటీ సర్వీస్ అందిస్తాము.',
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      titleEn: 'Customer Satisfaction',
      titleTe: 'కస్టమర్ సంతృప్తి',
      descEn: 'Our priority is your safety and satisfaction with every repair.',
      descTe: 'ప్రతి రిపేర్‌తో మీ భద్రత మరియు సంతృప్తి మా ప్రాధాన్యత.',
    },
  ];

  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4 text-brand-charcoal">
            {lang === 'en' ? 'Why Choose Us' : 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి'}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-brand-cream/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-charcoal">
                {lang === 'en' ? feature.titleEn : feature.titleTe}
              </h3>
              <p className="text-gray-600">
                {lang === 'en' ? feature.descEn : feature.descTe}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
