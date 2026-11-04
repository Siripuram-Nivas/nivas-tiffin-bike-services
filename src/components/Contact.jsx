import { MapPin, Phone, Clock, Navigation, Ban, Wallet } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SectionHeading } from './ui';
import { business, fullAddress, telLink } from '../data/business';
import { whatsappLink, generalEnquiryMessage } from '../lib/whatsapp';

const Contact = ({ lang }) => {
  const t = (en, te) => (lang === 'en' ? en : te);

  return (
    <section id="contact" className="bg-page py-16 md:py-24" aria-labelledby="contact-title">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          eyebrow={t('Visit the shop', 'షాపుకు రండి')}
          title={t('Come in, or call ahead', 'రండి, లేదా ముందే కాల్ చేయండి')}
          description={t(
            'We are open every day in Sundaragiri. Call or message us to check the day’s menu before you travel.',
            'సుందరగిరిలో ప్రతిరోజూ తెరిచి ఉంటాము. బయలుదేరే ముందు రోజు మెనూ తెలుసుకోవడానికి కాల్ లేదా మెసేజ్ చేయండి.'
          )}
        />

        <div className="mt-10 grid overflow-hidden border border-hair lg:grid-cols-[1fr_1.05fr]">
          <div className="bg-card p-5 sm:p-8">
            <dl className="space-y-6">
              <div className="flex gap-3.5">
                <span className="icon-tile">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                    {t('Address', 'చిరునామా')}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-body">
                    <a
                      href={business.maps.directions}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-terracotta-500 hover:underline dark:hover:text-saffron-400"
                    >
                      {fullAddress}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href={business.maps.directions}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-terracotta-500 hover:underline dark:text-saffron-400"
                    >
                      <Navigation size={12} aria-hidden="true" />
                      {t('Get directions', 'దారి చూసుకోండి')}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="icon-tile">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                    {t('Phone', 'ఫోన్')}
                  </dt>
                  <dd className="mt-1.5 flex flex-col gap-1">
                    {business.phones.map((phone) => (
                      <a
                        key={phone.e164}
                        href={telLink(phone.e164)}
                        className="text-sm font-semibold text-body hover:text-terracotta-500 dark:hover:text-saffron-400"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="icon-tile">
                  <FaWhatsapp size={18} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                    {t('WhatsApp (availability enquiries)', 'వాట్సాప్ (లభ్యత విచారణలు)')}
                  </dt>
                  <dd className="mt-1.5 flex flex-col gap-1">
                    {[business.whatsapp, business.whatsappSecondary].map((number) => (
                      <a
                        key={number}
                        href={whatsappLink(generalEnquiryMessage(lang), number)}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-body hover:text-[#128C48] dark:hover:text-[#7BE3A5]"
                      >
                        {number}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="icon-tile">
                  <Clock size={18} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                    {t('Opening hours', 'పనివేళలు')}
                  </dt>
                  <dd className="mt-1.5">
                    <p className="text-sm font-semibold text-body">{business.hours.openDaily}</p>
                    <p className="text-xs text-soft">{t('Open all seven days', 'వారంలో ఏడు రోజులు')}</p>
                    <ul className="mt-2 space-y-1">
                      {business.hours.services.map((service) => (
                        <li key={service.id} className="text-xs text-soft">
                          {lang === 'en' ? service.en : service.te}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-7 flex flex-col gap-2 border-t border-hair pt-5 text-xs">
              <p className="flex items-center gap-2 font-medium text-body">
                <Ban size={13} className="shrink-0 text-terracotta-500 dark:text-saffron-400" aria-hidden="true" />
                {t('No home delivery — takeaway from the shop only.', 'హోమ్ డెలివరీ లేదు — షాపు నుండి టేక్అవే మాత్రమే.')}
              </p>
              <p className="flex items-center gap-2 font-medium text-body">
                <Wallet size={13} className="shrink-0 text-terracotta-500 dark:text-saffron-400" aria-hidden="true" />
                {t('No online payment.', 'ఆన్‌లైన్ చెల్లింపు లేదు.')}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a href={telLink(business.phones[0].e164)} className="btn-primary">
                <Phone size={15} aria-hidden="true" />
                {t('Call', 'కాల్')}
              </a>
              <a
                href={whatsappLink(generalEnquiryMessage(lang))}
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                WhatsApp
              </a>
              <a href={business.maps.directions} target="_blank" rel="noreferrer" className="btn-outline">
                <Navigation size={15} aria-hidden="true" />
                {t('Directions', 'దారి')}
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] border-t border-hair lg:min-h-[520px] lg:border-l lg:border-t-0">
            <iframe
              src={business.maps.embed}
              title={t('Nivas Tiffin Center on Google Maps', 'గూగుల్ మ్యాప్స్‌లో నివాస్ టిఫిన్ సెంటర్')}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
            <div className="pointer-events-none absolute left-3 top-3 border border-hair bg-cream-50/95 px-3 py-2 dark:bg-forest-900/95">
              <p className="text-xs font-bold text-body">Nivas Tiffin Center</p>
              <p className="text-[11px] text-soft">
                {business.address.locality}, {business.address.region}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
