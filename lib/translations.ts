export type Language = "en" | "bn";

export const translations = {
  en: {
    home: {
      title: "Welcome to Next.js",
      description: "To get started, edit the page.tsx file.",
      templates: "Templates",
      learning: "Learning",
      deployNow: "Deploy Now",
      documentation: "Documentation",
    },
    about: {
      title: "About Us",
      description: "This is the about page.",
      content: "Learn more about our company and mission.",
    },
    nav: {
      home: "Home",
      about: "About",
    },
  },
  bn: {
    home: {
      title: "Next.js এ স্বাগতম",
      description: "শুরু করতে, page.tsx ফাইলটি সম্পাদনা করুন।",
      templates: "টেমপ্লেট",
      learning: "শিক্ষা",
      deployNow: "এখনই ডিপ্লয় করুন",
      documentation: "ডকুমেন্টেশন",
    },
    about: {
      title: "আমাদের সম্পর্কে",
      description: "এটি সম্পর্কে পৃষ্ঠা।",
      content: "আমাদের কোম্পানি এবং মিশন সম্পর্কে আরও জানুন।",
    },
    nav: {
      home: "হোম",
      about: "সম্পর্কে",
    },
  },
} as const;

export function getTranslations(lang: Language) {
  return translations[lang];
}

