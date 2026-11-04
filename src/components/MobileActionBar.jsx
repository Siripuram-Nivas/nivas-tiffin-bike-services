import { Phone, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { business, telLink } from '../data/business';
import { whatsappLink, generalEnquiryMessage } from '../lib/whatsapp';

const MobileActionBar = ({ lang, cartCount, openEnquiry }) => {
  const t = (en, te) => (lang === 'en' ? en : te);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream-50/95 backdrop-blur-md dark:border-forest-700 dark:bg-forest-950/95 md:hidden"
      aria-label={t('Quick actions', 'త్వరిత చర్యలు')}
    >
      <div className="grid grid-cols-4 pb-[env(safe-area-inset-bottom)]">
        <a
          href={telLink(business.phones[0].e164)}
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-body"
          aria-label={t('Call the shop', 'షాపుకు కాల్ చేయండి')}
        >
          <Phone size={18} aria-hidden="true" />
          <span className="text-[10px] font-semibold">{t('Call', 'కాల్')}</span>
        </a>
        <a
          href={whatsappLink(generalEnquiryMessage(lang))}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-body"
          aria-label={t('Message on WhatsApp', 'వాట్సాప్‌లో మెసేజ్ చేయండి')}
        >
          <FaWhatsapp size={18} aria-hidden="true" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <a
          href="#menu"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-body"
          aria-label={t('View the menu', 'మెనూ చూడండి')}
        >
          <UtensilsCrossed size={18} aria-hidden="true" />
          <span className="text-[10px] font-semibold">{t('Menu', 'మెనూ')}</span>
        </a>
        <button
          type="button"
          onClick={openEnquiry}
          className="relative flex min-h-14 flex-col items-center justify-center gap-1 text-terracotta-500 dark:text-saffron-400"
          aria-label={t(
            `Takeaway enquiry, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`,
            `టేక్అవే విచారణ, ${cartCount} వస్తువులు`
          )}
        >
          <ShoppingBag size={18} aria-hidden="true" />
          <span className="text-[10px] font-semibold">{t('Enquiry', 'విచారణ')}</span>
          {cartCount > 0 && (
            <span className="absolute right-1/2 top-1.5 -mr-5 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta-500 px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default MobileActionBar;
