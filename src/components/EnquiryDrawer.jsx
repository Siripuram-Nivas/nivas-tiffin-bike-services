import { useEffect, useRef, useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { MAX_QTY } from '../lib/enquiry';
import { buildEnquiryMessage, whatsappLink } from '../lib/whatsapp';

const EnquiryDrawer = ({ open, onClose, lang, lines, count, total, onChangeQty, onClear }) => {
  const t = (en, te) => (lang === 'en' ? en : te);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const message = buildEnquiryMessage({ lines, total, note, lang });

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center md:items-center md:p-4">
      <div
        className="absolute inset-0 bg-forest-950/65 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative flex max-h-[92vh] w-full animate-sheet-in flex-col border-t border-line bg-cream-50 dark:border-forest-700 dark:bg-forest-900 md:max-h-[85vh] md:max-w-lg md:border"
      >
        <div className="flex items-center justify-between border-b border-hair px-5 py-4">
          <div>
            <h2 id="enquiry-title" className="font-display text-xl font-semibold text-body">
              {t('Takeaway enquiry', 'టేక్అవే విచారణ')}
            </h2>
            <p className="mt-0.5 text-xs text-soft">
              {t(`${count} ${count === 1 ? 'item' : 'items'} selected`, `${count} వస్తువులు ఎంచుకున్నారు`)}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-soft hover:text-body"
            aria-label={t('Close enquiry', 'విచారణ మూసివేయండి')}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="py-10 text-center">
              <ShoppingBag size={30} className="mx-auto text-soft" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-semibold text-body">
                {t('Your enquiry is empty.', 'మీ విచారణ ఖాళీగా ఉంది.')}
              </p>
              <p className="mx-auto mt-1 max-w-xs text-sm leading-relaxed text-soft">
                {t(
                  'Add dishes from the menu to build a takeaway list to share with the shop.',
                  'షాపుతో పంచుకోవడానికి టేక్‌అవే జాబితా కోసం మెనూ నుండి వంటకాలను చేర్చండి.'
                )}
              </p>
              <a href="#menu" onClick={onClose} className="btn-primary mt-5">
                {t('Browse the menu', 'మెనూ చూడండి')}
              </a>
            </div>
          ) : (
            <ul className="divide-y divide-line dark:divide-forest-700">
              {lines.map(({ key, item, portion, qty, unitPrice, lineTotal }) => {
                const portionText = item.priceHalf
                  ? portion === 'half'
                    ? t('Half', 'హాఫ్')
                    : t('Full', 'ఫుల్')
                  : '';
                const displayName = `${lang === 'en' ? item.nameEn : item.nameTe}${
                  portionText ? ` (${portionText})` : ''
                }`;

                return (
                  <li key={key} className="flex items-start justify-between gap-3 py-3.5">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-body">{displayName}</p>
                      <p className="mt-0.5 text-xs text-soft">
                        ₹{unitPrice} × {qty}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-hair">
                        <button
                          type="button"
                          onClick={() => onChangeQty(key, -1)}
                          className="flex h-9 w-9 items-center justify-center text-body hover:bg-cream-100 dark:hover:bg-forest-800"
                          aria-label={t(
                            `Remove one ${displayName}`,
                            `${displayName} ఒకటి తగ్గించండి`
                          )}
                        >
                          <Minus size={13} aria-hidden="true" />
                        </button>
                        <span className="min-w-6 text-center text-xs font-semibold text-body" aria-live="polite">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onChangeQty(key, 1)}
                          disabled={qty >= MAX_QTY}
                          className="flex h-9 w-9 items-center justify-center text-body hover:bg-cream-100 disabled:opacity-40 dark:hover:bg-forest-800"
                          aria-label={t(
                            `Add one more ${displayName}`,
                            `${displayName} మరొకటి చేర్చండి`
                          )}
                        >
                          <Plus size={13} aria-hidden="true" />
                        </button>
                      </div>
                      <span className="w-14 text-right text-sm font-semibold text-body">₹{lineTotal}</span>
                      <button
                        type="button"
                        onClick={() => onChangeQty(key, -qty)}
                        className="p-2.5 text-soft hover:text-terracotta-500 dark:hover:text-saffron-400"
                        aria-label={t(`Remove ${displayName}`, `${displayName} తొలగించండి`)}
                      >
                        <Trash2 size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {lines.length > 0 && (
            <div className="mt-4">
              <label htmlFor="enquiry-note" className="text-xs font-semibold text-body">
                {t('Note for the shop (optional)', 'షాపుకు గమనిక (ఐచ్ఛికం)')}
              </label>
              <textarea
                id="enquiry-note"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                maxLength={200}
                rows={2}
                placeholder={t('e.g. less spicy, pick up at 8 AM', 'ఉదా: తక్కువ కారం, ఉదయం 8కి వస్తాను')}
                className="field mt-1.5 resize-none"
              />
            </div>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-hair px-5 py-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-body">
                {t('Estimated total', 'అంచనా మొత్తం')}
              </span>
              <span className="font-display text-2xl font-semibold text-body" aria-live="polite">
                ₹{total}
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-soft">
              {t(
                'Estimate only — the final price is confirmed by the shop.',
                'ఇది అంచనా మాత్రమే — తుది ధరను షాపు నిర్ధారిస్తుంది.'
              )}
            </p>

            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              className="btn-wa mt-3 w-full"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              {t('Send enquiry on WhatsApp', 'వాట్సాప్‌లో విచారణ పంపండి')}
            </a>

            <p className="mt-2.5 flex items-start gap-1.5 text-[11px] leading-relaxed text-soft">
              <Info size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
              {t(
                'WhatsApp opens with your list. Availability and order acceptance are confirmed by the shop. Takeaway only — no home delivery.',
                'మీ జాబితాతో వాట్సాప్ తెరుచుకుంటుంది. లభ్యత మరియు ఆర్డర్ ఆమోదాన్ని షాపు నిర్ధారిస్తుంది. టేక్‌అవే మాత్రమే — హోమ్ డెలివరీ లేదు.'
              )}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={onClear}
                className="text-xs font-medium text-soft underline-offset-4 hover:text-terracotta-500 hover:underline dark:hover:text-saffron-400"
              >
                {t('Clear enquiry', 'విచారణ ఖాళీ చేయండి')}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-medium text-soft underline-offset-4 hover:text-body hover:underline"
              >
                {t('Keep browsing', 'మెనూ చూడండి')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryDrawer;
