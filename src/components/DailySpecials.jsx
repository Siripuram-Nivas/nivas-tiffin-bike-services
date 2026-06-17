import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const DailySpecials = ({ lang }) => {
  const specials = [
    {
      id: 1,
      name: lang === 'en' ? 'Chicken Curry Meals' : 'చికెన్ కర్రీ మీల్స్',
      price: '₹100',
      image: '/chicken_curry_meals_1778318885696.png',
      tag: lang === 'en' ? 'Hot & Spicy' : 'హాట్ & స్పైసీ'
    },
    {
      id: 2,
      name: lang === 'en' ? 'Fresh Punugulu' : 'వేడి వేడి పునుగులు',
      price: '₹30',
      image: '/punugulu_snacks_1778318929255.png',
      tag: lang === 'en' ? 'Evening Special' : 'సాయంత్రం స్పెషల్'
    },
    {
      id: 3,
      name: lang === 'en' ? 'Crispy Mirchi Bajji' : 'క్రిస్పీ మిర్చి బజ్జీ',
      price: '₹30',
      image: '/mirchi_bajji_card_1778318867371.png',
      tag: lang === 'en' ? 'Customer Favorite' : 'కస్టమర్ ఫేవరెట్'
    },
    {
      id: 4,
      name: lang === 'en' ? 'Handmade Kara Boondhi' : 'కారా బూందీ',
      price: '₹30',
      image: '/kara_boondhi_1778320236218.png',
      tag: lang === 'en' ? 'Snack' : 'స్నాక్'
    },
    {
      id: 5,
      name: lang === 'en' ? 'Fresh Jonna Rotte' : 'జొన్న రొట్టె',
      price: '₹40',
      image: '/jonna_rotte_1778320253761.png',
      tag: lang === 'en' ? 'Traditional' : 'సాంప్రదాయం'
    }
  ];

  return (
    <section className="bg-brand-orange/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-md text-brand-charcoal mb-4">
            {lang === 'en' ? 'Today\'s Specials' : 'ఈ రోజు స్పెషల్స్'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Freshly prepared specials for today. Call or WhatsApp to check availability as they sell out fast!'
              : 'ఈరోజు తాజాగా తయారుచేసిన స్పెషల్స్. త్వరగా అమ్ముడవుతాయి కాబట్టి దయచేసి వాట్సాప్ లేదా కాల్ చేయండి!'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                  {item.tag}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-brand-charcoal">{item.name}</h3>
                  <span className="font-bold text-brand-orange text-lg shrink-0 ml-2">{item.price}</span>
                </div>
                <a 
                  href={`https://wa.me/919110372978?text=Hello, is ${item.name} available now?`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-50 text-green-700 hover:bg-green-100 py-2 rounded-lg flex justify-center items-center gap-2 font-medium transition-colors border border-green-200 mt-auto"
                >
                  <FaWhatsapp size={18} className="text-green-600" />
                  {lang === 'en' ? 'Check Availability' : 'లభ్యత తనిఖీ చేయండి'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySpecials;
