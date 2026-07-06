import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = ({ lang }) => {
  return (
    <motion.a
      href="https://wa.me/919110372978?text=Hello%20Nivas%20Tiffin%20Center!%20"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring', bounce: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />

      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center z-10">
        <FaWhatsapp size={28} className="text-white" />
      </div>

      {/* Tooltip label */}
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1.5 rounded-xl shadow-card text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-gray-100">
        💬 {lang === 'en' ? 'Chat with us' : 'వాట్సాప్‌లో మెసేజ్ చేయండి'}
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
