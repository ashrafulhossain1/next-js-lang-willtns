export type FeatureItem = {
  id: number;
  logo: string;
  firstTitle: string;
  secondTitle: string;
  paragraph: string;
};

export const aiComplianceData: FeatureItem[] = [
  {
    id: 1,
    logo: '/images/icons/detection.svg',
    firstTitle: 'Détection',
    secondTitle: 'automatique des',
    paragraph:
      'Renseignements personnels dans les messages et les pièces jointes.',
  },
  {
    id: 2,
    logo: '/images/icons/security.svg',
    firstTitle: 'Analyse',
    secondTitle: 'intelligente des',
    paragraph:
      'Contenus sensibles pour garantir la sécurité des données confidentielles.',
  },
  {
    id: 3,
    logo: '/images/icons/warning.svg',
    firstTitle: 'Alertes',
    secondTitle: 'en temps réel',
    paragraph:
      'Notifications instantanées en cas de risque de fuite ou de violation.',
  },
  {
    id: 4,
    logo: '/images/icons/control.svg',
    firstTitle: 'Contrôle',
    secondTitle: 'automatisé des',
    paragraph:
      'Accès utilisateurs pour renforcer la protection des informations.',
  },
];
