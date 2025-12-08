export type AssistantCardItem = {
  id: number;
  imageSrc: string;
  title: string;
};

export const assistantCards: AssistantCardItem[] = [
  {
    id: 1,
    imageSrc: '/images/about/assistant-1.svg',
    title: 'Génère des transcriptions texte de tous vos enregistrements',
  },
  {
    id: 2,
    imageSrc: '/images/about/assistant-2.svg',
    title: 'Analyse vos appels et fournit des insights clés',
  },
  {
    id: 3,
    imageSrc: '/images/about/assistant-3.svg',
    title: 'Automatise vos tâches répétitives et notifications',
  },
];
