import { useMemo, useState } from 'react';
import { Search, X, Plus, UtensilsCrossed, Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SectionHeading, VegMark } from './ui';
import { categories, menuItems } from '../data/menu';
import { lineKey } from '../lib/enquiry';
import { whatsappLink, availabilityMessage } from '../lib/whatsapp';

const dietOptions = [
  { id: 'all', en: 'All', te: 'అన్నీ' },
  { id: 'veg', en: 'Veg', te: 'వెజ్' },
  { id: 'nonveg', en: 'Non-veg', te: 'నాన్-వెజ్' },
];

const MenuSection = ({ lang, cart, onAdd }) => {
  const t = (en, te) => (lang === 'en' ? en : te);
  const [activeTab, setActiveTab] = useState('morning');
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState('all');

  const searching = query.trim().length > 0;

  const items = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      if (!searching && item.category !== activeTab) return false;
      if (diet === 'veg' && !item.isVeg) return false;
      if (diet === 'nonveg' && item.isVeg) return false;
      if (!needle) return true;
      return (
        item.nameEn.toLowerCase().includes(needle) ||
        item.nameTe.includes(needle)
      );
    });
  }, [activeTab, diet, query, searching]);

  const handleTabKeyDown = (event) => {
    const index = categories.findIndex((category) => category.id === activeTab);
    let next = null;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = categories.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActiveTab(categories[next].id);
    document.getElementById(`menu-tab-${categories[next].id}`)?.focus();
  };

  const resetFilters = () => {
    setQuery('');
    setDiet('all');
    setActiveTab('morning');
  };

  return (
    <section id="menu" className="bg-page py-16 md:py-24" aria-labelledby="menu-title">
      <div className="container-page">
        <SectionHeading
          id="menu-title"
          eyebrow={t('Full menu', 'పూర్తి మెనూ')}
          title={t('Breakfast, meals and evening snacks', 'అల్పాహారం, భోజనం మరియు సాయంత్రం స్నాక్స్')}
          description={t(
            'Prices are per plate. Items and availability can change daily — the shop confirms every order.',
            'ధరలు ప్లేట్‌కు. వస్తువులు మరియు లభ్యత రోజువారీ మారవచ్చు — ప్రతి ఆర్డర్‌ను షాపు నిర్ధారిస్తుంది.'
          )}
        />

        <div className="mt-10 lg:sticky lg:top-[72px] lg:z-30 lg:bg-page lg:py-3">
          <div className="flex flex-col gap-3 border-b border-hair pb-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex gap-0.5 overflow-x-auto no-scrollbar sm:gap-1"
              role="tablist"
              aria-label={t('Menu categories', 'మెనూ విభాగాలు')}
            >
              {categories.map((category) => {
                const selected = !searching && activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    id={`menu-tab-${category.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="menu-panel"
                    tabIndex={selected || (searching && category.id === activeTab) ? 0 : -1}
                    onClick={() => {
                      setQuery('');
                      setActiveTab(category.id);
                    }}
                    onKeyDown={handleTabKeyDown}
                    className={`shrink-0 border-b-2 px-2 py-2.5 text-left transition-colors sm:px-3 ${
                      selected
                        ? 'border-terracotta-500 text-terracotta-500 dark:border-saffron-400 dark:text-saffron-400'
                        : 'border-transparent text-soft hover:text-body'
                    }`}
                  >
                    <span className="block text-xs font-semibold sm:text-sm">
                      {lang === 'en' ? category.labelEn : category.labelTe}
                    </span>
                    <span className="mt-0.5 block text-[11px]">
                      {lang === 'en' ? category.timingEn : category.timingTe}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="relative block">
                <span className="sr-only">{t('Search menu items', 'మెనూ వస్తువులను వెతకండి')}</span>
                <Search
                  size={15}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-soft"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t('Search the menu…', 'మెనూ వెతకండి…')}
                  className="field !py-2 pl-9 pr-9 sm:w-56"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-soft hover:text-body"
                    aria-label={t('Clear search', 'వెతుకుడు తొలగించండి')}
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </label>

              <div className="flex rounded-lg border border-hair p-0.5" role="group" aria-label={t('Diet filter', 'ఆహార వర్గం')}>
                {dietOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setDiet(option.id)}
                    aria-pressed={diet === option.id}
                    className={`min-h-8 rounded-md px-3 text-xs font-semibold transition-colors ${
                      diet === option.id
                        ? 'bg-forest-800 text-cream-50 dark:bg-saffron-400 dark:text-forest-950'
                        : 'text-soft hover:text-body'
                    }`}
                  >
                    {lang === 'en' ? option.en : option.te}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeTab}`}
          className="mt-2"
        >
          <p className="border-b border-hair py-3 text-xs font-medium text-soft" aria-live="polite">
            {lang === 'en'
              ? `${items.length} ${items.length === 1 ? 'item' : 'items'}`
              : `${items.length} వస్తువులు`}
            {searching && ` · ${t('search results', 'వెతుకుడు ఫలితాలు')}`}
          </p>

          {items.length === 0 ? (
            <div className="py-16 text-center">
              <UtensilsCrossed size={28} className="mx-auto text-soft" aria-hidden="true" />
              <p className="mt-3 font-display text-xl text-body">
                {t('No dishes match these filters.', 'ఈ ఫిల్టర్లకు వంటకాలు లేవు.')}
              </p>
              <button type="button" onClick={resetFilters} className="btn-outline mt-5">
                {t('Clear filters', 'ఫిల్టర్లు తొలగించండి')}
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-line dark:divide-forest-700">
              {items.map((item) => {
                const name = lang === 'en' ? item.nameEn : item.nameTe;
                const category = categories.find((entry) => entry.id === item.category);
                const countFor = (portion) => cart[lineKey(item.id, portion)] || 0;

                return (
                  <li
                    key={item.id}
                    className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <VegMark isVeg={item.isVeg} lang={lang} />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h3 className="font-display text-lg font-semibold text-body">{name}</h3>
                          {searching && (
                            <span className="rounded-full bg-cream-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-forest-800 dark:bg-forest-700 dark:text-cream-200">
                              {lang === 'en' ? category.labelEn : category.labelTe}
                            </span>
                          )}
                          {item.availability === 'variable' && (
                            <span className="rounded-full border border-hair px-2 py-0.5 text-[10px] font-medium text-soft">
                              {t('Availability varies', 'లభ్యత మారుతుంది')}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-soft">
                          {lang === 'en' ? item.descEn : item.descTe}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-wrap items-center gap-1.5 pl-7 sm:justify-end sm:pl-0">
                      {item.priceHalf ? (
                        [
                          { id: 'half', label: t('Half', 'హాఫ్'), price: item.priceHalf },
                          { id: 'full', label: t('Full', 'ఫుల్'), price: item.priceFull },
                        ].map((portion) => {
                          const count = countFor(portion.id);
                          return (
                            <button
                              key={portion.id}
                              type="button"
                              onClick={() => onAdd(item.id, portion.id)}
                              className="inline-flex min-h-10 items-center gap-1 rounded-lg border border-hair px-3 text-xs font-semibold text-body transition-colors hover:border-terracotta-500 hover:text-terracotta-500 dark:hover:border-saffron-400 dark:hover:text-saffron-400"
                              aria-label={t(
                                `Add ${portion.label} ${item.nameEn} (₹${portion.price}) to takeaway enquiry`,
                                `${item.nameTe} ${portion.label} (₹${portion.price}) విచారణలో చేర్చండి`
                              )}
                            >
                              <Plus size={13} aria-hidden="true" />
                              {portion.label} ₹{portion.price}
                              {count > 0 && (
                                <span className="ml-0.5 rounded-full bg-terracotta-500 px-1.5 text-[10px] font-bold text-white">
                                  {count}
                                </span>
                              )}
                            </button>
                          );
                        })
                      ) : (
                        <button
                          type="button"
                          onClick={() => onAdd(item.id, 'full')}
                          className="inline-flex min-h-10 items-center gap-1 rounded-lg border border-hair px-3 text-xs font-semibold text-body transition-colors hover:border-terracotta-500 hover:text-terracotta-500 dark:hover:border-saffron-400 dark:hover:text-saffron-400"
                          aria-label={t(
                            `Add ${item.nameEn} (₹${item.priceFull}) to takeaway enquiry`,
                            `${item.nameTe} (₹${item.priceFull}) విచారణలో చేర్చండి`
                          )}
                        >
                          <Plus size={13} aria-hidden="true" />
                          {t('Add', 'చేర్చండి')} ₹{item.priceFull}
                          {countFor('full') > 0 && (
                            <span className="ml-0.5 rounded-full bg-terracotta-500 px-1.5 text-[10px] font-bold text-white">
                              {countFor('full')}
                            </span>
                          )}
                        </button>
                      )}

                      <a
                        href={whatsappLink(availabilityMessage(item, lang))}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hair text-soft transition-colors hover:border-[#25D366] hover:text-[#128C48] dark:hover:text-[#7BE3A5]"
                        aria-label={t(
                          `Ask about ${item.nameEn} on WhatsApp`,
                          `${item.nameTe} గురించి వాట్సాప్‌లో అడగండి`
                        )}
                      >
                        <FaWhatsapp size={17} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="mt-8 flex items-start gap-3 border border-hair bg-cream-100 p-4 dark:bg-forest-800/50">
          <Info size={16} className="mt-0.5 shrink-0 text-terracotta-500 dark:text-saffron-400" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-soft sm:text-sm">
            {t(
              'Send a takeaway enquiry and the shop will confirm availability, portion and final price. Prices may change without notice.',
              'టేక్‌అవే విచారణ పంపండి, షాపు లభ్యత, పరిమాణం మరియు తుది ధరను నిర్ధారిస్తుంది. ధరలు మారవచ్చు.'
            )}
          </p>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
