// cards.ts

// 1️⃣ Facility type
export type Facility = {
  text: string;
  icon: string;
};

// 2️⃣ Card type
export type Card = {
  id: number;
  name: string;
  price: string;
  info: string;
  image: string;
  hoverTitle: string;
  facilities: Facility[];
};

// 3️⃣ Cards data
export const cards: Card[] = [
  {
    id: 1,
    name: 'Service IVR',
    price: '$5 CAD/mois',
    info: 'Hover for more info',
    image: '/images/about/module-1.svg',
    hoverTitle: 'Features',
    facilities: [
      {
        text: "Statistiques d'utilisation détaillées",
        icon: '/assets/check-orange.svg',
      },
      {
        text: 'Configuration flexible des options',
        icon: '/assets/check-orange.svg',
      },
      {
        text: 'Routage intelligent des appels',
        icon: '/assets/check-orange.svg',
      },
      {
        text: 'Voix professionnelle bilingue (FR/EN)',
        icon: '/assets/check-orange.svg',
      },
      {
        text: 'Menu vocal interactif personnalisé',
        icon: '/assets/check-orange.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'Service SMS',
    price: '$10 CAD/mois',
    info: 'Hover for more info',
    image: '/images/about/module-3.svg',
    hoverTitle: 'Features',
    facilities: [
      { text: 'Bulk SMS sending', icon: '/assets/check-orange.svg' },
      { text: 'Auto reply', icon: '/assets/check-orange.svg' },
      { text: 'Scheduling messages', icon: '/assets/check-orange.svg' },
      { text: 'Detailed analytics', icon: '/assets/check-orange.svg' },
      { text: 'Custom templates', icon: '/assets/check-orange.svg' },
    ],
  },
  {
    id: 3,
    name: 'Service Call Center',
    price: '$15 CAD/mois',
    info: 'Hover for more info',
    image: '/images/about/module-3.svg',
    hoverTitle: 'Features',
    facilities: [
      { text: 'Real-time monitoring', icon: '/assets/check-orange.svg' },
      { text: 'Multi-agent support', icon: '/assets/check-orange.svg' },
      { text: 'Call recording', icon: '/assets/check-orange.svg' },
      { text: 'Smart call routing', icon: '/assets/check-orange.svg' },
      { text: 'Custom dashboards', icon: '/assets/check-orange.svg' },
    ],
  },
  {
    id: 4,
    name: 'Service Analytics',
    price: '$20 CAD/mois',
    info: 'Hover for more info',
    image: '/images/about/module-5.svg',
    hoverTitle: 'Features',
    facilities: [
      { text: 'Real-time reports', icon: '/assets/check-orange.svg' },
      { text: 'Customizable charts', icon: '/assets/check-orange.svg' },
      { text: 'Export options', icon: '/assets/check-orange.svg' },
      { text: 'Data filtering', icon: '/assets/check-orange.svg' },
      { text: 'API integration', icon: '/assets/check-orange.svg' },
    ],
  },
  {
    id: 5,
    name: 'Service Support',
    price: '$25 CAD/mois',
    info: 'Hover for more info',
    image: '/images/about/module-4.svg',
    hoverTitle: 'Features',
    facilities: [
      { text: '24/7 Support', icon: '/assets/check-orange.svg' },
      { text: 'Multi-channel helpdesk', icon: '/assets/check-orange.svg' },
      { text: 'Ticket tracking', icon: '/assets/check-orange.svg' },
      { text: 'Knowledge base', icon: '/assets/check-orange.svg' },
      { text: 'Customer feedback', icon: '/assets/check-orange.svg' },
    ],
  },
];
