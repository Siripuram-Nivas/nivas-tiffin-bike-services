import { Clock, Phone, UtensilsCrossed } from 'lucide-react';
import FoodImage from './ui';
import { gallery } from '../data/menu';
import { business, telLink } from '../data/business';

const About = ({ lang }) => {
  const t = (en, te) => (lang === 'en' ? en : te);
  const photo = gallery.find((entry) => entry.id === 'jonna').photo;

  const points = [
    {
      title: t('Cooked through the day', 'రోజంతా తాజా వంట'),
      body: t(
        'Breakfast, lunch and evening snacks are prepared in batches through our service hours.',
        'అల్పాహారం, భోజనం మరియు సాయంత్రం స్నాక్స్ మా సమయాల్లో తాజాగా తయారుచేస్తాము.'
      ),
    },
    {
      title: t('Traditional Telugu taste', 'సాంప్రదాయ తెలుగు రుచి'),
      body: t(
        'Idli, dosa, jonna rotte, punugulu and everyday meals, cooked simply and served hot.',
        'ఇడ్లీ, దోసె, జొన్న రొట్టె, పునుగులు మరియు రోజువారీ భోజనం — సరళంగా వండి వేడిగా అందిస్తాము.'
      ),
    },
    {
      title: t('Everyday prices', 'అందుబాటు ధరలు'),
      body: t(
        'Menu items start at ₹15, so a regular meal stays affordable for the neighbourhood.',
        'మెనూ వస్తువులు ₹15 నుండి మొదలవుతాయి — స్థానికులకు రోజువారీ భోజనం అందుబాటులో ఉంటుంది.'
      ),
    },
  ];

  return (
    <section id="about" className="bg-alt py-16 md:py-24" aria-labelledby="about-title">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden border border-line dark:border-forest-700">
              <div className="aspect-[4/3]">
                <FoodImage
                  photo={photo}
                  lang={lang}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-[11px] text-soft">
              {t('Illustrative food image', 'ఉదాహరణ ఆహార చిత్రం')}
            </p>
            <div className="absolute -bottom-5 right-4 hidden border border-hair bg-cream-50 px-4 py-3 dark:bg-forest-800 sm:block">
              <p className="flex items-center gap-2 text-xs font-semibold text-body">
                <Clock size={14} className="text-terracotta-500 dark:text-saffron-400" aria-hidden="true" />
                {business.hours.openDaily}
              </p>
              <p className="mt-1 text-[11px] text-soft">{t('Open all days', 'అన్ని రోజులు')}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow">
              <UtensilsCrossed size={13} aria-hidden="true" />
              {t('The kitchen', 'మా వంటశాల')}
            </p>
            <h2 id="about-title" className="heading-2 mt-3 text-body">
              {t('A neighbourhood tiffin center,', 'పరిసరాల టిఫిన్ సెంటర్,')}{' '}
              <em className="font-normal italic text-terracotta-500 dark:text-saffron-400">
                {t('not a chain.', 'చైన్ కాదు.')}
              </em>
            </h2>
            <p className="lede mt-5">
              {t(
                'Nivas Tiffin Center is a small local kitchen in Sundaragiri, Telangana. We serve fresh breakfast, afternoon meals and evening snacks to people who live and work nearby.',
                'నివాస్ టిఫిన్ సెంటర్ సుందరగిరి, తెలంగాణలోని చిన్న స్థానిక వంటశాల. ఇక్కడ నివసించే మరియు పనిచేసే వారికి తాజా అల్పాహారం, మధ్యాహ్న భోజనం మరియు సాయంత్రం స్నాక్స్ అందిస్తాము.'
              )}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-soft">
              {t(
                'There is no home delivery and no online payment. Come to the shop for takeaway, or call and message ahead so your food is ready when you arrive.',
                'హోమ్ డెలివరీ లేదు, ఆన్‌లైన్ చెల్లింపు లేదు. టేక్అవే కోసం షాపుకు రండి, లేదా మీరు వచ్చేసరికి సిద్ధంగా ఉండేలా ముందే కాల్ లేదా మెసేజ్ చేయండి.'
              )}
            </p>

            <dl className="mt-7 space-y-4 border-t border-hair pt-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500 dark:bg-saffron-400" aria-hidden="true" />
                  <div>
                    <dt className="text-sm font-semibold text-body">{point.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-soft">{point.body}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <a href={telLink(business.phones[0].e164)} className="btn-deep mt-7">
              <Phone size={15} aria-hidden="true" />
              {t('Call the shop', 'షాపుకు కాల్ చేయండి')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
