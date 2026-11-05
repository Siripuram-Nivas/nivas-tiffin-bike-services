import { Phone, MapPin, Clock, Navigation, Ban } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { business, fullAddress, telLink } from '../data/business';
import { categories } from '../data/menu';
import { whatsappLink, generalEnquiryMessage } from '../lib/whatsapp';

const Footer = ({ lang }) => {
  const t = (en, te) => (lang === 'en' ? en : te);

  return (
    <footer className="bg-forest-950 pb-24 pt-14 text-cream-200/75 md:pb-8" aria-label="Site footer">
      <div className="container-page">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/img/logo-192.webp"
                alt="Nivas Tiffin Center logo"
                width="44"
                height="44"
                className="h-11 w-11 rounded-full object-cover ring-1 ring-forest-700"
              />
              <div className="leading-none">
                <p className="font-display text-xl font-semibold text-cream-50">Nivas</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron-400">
                  Tiffin Center
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {t(business.shortDescriptionEn, business.shortDescriptionTe)}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={telLink(business.phones[0].e164)}
                className="inline-flex h-10 items-center gap-2 border border-forest-700 px-3 text-xs font-semibold text-cream-100 transition-colors hover:border-saffron-400 hover:text-saffron-300"
              >
                <Phone size={14} aria-hidden="true" />
                {business.phones[0].display}
              </a>
              <a
                href={whatsappLink(generalEnquiryMessage(lang))}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 border border-forest-700 px-3 text-xs font-semibold text-cream-100 transition-colors hover:border-[#25D366] hover:text-[#7BE3A5]"
              >
                <FaWhatsapp size={15} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Menu categories">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50">
              {t('Menu', 'మెనూ')}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <a href="#menu" className="transition-colors hover:text-saffron-300">
                    {lang === 'en' ? category.labelEn : category.labelTe}
                    <span className="block text-[11px] text-cream-200/50">
                      {lang === 'en' ? category.timingEn : category.timingTe}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href="#about" className="transition-colors hover:text-saffron-300">
                  {t('About us', 'మా గురించి')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-saffron-300">
                  {t('Gallery', 'ఫోటోలు')}
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-saffron-300">
                  {t('Contact', 'సంప్రదించండి')}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50">
              {t('Visit', 'చిరునామా')}
            </h2>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed">
              <MapPin size={15} className="mt-0.5 shrink-0 text-saffron-400" aria-hidden="true" />
              {fullAddress}
            </p>
            <a
              href={business.maps.directions}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-saffron-400 hover:underline"
            >
              <Navigation size={12} aria-hidden="true" />
              {t('Open in Google Maps', 'గూగుల్ మ్యాప్స్‌లో తెరవండి')}
            </a>
            <p className="mt-4 text-xs leading-relaxed text-cream-200/55">
              {t(
                'Sundaragiri, Telangana. Call before travelling to check the day’s menu.',
                'సుందరగిరి, తెలంగాణ. బయలుదేరే ముందు రోజు మెనూ కోసం కాల్ చేయండి.'
              )}
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50">
              {t('Hours', 'పనివేళలు')}
            </h2>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-cream-50">
              <Clock size={14} className="text-saffron-400" aria-hidden="true" />
              {business.hours.openDaily}
            </p>
            <p className="mt-1 text-xs">{t('Open all seven days', 'వారంలో ఏడు రోజులు')}</p>
            <ul className="mt-3 space-y-1.5 text-xs text-cream-200/60">
              {business.hours.services.map((service) => (
                <li key={service.id}>{lang === 'en' ? service.en : service.te}</li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 border border-forest-700 px-3 py-2.5 text-xs leading-relaxed text-cream-200/80">
              <Ban size={13} className="mt-0.5 shrink-0 text-terracotta-400" aria-hidden="true" />
              {t(
                'No home delivery. Takeaway only from the shop.',
                'హోమ్ డెలివరీ లేదు. షాపు నుండి టేక్‌అవే మాత్రమే.'
              )}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-forest-700 pt-6 text-xs text-cream-200/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nivas Tiffin Center. {t('All rights reserved.', 'సర్వ హక్కులు ప్రత్యేకించబడినవి.')}</p>
          <p>{t('Menu and availability may change daily.', 'మెనూ మరియు లభ్యత రోజువారీ మారవచ్చు.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
