/**
 * Single source of truth for every business detail shown on the site.
 * Update a phone number, hour or link here — never inside components.
 */
export const business = {
  name: 'Nivas Tiffin Center',
  nameTe: 'నివాస్ టిఫిన్ సెంటర్',
  shortDescriptionEn:
    'A local tiffin center in Sundaragiri serving fresh breakfast, meals and evening snacks.',
  shortDescriptionTe:
    'సుందరగిరిలో తాజా అల్పాహారం, భోజనం మరియు సాయంత్రం స్నాక్స్ అందించే స్థానిక టిఫిన్ సెంటర్.',

  phones: [
    { display: '9963090468', e164: '+919963090468' },
    { display: '9701513468', e164: '+919701513468' },
  ],

  // Primary number used for all WhatsApp enquiries.
  whatsapp: '9110372978',
  // Secondary number already published by the business for WhatsApp contact.
  whatsappSecondary: '9701513468',

  address: {
    plusCode: '55VX+VRM',
    locality: 'Sundaragiri',
    region: 'Telangana',
    postalCode: '505467',
    country: 'India',
  },

  hours: {
    openDaily: '5:00 AM – 10:30 PM',
    services: [
      {
        id: 'morning',
        en: 'Morning tiffins · 5:00 AM – 11:00 AM',
        te: 'ఉదయం టిఫిన్స్ · 5:00 – 11:00',
      },
      {
        id: 'afternoon',
        en: 'Afternoon meals · 11:00 AM – 3:00 PM',
        te: 'మధ్యాహ్న భోజనం · 11:00 – 3:00',
      },
      {
        id: 'evening',
        en: 'Evening snacks · 4:00 PM – 10:30 PM',
        te: 'సాయంత్రం స్నాక్స్ · 4:00 – 10:30',
      },
    ],
  },

  maps: {
    directions:
      'https://www.google.com/maps/search/?api=1&query=55VX%2BVRM+Sundaragiri+Telangana+505467',
    embed: 'https://www.google.com/maps?q=18.194619,79.199441&z=16&output=embed',
  },

  // Business rules customers must see before enquiring.
  noHomeDelivery: true,
  noOnlinePayment: true,
};

export const telLink = (e164) => `tel:${e164}`;
export const mapsLink = business.maps.directions;

export const fullAddress = `${business.address.plusCode}, ${business.address.locality}, ${business.address.region} ${business.address.postalCode}`;
