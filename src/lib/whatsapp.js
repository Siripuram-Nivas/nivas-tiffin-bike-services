import { business } from '../data/business.js';

const digitsOnly = (value) => String(value).replace(/\D/g, '');

/** Builds a wa.me link for the configured business number. Never sends anything by itself. */
export const whatsappLink = (text, phone = business.whatsapp) =>
  `https://wa.me/91${digitsOnly(phone)}?text=${encodeURIComponent(text)}`;

const copy = {
  en: {
    greeting: 'Hello Nivas Tiffin Center!',
    enquiryIntro: 'I would like to check takeaway availability for:',
    estimate: 'Estimated total',
    estimateNote: 'This is an estimate only, not a confirmed order.',
    note: 'Note',
    closing:
      'Please confirm availability and whether the order can be accepted. Takeaway only — no home delivery and no online payment.',
    availability: (name) =>
      `Hello Nivas Tiffin Center! Is ${name} available now? I would like to arrange a takeaway.`,
    general: 'Hello Nivas Tiffin Center! Could you share today’s available items and timings?',
    half: 'Half',
    full: 'Full',
  },
  te: {
    greeting: 'నమస్తే నివాస్ టిఫిన్ సెంటర్!',
    enquiryIntro: 'పార్శిల్ (టేక్‌అవే) కోసం లభ్యత తెలుసుకోవాలనుకుంటున్నాను:',
    estimate: 'అంచనా మొత్తం',
    estimateNote: 'ఇది కేవలం అంచనా మాత్రమే, నిర్ధారించిన ఆర్డర్ కాదు.',
    note: 'గమనిక',
    closing:
      'దయచేసి లభ్యత మరియు ఆర్డర్ స్వీకరించగలరా అని నిర్ధారించండి. టేక్‌అవే మాత్రమే — హోమ్ డెలివరీ లేదు, ఆన్‌లైన్ చెల్లింపు లేదు.',
    availability: (name) =>
      `నమస్తే నివాస్ టిఫిన్ సెంటర్! ${name} ఇప్పుడు లభ్యమవుతుందా? టేక్‌అవే కోసం అడుగుతున్నాను.`,
    general: 'నమస్తే నివాస్ టిఫిన్ సెంటర్! ఈరోజు లభ్యమయ్యే వస్తువులు మరియు సమయాలు చెప్పగలరా?',
    half: 'హాఫ్',
    full: 'ఫుల్',
  },
};

const nameOf = (item, lang) => (lang === 'en' ? item.nameEn : item.nameTe);

export const availabilityMessage = (item, lang) =>
  copy[lang].availability(nameOf(item, lang));

export const generalEnquiryMessage = (lang) => copy[lang].general;

/** Builds the takeaway enquiry message. Availability is always left for the shop to confirm. */
export const buildEnquiryMessage = ({ lines, total, note = '', lang = 'en' }) => {
  const t = copy[lang] || copy.en;
  const itemLines = lines.map(({ item, portion, qty, lineTotal }) => {
    const portionLabel = item.priceHalf
      ? ` (${portion === 'half' ? t.half : t.full})`
      : '';
    return `• ${nameOf(item, lang)}${portionLabel} × ${qty} — ₹${lineTotal}`;
  });

  const parts = [
    t.greeting,
    '',
    t.enquiryIntro,
    ...itemLines,
    '',
    `${t.estimate}: ₹${total} (${t.estimateNote})`,
  ];

  if (note.trim()) parts.push('', `${t.note}: ${note.trim()}`);
  parts.push('', t.closing);

  return parts.join('\n');
};
