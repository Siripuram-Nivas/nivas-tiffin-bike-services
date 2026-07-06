import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * Contact section — fully theme-aware.
 *
 * Light mode: left panel = white bg, dark gray text
 * Dark mode:  left panel = #111827 bg, white text / gray-300 labels
 *
 * The Google Maps iframe remains on the right at all times.
 */
const Contact = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 bg-brand-cream dark:bg-[#0F172A]" aria-label="Contact and location">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300">
            <MapPin size={14} />
            {lang === 'en' ? 'Find Us' : 'మమ్మల్ని కనుగొనండి'}
          </div>
          <h2 className="heading-md text-brand-dark dark:text-white mb-4">
            {lang === 'en' ? 'Get In Touch' : 'మమ్మల్ని సంప్రదించండి'}
          </h2>
          <div className="divider" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-5">
            {lang === 'en'
              ? "Visit us for fresh homemade tiffins and meals, or call us to check today's availability."
              : 'తాజా ఇంటి భోజనం కోసం మమ్మల్ని సందర్శించండి లేదా కాల్ చేయండి.'}
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden
                     shadow-hover border border-brand-border dark:border-gray-700"
        >
          <div className="grid lg:grid-cols-2">

            {/* ═══ LEFT: Contact Info ═══
                Light: white bg, dark text
                Dark : #111827 bg, white/gray text */}
            <div className="p-8 md:p-12
                            bg-white dark:bg-[#111827]
                            border-b lg:border-b-0 lg:border-r
                            border-gray-100 dark:border-gray-700">

              <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {lang === 'en' ? 'Contact Information' : 'సంప్రదింపు వివరాలు'}
              </h3>

              <div className="space-y-7">

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-brand-orange shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Phone Numbers' : 'ఫోన్ నంబర్లు'}
                    </p>
                    <a href="tel:+919963090468"
                      className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors group"
                      aria-label="Call 9963090468"
                    >
                      9963090468
                      <Phone size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="tel:+919701513468"
                      className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors group"
                      aria-label="Call 9701513468"
                    >
                      9701513468
                      <Phone size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-600 shrink-0">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'WhatsApp' : 'వాట్సాప్'}
                    </p>
                    <a href="https://wa.me/919110372978" target="_blank" rel="noreferrer"
                      className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      aria-label="WhatsApp 9110372978"
                    >9110372978</a>
                    <a href="https://wa.me/919701513468" target="_blank" rel="noreferrer"
                      className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      aria-label="WhatsApp 9701513468"
                    >9701513468</a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Opening Hours' : 'పనివేళలు'}
                    </p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>5:00 AM — 10:30 PM</p>
                    <p className="text-sm text-brand-success font-semibold mt-1">Open All Days · 7 days a week</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Location' : 'లొకేషన్'}
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=55VX%2BVRM+Sundaragiri+Telangana+505467"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-gray-700 dark:text-gray-200 hover:text-brand-orange dark:hover:text-brand-orange transition-colors leading-relaxed underline underline-offset-4 decoration-dotted"
                      aria-label="Open location in Google Maps"
                    >
                      Nivas Tiffin Center,<br />
                      55VX+VRM, Sundaragiri,<br />
                      Telangana – 505467
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Action buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919963090468"
                  className="flex items-center justify-center gap-2 px-5 py-3
                             bg-brand-orange text-white font-semibold rounded-2xl
                             hover:bg-orange-600 shadow-orange transition-all duration-200 text-sm"
                  aria-label="Call Now"
                >
                  <Phone size={16} />
                  {lang === 'en' ? 'Call Now' : 'కాల్ చేయండి'}
                </a>
                <a
                  href="https://maps.google.com/?q=18.194619,79.199441"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3
                             bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
                             text-gray-700 dark:text-gray-200 font-semibold rounded-2xl
                             border border-gray-200 dark:border-gray-600
                             transition-all duration-200 text-sm"
                  aria-label="Get directions on Google Maps"
                >
                  <Navigation size={16} />
                  {lang === 'en' ? 'Get Directions' : 'దారి చూపించండి'}
                </a>
                <a
                  href="https://wa.me/919110372978"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3
                             bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30
                             text-green-700 dark:text-green-400 font-semibold rounded-2xl
                             border border-green-200 dark:border-green-700
                             transition-all duration-200 text-sm"
                  aria-label="WhatsApp us"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* ═══ RIGHT: Google Maps ═══ */}
            <div className="relative h-[400px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=18.194619,79.199441&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nivas Tiffin Center Location on Google Maps"
                className="w-full h-full"
                aria-label="Google Maps showing Nivas Tiffin Center location"
              />
              <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 shadow-card pointer-events-none">
                <p className="text-xs font-bold text-brand-dark dark:text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>📍 Nivas Tiffin Center</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Sundaragiri, Telangana</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
