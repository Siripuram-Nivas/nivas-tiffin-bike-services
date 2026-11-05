import { MapPin, Clock, Phone, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import FoodImage from './ui';
import { heroPhoto } from '../data/menu';
import { business, telLink } from '../data/business';
import { whatsappLink, generalEnquiryMessage } from '../lib/whatsapp';

const Hero = ({ lang }) => {
  const t = (en, te) => (lang === 'en' ? en : te);

  return (
    <section className="relative overflow-hidden bg-page pt-[72px]" aria-labelledby="hero-title">
      <div className="container-page">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow animate-fade-up">
              <MapPin size={13} aria-hidden="true" />
              {t('Sundaragiri, Telangana', 'సుందరగిరి, తెలంగాణ')}
            </p>

            <h1 id="hero-title" className="heading-1 mt-4 animate-fade-up text-body [animation-delay:80ms]">
              {t('Fresh tiffins,', 'తాజా టిఫిన్స్,')}
              <br />
              <em className="font-normal italic text-terracotta-500 dark:text-saffron-400">
                {t('made every morning.', 'ప్రతి ఉదయం.')}
              </em>
            </h1>

            <p className="lede mt-6 animate-fade-up [animation-delay:140ms]">
              {t(
                'Breakfast, meals and evening snacks cooked the traditional Telugu way. Drop in for a takeaway, or call ahead to check what is ready.',
                'సాంప్రదాయ తెలుగు రుచిలో అల్పాహారం, భోజనం మరియు సాయంత్రం స్నాక్స్. టేక్అవే కోసం రండి, లేదా ఏమి సిద్ధంగా ఉందో తెలుసుకోవడానికి ముందే కాల్ చేయండి.'
              )}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 animate-fade-up [animation-delay:200ms]">
              <a href="#menu" className="btn-primary">
                <UtensilsCrossed size={16} aria-hidden="true" />
                {t('View menu', 'మెనూ చూడండి')}
              </a>
              <a href={telLink(business.phones[0].e164)} className="btn-deep">
                <Phone size={16} aria-hidden="true" />
                {t('Call to order', 'కాల్ చేయండి')}
              </a>
              <a
                href={whatsappLink(generalEnquiryMessage(lang))}
                target="_blank"
                rel="noreferrer"
                className="btn-wa-soft"
              >
                <FaWhatsapp size={17} aria-hidden="true" />
                WhatsApp
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hair pt-6 animate-fade-up [animation-delay:260ms]">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                  {t('Open daily', 'ప్రతిరోజూ')}
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-body">
                  <Clock size={14} className="text-terracotta-500 dark:text-saffron-400" aria-hidden="true" />
                  {business.hours.openDaily}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-soft">
                  {t('Call us', 'కాల్ చేయండి')}
                </dt>
                <dd className="mt-1">
                  <a
                    href={telLink(business.phones[0].e164)}
                    className="text-sm font-semibold text-body underline-offset-4 hover:text-terracotta-500 hover:underline dark:hover:text-saffron-400"
                  >
                    {business.phones[0].display}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-l-2 border-terracotta-500 pl-3 text-xs font-medium text-soft dark:border-saffron-400 animate-fade-up [animation-delay:300ms]">
              <span className="inline-flex items-center gap-1.5">
                <ArrowRight size={12} aria-hidden="true" />
                {t('Takeaway only', 'టేక్అవే మాత్రమే')}
              </span>
              <span>{t('No home delivery', 'హోమ్ డెలివరీ లేదు')}</span>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-2 rounded-t-[7rem] rounded-b-xl border border-terracotta-200 dark:border-forest-700"
              aria-hidden="true"
            />
            <figure className="relative overflow-hidden rounded-t-[7rem] rounded-b-xl bg-cream-200 dark:bg-forest-800">
              <div className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]">
                <FoodImage
                  photo={heroPhoto}
                  lang={lang}
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-forest-950/80 to-transparent p-4 pt-14 text-cream-50">
                <span className="text-[11px] font-medium tracking-wide">
                  {t('Illustrative image', 'ఉదాహరణ చిత్రం')}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                  {t('Breakfast · Meals · Snacks', 'అల్పాహారం · భోజనం · స్నాక్స్')}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
