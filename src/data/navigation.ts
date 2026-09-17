import { NavigationItem } from '@/types/common';

export const mainNavigation: NavigationItem[] = [
  { name: 'Job Alert', href: '/job-alert' },
  { name: 'Blogs', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Vacancies', href: '/vacancies' },
];

export interface LanguageItem {
  code: string;
  name: string;
  label: string;
  flag: string;
}

export const languages: LanguageItem[] = [
  { code: 'en', name: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'NL', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'DE', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'hi', name: 'HI', label: 'हिन्दी', flag: '🇮🇳' },
];
