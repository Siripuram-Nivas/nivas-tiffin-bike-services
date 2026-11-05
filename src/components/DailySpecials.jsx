import { Plus, Phone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import FoodImage, { SectionHeading, VegMark } from './ui';
import { specials } from '../data/menu';
import { business, telLink } from '../data/business';
import { lineKey } from '../lib/enquiry';
import { whatsappLink, availabilityMessage, generalEnquiryMessage } from '../lib/whatsapp';

const DailySpecials = ({ lang, cart, onAdd }) => {
  const t = (en, te) => (lang === 'en' ? en : te);
  const added = (id) => (cart[lineKey(id, 'half')] || 0) + (cart[lineKey(id, 'full')] || 0);

  return (
    <section id="specials" className="bg-forest-900 py-16 md:py-24" aria-labelledby="specials-title">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            light
            id="specials-title"
            eyebrow={t('Specials', 'ప్రత్యేకతలు')}
            title={t('A few specials from our menu', 'మా మెనూలోని కొన్ని ప్రత్యేకతలు')}
            description={t(
              'These items are part of our regular menu and are highlighted here. Availability changes with the day, so message us to check what is ready before you visit.',
              'ఇవి మా సాధారణ మెనూలో భాగం, ఇక్కడ ప్రత్యేకంగా చూపించాము. రోజువారీ లభ్యత మారుతుంది, రాకముందు ఏమి సిద్ధంగా ఉందో వాట్సాప్‌లో అడగండి.'
            )}
          />
          <a
            href={whatsappLink(generalEnquiryMessage(lang))}
            target="_blank"
            rel="noreferrer"
            className="btn-wa-soft shrink-0 self-start md:self-auto"
          >
            <FaWhatsapp size={16} aria-hidden="true" />
            {t('Check what is available', 'లభ్యత తెలుసుకోండి')}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {specials.map((item) => {
            const fullCount = added(item.id);
            const name = lang === 'en' ? item.nameEn : item.nameTe;
            return (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden border border-forest-700 bg-forest-800/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-forest-700">
                  <FoodImage
                    photo={item.photo}
                    lang={lang}
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 30vw, 45vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-forest-950/85 px-2 py-1 text-[10px] font-semibold text-saffron-300 backdrop-blur-sm">
                    <Sparkles size={10} aria-hidden="true" />
                    {t('Ask availability', 'లభ్యత అడగండి')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold leading-snug text-cream-50 sm:text-lg">
                      {name}
                    </h3>
                    <VegMark isVeg={item.isVeg} lang={lang} />
                  </div>
                  <p className="mb-4 mt-1.5 line-clamp-2 text-xs leading-relaxed text-cream-200/70 sm:text-sm">
                    {lang === 'en' ? item.descEn : item.descTe}
                  </p>

                  <div className="mt-auto border-t border-forest-700 pt-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-xl font-semibold text-cream-50">
                        {item.priceHalf && <span className="text-xs font-medium text-cream-200/70">{t('From ', '')}</span>}
                        ₹{item.priceHalf || item.priceFull}
                      </span>
                      <a
                        href={whatsappLink(availabilityMessage(item, lang))}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-forest-700 text-cream-200 transition-colors hover:border-[#25D366] hover:text-[#7BE3A5]"
                        aria-label={t(`Check availability of ${item.nameEn} on WhatsApp`, `${item.nameTe} లభ్యతను వాట్సాప్‌లో తనిఖీ చేయండి`)}
                      >
                        <FaWhatsapp size={16} aria-hidden="true" />
                      </a>
                    </div>

                    {item.priceHalf ? (
                      <div className="mt-2 grid grid-cols-2 gap-1.5">
                        {[
                          { id: 'half', price: item.priceHalf, label: t('Half', 'హాఫ్') },
                          { id: 'full', price: item.priceFull, label: t('Full', 'ఫుల్') },
                        ].map((portion) => (
                          <button
                            key={portion.id}
                            type="button"
                            onClick={() => onAdd(item.id, portion.id)}
                            className="inline-flex min-h-9 items-center justify-center gap-1 rounded-md border border-forest-700 bg-forest-900/60 px-2 py-1.5 text-xs font-semibold text-cream-100 transition-colors hover:border-saffron-400 hover:text-saffron-300"
                            aria-label={t(
                              `Add ${portion.label} ${item.nameEn} (₹${portion.price}) to takeaway enquiry`,
                              `${item.nameTe} ${portion.label} (₹${portion.price}) విచారణలో చేర్చండి`
                            )}
                          >
                            <Plus size={12} aria-hidden="true" />
                            {portion.label} ₹{portion.price}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onAdd(item.id, 'full')}
                        className="mt-2 inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-md bg-saffron-400 px-3 py-1.5 text-xs font-bold text-forest-950 transition-colors hover:bg-saffron-300"
                        aria-label={t(
                          `Add ${item.nameEn} to takeaway enquiry`,
                          `${item.nameTe} విచారణలో చేర్చండి`
                        )}
                      >
                        <Plus size={13} aria-hidden="true" />
                        {t('Add to enquiry', 'విచారణలో చేర్చండి')}
                      </button>
                    )}
                    {fullCount > 0 && (
                      <p className="mt-1.5 text-[10px] font-medium text-saffron-300">
                        {t(`${fullCount} in enquiry`, `విచారణలో ${fullCount}`)}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-cream-200/60">
          <Phone size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
          {t(
            'Availability is confirmed by the shop. Call or WhatsApp us before visiting — no home delivery. Images are illustrative.',
            'లభ్యతను షాపు నిర్ధారిస్తుంది. రాకముందు కాల్ లేదా వాట్సాప్ చేయండి — హోమ్ డెలివరీ లేదు. చిత్రాలు ఉదాహరణకు మాత్రమే.'
          )}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={telLink(business.phones[0].e164)} className="btn-light">
            <Phone size={15} aria-hidden="true" />
            {t('Call to order', 'కాల్ చేయండి')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailySpecials;
