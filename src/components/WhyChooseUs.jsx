import { Sun, UtensilsCrossed, IndianRupee, ShoppingBag, MapPin, Info } from 'lucide-react';
import { SectionHeading } from './ui';

const features = [
  {
    Icon: Sun,
    en: {
      title: 'Fresh through the day',
      body: 'Breakfast, meals and snacks are prepared in batches during our service hours, not all at once.',
    },
    te: {
      title: 'రోజంతా తాజా',
      body: 'అల్పాహారం, భోజనం మరియు స్నాక్స్ మా సమయాల్లో దశలవారీగా తయారవుతాయి.',
    },
  },
  {
    Icon: UtensilsCrossed,
    en: {
      title: 'Traditional Telugu taste',
      body: 'Idli, dosa, jonna rotte, punugulu and homely meals — the flavours people around here grew up with.',
    },
    te: {
      title: 'సాంప్రదాయ తెలుగు రుచి',
      body: 'ఇడ్లీ, దోసె, జొన్న రొట్టె, పునుగులు మరియు ఇంటి భోజనం — ఇక్కడి వారికి తెలిసిన రుచులు.',
    },
  },
  {
    Icon: IndianRupee,
    en: {
      title: 'Prices for every day',
      body: 'Menu items start at ₹15. The full menu, with half and full portions, is listed on this page.',
    },
    te: {
      title: 'రోజువారీ ధరలు',
      body: 'మెనూ వస్తువులు ₹15 నుండి. హాఫ్ మరియు ఫుల్ పరిమాణాలతో పూర్తి మెనూ ఇక్కడ ఉంది.',
    },
  },
  {
    Icon: ShoppingBag,
    en: {
      title: 'Simple takeaway enquiries',
      body: 'Pick your items, send the list on WhatsApp, and the shop replies with what is available.',
    },
    te: {
      title: 'సులభమైన టేక్అవే విచారణ',
      body: 'మీ వస్తువులను ఎంచుకోండి, వాట్సాప్‌లో పంపండి, ఏమి లభ్యమో షాపు తెలియజేస్తుంది.',
    },
  },
  {
    Icon: MapPin,
    en: {
      title: 'A local, friendly shop',
      body: 'A small neighbourhood tiffin center in Sundaragiri. Come in, or call us on 9963090468.',
    },
    te: {
      title: 'స్థానిక, స్నేహపూర్వక షాపు',
      body: 'సుందరగిరిలోని చిన్న టిఫిన్ సెంటర్. రండి, లేదా 9963090468కు కాల్ చేయండి.',
    },
  },
];

const WhyChooseUs = ({ lang }) => {
  const t = (en, te) => (lang === 'en' ? en : te);

  return (
    <section id="why" className="bg-alt py-16 md:py-24" aria-labelledby="why-title">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="why-title"
              eyebrow={t('Why people stop by', 'ఎందుకు ఆగుతారు')}
              title={t('Good food, kept simple', 'మంచి భోజనం, సరళంగా')}
              description={t(
                'No delivery apps, no online payment, no gimmicks. Just a local kitchen serving fresh food every day.',
                'డెలివరీ యాప్‌లు లేవు, ఆన్‌లైన్ చెల్లింపు లేదు, ఆర్భాటాలు లేవు. ప్రతిరోజూ తాజా భోజనం అందించే స్థానిక వంటశాల.'
              )}
            />
            <div className="mt-7 flex items-start gap-2.5 border border-hair p-4">
              <Info size={15} className="mt-0.5 shrink-0 text-terracotta-500 dark:text-saffron-400" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-soft">
                {t(
                  'Menu availability can change daily. Calling ahead is the quickest way to check.',
                  'మెనూ లభ్యత రోజువారీ మారవచ్చు. ముందే కాల్ చేయడం అత్యంత వేగవంతమైన మార్గం.'
                )}
              </p>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-hair dark:divide-forest-700">
            {features.map(({ Icon, en, te }, index) => {
              const copy = lang === 'en' ? en : te;
              return (
                <li key={en.title} className="flex gap-4 py-5 sm:gap-6">
                  <span className="font-display text-sm font-semibold text-soft">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon size={18} className="mt-0.5 hidden shrink-0 text-terracotta-500 dark:text-saffron-400 sm:block" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-body">{copy.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-soft">{copy.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
