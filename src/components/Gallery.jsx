import FoodImage, { SectionHeading } from './ui';
import { gallery } from '../data/menu';

const labels = {
  spread: { en: 'Breakfast spread', te: 'అల్పాహార విందు' },
  mirchi: { en: 'Mirchi bajji', te: 'మిర్చి బజ్జీ' },
  punugulu: { en: 'Punugulu', te: 'పునుగులు' },
  boondhi: { en: 'Kara boondhi', te: 'కారా బూంది' },
  jonna: { en: 'Jonna rotte', te: 'జొన్న రొట్టె' },
  chicken: { en: 'Chicken curry meals', te: 'చికెన్ కర్రీ మీల్స్' },
};

const tileClasses = {
  wide: 'md:col-span-2 md:row-span-2',
  tall: 'md:row-span-2',
  '': '',
};

const Gallery = ({ lang }) => {
  const t = (en, te) => (lang === 'en' ? en : te);

  return (
    <section id="gallery" className="bg-page py-16 md:py-24" aria-labelledby="gallery-title">
      <div className="container-page">
        <SectionHeading
          id="gallery-title"
          eyebrow={t('From the kitchen', 'వంటశాల నుండి')}
          title={t('A look at the food', 'మా వంటకాల చిత్రాలు')}
          description={t(
            'Breakfast favourites, everyday meals and evening snacks from our menu.',
            'మా మెనూలోని అల్పాహారం, రోజువారీ భోజనం మరియు సాయంత్రం స్నాక్స్.'
          )}
        />

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-2.5 sm:auto-rows-[180px] md:grid-cols-4 md:gap-3">
          {gallery.map(({ id, photo, tile }) => (
            <figure
              key={id}
              className={`group relative overflow-hidden bg-cream-200 dark:bg-forest-800 ${tileClasses[tile] || ''}`}
            >
              <FoodImage
                photo={photo}
                lang={lang}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/85 to-transparent px-3 pb-2.5 pt-10 text-xs font-medium text-cream-50">
                {lang === 'en' ? labels[id].en : labels[id].te}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-soft">
          {t(
            'Images are illustrative and do not show the actual shop. Dishes and presentation may vary.',
            'చిత్రాలు ఉదాహరణకు మాత్రమే, ఇవి అసలు షాపును చూపించవు. వంటకాలు మరియు అందుబాటు మారవచ్చు.'
          )}
        </p>
      </div>
    </section>
  );
};

export default Gallery;
