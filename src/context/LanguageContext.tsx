'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, LanguageItem } from '@/data/navigation';

export type LanguageCode = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'hi';

export interface LanguageContextType {
  currentLang: LanguageCode;
  currentLangItem: LanguageItem;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<string, Record<LanguageCode, string>> = {
  // Navigation
  'nav_jobs': {
    en: 'Jobs',
    nl: 'Vacatures',
    de: 'Jobs',
    fr: 'Emplois',
    es: 'Empleos',
    hi: 'नौकरियां',
  },
  'nav_career_advice': {
    en: 'Career Advice',
    nl: 'Carrièreadvies',
    de: 'Karriereberatung',
    fr: 'Conseils Carrière',
    es: 'Consejos de Carrera',
    hi: 'करियर सलाह',
  },
  'nav_blogs': {
    en: 'Blogs',
    nl: 'Blogs',
    de: 'Blogs',
    fr: 'Blogs',
    es: 'Blogs',
    hi: 'ब्लॉग',
  },
  'nav_news': {
    en: 'News',
    nl: 'Nieuws',
    de: 'Nachrichten',
    fr: 'Actualités',
    es: 'Noticias',
    hi: 'समाचार',
  },
  'nav_vacancies': {
    en: 'Vacancies',
    nl: 'Vacatures',
    de: 'Stellenangebote',
    fr: 'Postes Vacants',
    es: 'Vacantes',
    hi: 'रिक्तियां',
  },
  'nav_job_alert': {
    en: 'Job Alert',
    nl: 'Job Alert',
    de: 'Job-Alarm',
    fr: 'Alerte Emploi',
    es: 'Alerta de Empleo',
    hi: 'जॉब अलर्ट',
  },
  'nav_about_us': {
    en: 'About Us',
    nl: 'Over Ons',
    de: 'Über Uns',
    fr: 'À Propos',
    es: 'Sobre Nosotros',
    hi: 'हमारे बारे में',
  },
  'btn_login': {
    en: 'Login',
    nl: 'Inloggen',
    de: 'Anmelden',
    fr: 'Connexion',
    es: 'Iniciar Sesión',
    hi: 'लॉग इन',
  },
  'btn_register': {
    en: 'Register',
    nl: 'Registreren',
    de: 'Registrieren',
    fr: "S'inscrire",
    es: 'Registrarse',
    hi: 'रजिस्टर करें',
  },

  // Hero & General
  'hero_eyebrow_global': {
    en: 'Global Opportunities',
    nl: 'Wereldwijde Kansen',
    de: 'Globale Möglichkeiten',
    fr: 'Opportunités Mondiales',
    es: 'Oportunidades Globales',
    hi: 'वैश्विक अवसर',
  },
  'hero_eyebrow_live': {
    en: 'Live Career Openings',
    nl: 'Actuele Vacatures',
    de: 'Aktuelle Stellenangebote',
    fr: 'Offres en Direct',
    es: 'Ofertas Activas',
    hi: 'सक्रिय करियर अवसर',
  },
  'vacancies_title': {
    en: 'Explore International Vacancies',
    nl: 'Ontdek Internationale Vacatures',
    de: 'Internationale Stellenangebote Entdecken',
    fr: 'Explorer les Postes Internationaux',
    es: 'Explorar Vacantes Internacionales',
    hi: 'अंतर्राष्ट्रीय रिक्तियों का अन्वेषण करें',
  },
  'vacancies_sub': {
    en: 'Browse verified job opportunities with premier technology and corporate leaders across Europe, Asia, and the Americas.',
    nl: 'Bekijk geverifieerde carrièremogelijkheden bij toonaangevende technologie- en bedrijfsleiders in Europa, Azië en Amerika.',
    de: 'Durchsuchen Sie verifizierte Jobangebote bei führenden Technologie- und Unternehmensleitern in Europa, Asien und Amerika.',
    fr: "Parcourez des opportunités d'emploi vérifiées auprès de leaders de la technologie et des entreprises en Europe, Asie et Amériques.",
    es: 'Explore oportunidades laborales verificadas con empresas líderes en tecnología y negocios en Europa, Asia y América.',
    hi: 'यूरोप, एशिया और अमेरिका में अग्रणी प्रौद्योगिकी और कॉर्पोरेट नेताओं के साथ सत्यापित नौकरी के अवसर देखें।',
  },
  'jobs_title': {
    en: 'Global Job Opportunities',
    nl: 'Wereldwijde Banen en Kansen',
    de: 'Globale Karrieremöglichkeiten',
    fr: "Opportunités d'Emploi Mondiales",
    es: 'Oportunidades Globales de Empleo',
    hi: 'वैश्विक नौकरी के अवसर',
  },
  'jobs_sub': {
    en: 'Explore thousands of curated roles across 50+ countries. Find international positions in software engineering, banking, healthcare, and executive management.',
    nl: 'Ontdek duizenden functies in 50+ landen. Vind internationale posities in software engineering, bankieren, zorg en management.',
    de: 'Entdecken Sie Tausende von Stellenangeboten in über 50 Ländern in Softwareentwicklung, Bankwesen, Gesundheitswesen und Management.',
    fr: 'Explorez des milliers de postes sélectionnés dans plus de 50 pays. Trouvez des postes internationaux en ingénierie, finance et gestion.',
    es: 'Explore miles de roles en más de 50 países. Encuentre puestos internacionales en ingeniería de software, finanzas y gestión.',
    hi: '50+ देशों में हजारों चुनिंदा पदों का अन्वेषण करें। सॉफ्टवेयर इंजीनियरिंग, बैंकिंग, स्वास्थ्य सेवा और प्रबंधन में अंतर्राष्ट्रीय पद खोजें।',
  },

  // Search Bar
  'search_keyword_title': {
    en: 'Job title, skills or keywords',
    nl: 'Functietitel, vaardigheden of trefwoorden',
    de: 'Berufsbezeichnung, Fähigkeiten oder Stichworte',
    fr: 'Titre du poste, compétences ou mots-clés',
    es: 'Título del trabajo, habilidades o palabras clave',
    hi: 'नौकरी का शीर्षक, कौशल या कीवर्ड',
  },
  'search_keyword_ph': {
    en: 'e.g. Software Developer, HR, Finance',
    nl: 'bijv. Softwareontwikkelaar, HR, Financiën',
    de: 'z.B. Softwareentwickler, HR, Finanzen',
    fr: 'ex. Développeur Logiciel, RH, Finance',
    es: 'ej. Desarrollador de Software, RRHH, Finanzas',
    hi: 'उदा. सॉफ्टवेयर डेवलपर, एचआर, वित्त',
  },
  'search_location_title': {
    en: 'Location',
    nl: 'Locatie',
    de: 'Standort',
    fr: 'Emplacement',
    es: 'Ubicación',
    hi: 'स्थान',
  },
  'search_location_ph': {
    en: 'e.g. Netherlands, India, Remote',
    nl: 'bijv. Nederland, India, Op Afstand',
    de: 'z.B. Niederlande, Indien, Remote',
    fr: 'ex. Pays-Bas, Inde, Télétravail',
    es: 'ej. Países Bajos, India, Remoto',
    hi: 'उदा. नीदरलैंड, भारत, रिमोट',
  },
  'search_type_title': {
    en: 'Job type',
    nl: 'Type baan',
    de: 'Anstellungsart',
    fr: "Type d'emploi",
    es: 'Tipo de empleo',
    hi: 'नौकरी का प्रकार',
  },
  'search_btn': {
    en: 'Search Jobs',
    nl: 'Zoek Banen',
    de: 'Jobs Suchen',
    fr: 'Rechercher',
    es: 'Buscar Empleos',
    hi: 'नौकरी खोजें',
  },
  'all_types': {
    en: 'All types',
    nl: 'Alle types',
    de: 'Alle Arten',
    fr: 'Tous types',
    es: 'Todos los tipos',
    hi: 'सभी प्रकार',
  },
  'type_full_time': {
    en: 'Full-time',
    nl: 'Voltijds',
    de: 'Vollzeit',
    fr: 'Temps plein',
    es: 'Tiempo completo',
    hi: 'पूर्णकालिक',
  },
  'type_part_time': {
    en: 'Part-time',
    nl: 'Deeltijds',
    de: 'Teilzeit',
    fr: 'Temps partiel',
    es: 'Tiempo parcial',
    hi: 'अंशकालिक',
  },
  'type_contract': {
    en: 'Contract',
    nl: 'Contract',
    de: 'Vertrag',
    fr: 'Contrat',
    es: 'Contrato',
    hi: 'अनुबंध',
  },
  'type_remote': {
    en: 'Remote',
    nl: 'Op Afstand',
    de: 'Remote',
    fr: 'Télétravail',
    es: 'Remoto',
    hi: 'रिमोट',
  },
  'type_temporary': {
    en: 'Temporary',
    nl: 'Tijdelijk',
    de: 'Befristet',
    fr: 'Temporaire',
    es: 'Temporal',
    hi: 'अस्थायी',
  },

  // Popular Filters & Actions
  'chip_remote': {
    en: 'Remote',
    nl: 'Op Afstand',
    de: 'Remote',
    fr: 'Télétravail',
    es: 'Remoto',
    hi: 'रिमोट',
  },
  'chip_netherlands': {
    en: 'Netherlands',
    nl: 'Nederland',
    de: 'Niederlande',
    fr: 'Pays-Bas',
    es: 'Países Bajos',
    hi: 'नीदरलैंड',
  },
  'chip_india': {
    en: 'India',
    nl: 'India',
    de: 'Indien',
    fr: 'Inde',
    es: 'India',
    hi: 'भारत',
  },
  'chip_poland': {
    en: 'Poland',
    nl: 'Polen',
    de: 'Polen',
    fr: 'Pologne',
    es: 'Polonia',
    hi: 'पोलैंड',
  },
  'chip_germany': {
    en: 'Germany',
    nl: 'Duitsland',
    de: 'Deutschland',
    fr: 'Allemagne',
    es: 'Alemania',
    hi: 'जर्मनी',
  },
  'chip_contract': {
    en: 'Contract',
    nl: 'Contract',
    de: 'Vertrag',
    fr: 'Contrat',
    es: 'Contrato',
    hi: 'अनुबंध',
  },
  'chip_permanent': {
    en: 'Permanent',
    nl: 'Vast Dienstverband',
    de: 'Festanstellung',
    fr: 'Permanent (CDI)',
    es: 'Permanente',
    hi: 'स्थायी',
  },
  'chip_it_software': {
    en: 'IT & Software',
    nl: 'IT & Software',
    de: 'IT & Software',
    fr: 'IT & Logiciel',
    es: 'TI y Software',
    hi: 'आईटी और सॉफ्टवेयर',
  },
  'chip_finance': {
    en: 'Finance',
    nl: 'Financiën',
    de: 'Finanzen',
    fr: 'Finance',
    es: 'Finanzas',
    hi: 'वित्त',
  },
  'chip_hr': {
    en: 'HR',
    nl: 'HR & Personeel',
    de: 'Personalwesen',
    fr: 'Ressources Humaines',
    es: 'Recursos Humanos',
    hi: 'मानव संसाधन (HR)',
  },
  'chip_marketing': {
    en: 'Marketing',
    nl: 'Marketing',
    de: 'Marketing',
    fr: 'Marketing',
    es: 'Marketing',
    hi: 'मार्केटिंग',
  },
  'advanced_search': {
    en: 'Advanced Search',
    nl: 'Geavanceerd Zoeken',
    de: 'Erweiterte Suche',
    fr: 'Recherche Avancée',
    es: 'Búsqueda Avanzada',
    hi: 'उन्नत खोज',
  },

  // Job Listing Elements
  'showing_vacancies': {
    en: 'Showing active vacancies',
    nl: 'Actieve vacatures worden getoond',
    de: 'Aktive Stellenangebote angezeigt',
    fr: 'Offres actives affichées',
    es: 'Mostrando vacantes activas',
    hi: 'सक्रिय रिक्तियां प्रदर्शित हैं',
  },
  'filters_title': {
    en: 'Filters',
    nl: 'Filters',
    de: 'Filter',
    fr: 'Filtres',
    es: 'Filtros',
    hi: 'फ़िल्टर',
  },
  'reset_all': {
    en: 'Reset All',
    nl: 'Alles Herstellen',
    de: 'Alle Zurücksetzen',
    fr: 'Tout Réinitialiser',
    es: 'Restablecer Todo',
    hi: 'सभी रीसेट करें',
  },
  'apply_now': {
    en: 'Apply Now',
    nl: 'Nu Solliciteren',
    de: 'Jetzt Bewerben',
    fr: 'Postuler Maintenant',
    es: 'Aplicar Ahora',
    hi: 'अभी आवेदन करें',
  },
  'view_details': {
    en: 'View Details',
    nl: 'Details Bekijken',
    de: 'Details Anzeigen',
    fr: 'Voir les Détails',
    es: 'Ver Detalles',
    hi: 'विवरण देखें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function triggerGoogleTranslate(langCode: string) {
  if (typeof window === 'undefined') return;

  try {
    const domain = window.location.hostname;
    // Set cookies for Google Translate
    if (langCode === 'en') {
      document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      document.cookie = `googtrans=/en/en; path=/;`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain};`;
    }

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  } catch (err) {
    console.error('Google Translate trigger error:', err);
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<LanguageCode>('en');

  useEffect(() => {
    // Read stored language preference
    const saved = localStorage.getItem('jf_language') as LanguageCode;
    if (saved && ['en', 'nl', 'de', 'fr', 'es', 'hi'].includes(saved)) {
      setCurrentLangState(saved);
      if (saved !== 'en') {
        setTimeout(() => triggerGoogleTranslate(saved), 1000);
      }
    }

    // Initialize Google Translate script
    if (typeof window !== 'undefined') {
      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,nl,de,fr,es,hi',
              autoDisplay: false,
            },
            'google_translate_element'
          );

          // If language was previously selected, apply it once Google is ready
          const current = (localStorage.getItem('jf_language') as LanguageCode) || 'en';
          if (current !== 'en') {
            setTimeout(() => triggerGoogleTranslate(current), 500);
          }
        }
      };

      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setCurrentLangState(code);
    try {
      localStorage.setItem('jf_language', code);
    } catch {
      // ignore
    }
    triggerGoogleTranslate(code);
  };

  const t = (key: string, fallback?: string): string => {
    const entry = translations[key];
    if (entry && entry[currentLang]) {
      return entry[currentLang];
    }
    return fallback || entry?.['en'] || key;
  };

  const currentLangItem =
    languages.find((l) => l.code === currentLang) ||
    languages[0] || { code: 'en', name: 'EN', label: 'English', flag: '🇬🇧' };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        currentLangItem,
        setLanguage,
        t,
      }}
    >
      <div id="google_translate_element" style={{ display: 'none' }} aria-hidden="true" />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
