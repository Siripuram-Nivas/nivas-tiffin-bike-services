import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = ({ lang }) => {
  const reviews = [
    {
      id: 1,
      name: "Raju Kumar",
      textEn: "Best chicken curry meals in the village! Very authentic taste and neat packing.",
      textTe: "గ్రామంలో బెస్ట్ చికెన్ కర్రీ మీల్స్! చాలా అద్భుతమైన రుచి.",
      rating: 5,
      type: "Food"
    },
    {
      id: 3,
      name: "Venkatesh",
      textEn: "Morning idli is super soft. Daily customer here!",
      textTe: "ఉదయం ఇడ్లీ చాలా మృదువుగా ఉంటాయి. నేను రోజువారీ కస్టమర్‌ని!",
      rating: 4,
      type: "Food"
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="text-center mb-12">
        <h2 className="heading-md text-brand-charcoal mb-4">
          {lang === 'en' ? 'What Our Customers Say' : 'మా కస్టమర్లు ఏమంటున్నారు'}
        </h2>
        <div className="flex justify-center gap-1 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
        </div>
        <p className="text-gray-600 font-medium">4.8/5 Average Rating</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
          >
            <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-500">
              {review.type}
            </div>
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
            </div>
            <p className="text-gray-700 italic mb-6">
              "{lang === 'en' ? review.textEn : review.textTe}"
            </p>
            <div className="font-bold text-brand-charcoal border-t pt-4 border-gray-100">
              - {review.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
