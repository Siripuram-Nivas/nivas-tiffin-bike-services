/** Responsive WebP food image with alt text in the active language. */
const FoodImage = ({ photo, lang, sizes = '100vw', priority = false, className = '' }) => {
  const srcSet = photo.widths
    .map((w) => `${photo.base}-${w}.webp ${w}w`)
    .join(', ');

  return (
    <img
      src={`${photo.base}-${photo.widths[photo.widths.length - 1]}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={lang === 'en' ? photo.altEn : photo.altTe}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
    />
  );
};

/** Square veg / non-veg marker used across the menu and cards. */
export const VegMark = ({ isVeg, lang = 'en' }) => (
  <span
    className={`inline-flex h-4 w-4 shrink-0 items-center justify-center border ${
      isVeg ? 'border-green-700' : 'border-red-700'
    }`}
    role="img"
    aria-label={
      isVeg
        ? lang === 'en'
          ? 'Vegetarian'
          : 'శాకాహారం'
        : lang === 'en'
          ? 'Non-vegetarian'
          : 'మాంసాహారం'
    }
    title={isVeg ? (lang === 'en' ? 'Vegetarian' : 'శాకాహారం') : lang === 'en' ? 'Non-vegetarian' : 'మాంసాహారం'}
  >
    <span className={`h-2 w-2 rounded-full ${isVeg ? 'bg-green-700' : 'bg-red-700'}`} />
  </span>
);

/** Consistent section intro: eyebrow, serif title, optional description. */
export const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false, id }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className={`eyebrow ${light ? '!text-saffron-300' : ''}`}>{eyebrow}</p>
    <h2
      id={id}
      className={`heading-2 mt-3 text-balance ${light ? 'text-cream-50' : 'text-body'}`}
    >
      {title}
    </h2>
    <div className={`rule mt-5 ${align === 'center' ? 'mx-auto' : ''}`} />
    {description && (
      <p className={`lede mt-5 ${light ? '!text-cream-200/80' : ''}`}>{description}</p>
    )}
  </div>
);

export default FoodImage;
