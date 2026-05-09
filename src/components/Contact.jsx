import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = ({ lang }) => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-md text-brand-charcoal mb-4">
            {lang === 'en' ? 'Get In Touch' : 'మమ్మల్ని సంప్రదించండి'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Visit us for fresh food and expert bike repairs, or call us to check availability.'
              : 'తాజా భోజనం మరియు నిపుణులైన బైక్ రిపేర్ల కోసం మమ్మల్ని సందర్శించండి లేదా కాల్ చేయండి.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          
          <div className="p-8 md:p-12 bg-brand-charcoal text-white">
            <h3 className="text-2xl font-bold mb-8 text-brand-orange">
              {lang === 'en' ? 'Contact Information' : 'సంప్రదింపు వివరాలు'}
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-brand-orange shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-300">{lang === 'en' ? 'Phone Numbers' : 'ఫోన్ నంబర్లు'}</h4>
                  <div className="space-y-2">
                    <a href="tel:+919963090468" className="block text-lg hover:text-brand-orange transition-colors">9963090468</a>
                    <a href="tel:+919701513468" className="block text-lg hover:text-brand-orange transition-colors">9701513468</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-green-500 shrink-0">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-300">{lang === 'en' ? 'WhatsApp' : 'వాట్సాప్'}</h4>
                  <div className="space-y-2">
                    <a href="https://wa.me/919110372978" target="_blank" rel="noreferrer" className="block text-lg hover:text-green-400 transition-colors">9110372978</a>
                    <a href="https://wa.me/919701513468" target="_blank" rel="noreferrer" className="block text-lg hover:text-green-400 transition-colors">9701513468</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-brand-blue shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-300">{lang === 'en' ? 'Opening Hours' : 'పనివేళలు'}</h4>
                  <p className="text-lg">5:00 AM — 10:30 PM</p>
                  <p className="text-sm text-gray-400 mt-1">{lang === 'en' ? 'Open All Days' : 'అన్ని రోజులు తెరచి ఉంటుంది'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-red-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-300">{lang === 'en' ? 'Location' : 'లొకేషన్'}</h4>
                  <p className="text-lg leading-relaxed">
                    Nivas Tiffin & Bike Repair Services, <br />
                    Sundaragiri, Telangana - 505467
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps?q=18.194619,79.199441&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nivas Tiffin & Bike Repair Services Location"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
