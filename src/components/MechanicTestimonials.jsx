import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const MechanicTestimonials = ({ lang }) => {
  const testimonials = [
    {
      id: 1,
      nameEn: 'Rajesh Kumar',
      nameTe: 'రాజేష్ కుమార్',
      textEn: 'My bike engine was making weird noises. Nivas diagnosed it immediately and fixed it the same day. Very honest mechanic!',
      textTe: 'నా బైక్ ఇంజిన్ నుండి వింత శబ్దాలు వచ్చాయి. నివాస్ వెంటనే గుర్తించి అదే రోజు పరిష్కరించారు. చాలా నిజాయితీ గల మెకానిక్!',
      rating: 5
    },
    {
      id: 2,
      nameEn: 'Srinivas Reddy',
      nameTe: 'శ్రీనివాస్ రెడ్డి',
      textEn: 'Best bike repair service in the village. Pricing is very affordable and the work quality is excellent.',
      textTe: 'గ్రామంలో బెస్ట్ బైక్ రిపేర్ సర్వీస్. ధర చాలా అందుబాటులో ఉంది మరియు పని నాణ్యత అద్భుతమైనది.',
      rating: 5
    },
    {
      id: 3,
      nameEn: 'Venkatesh',
      nameTe: 'వెంకటేష్',
      textEn: 'Got my brakes and suspension fixed here. Bike feels like brand new now. Highly recommended!',
      textTe: 'నా బ్రేకులు మరియు సస్పెన్షన్ ఇక్కడ రిపేర్ చేయించాను. ఇప్పుడు బైక్ సరికొత్తదిలా ఉంది. తప్పకుండా సిఫార్సు చేస్తున్నాను!',
      rating: 5
    }
  ];

  return (
    <section className="bg-brand-charcoal text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-brand-blue">
            {lang === 'en' ? 'Customer Testimonials' : 'కస్టమర్ టెస్టిమోనియల్స్'}
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'See what our happy customers have to say about our bike repair services.'
              : 'మా బైక్ రిపేర్ సేవల గురించి మా కస్టమర్లు ఏమి చెబుతున్నారో చూడండి.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 relative"
            >
              <Quote className="absolute top-4 right-4 text-gray-700 w-12 h-12 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic text-sm relative z-10 leading-relaxed">
                "{lang === 'en' ? review.textEn : review.textTe}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-lg">
                  {(lang === 'en' ? review.nameEn : review.nameTe).charAt(0)}
                </div>
                <div className="font-bold">
                  {lang === 'en' ? review.nameEn : review.nameTe}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanicTestimonials;
