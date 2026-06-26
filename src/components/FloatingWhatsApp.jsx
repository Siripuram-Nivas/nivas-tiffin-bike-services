import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = ({ lang }) => {
  return (
    <a
      href="https://wa.me/919110372978?text=Hello%20Nivas%20Tiffin%20Center!%20"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
      <FaWhatsapp size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {lang === 'en' ? 'Chat with us' : 'వాట్సాప్‌లో మెసేజ్ చేయండి'}
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
