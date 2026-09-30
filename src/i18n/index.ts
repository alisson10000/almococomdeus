import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      brand: {
        name: 'Almoço com Deus',
        subtitle: 'Comunhão • Música • Esperança',
      },
      nav: {
        home: 'Início',
        projects: 'Nossos Projetos',
        foundation: 'Fundação AGGAPE',
        evangelisticProject: 'Projeto Evangelístico',
        churchOnStreets: 'A Igreja nas Ruas',
        invitations: 'Convites downloads',
        donations: 'Doações',
        youtubeMusic: 'Músicas no YouTube',
        musicDownloads: 'Músicas downloads',
        contact: 'Fale Conosco',
      },
      language: {
        label: 'Idioma',
        portuguese: 'Português',
        english: 'Inglês',
        spanish: 'Espanhol',
        french: 'Francês',
        german: 'Alemão',
      },
      contrast: {
        light: 'Ativar contraste claro',
        dark: 'Ativar contraste escuro',
        lightTitle: 'Contraste claro',
        darkTitle: 'Contraste escuro',
      },
      menu: {
        open: 'Abrir menu',
      },
    },
  },
  en: {
    translation: {
      brand: {
        name: 'Lunch with God',
        subtitle: 'Fellowship • Music • Hope',
      },
      nav: {
        home: 'Home',
        projects: 'Our Projects',
        foundation: 'AGGAPE Foundation',
        evangelisticProject: 'Evangelistic Project',
        churchOnStreets: 'The Church on the Streets',
        invitations: 'Invitation downloads',
        donations: 'Donations',
        youtubeMusic: 'Music on YouTube',
        musicDownloads: 'Music downloads',
        contact: 'Contact Us',
      },
      language: {
        label: 'Language',
        portuguese: 'Portuguese',
        english: 'English',
        spanish: 'Spanish',
        french: 'French',
        german: 'German',
      },
      contrast: {
        light: 'Enable light contrast',
        dark: 'Enable dark contrast',
        lightTitle: 'Light contrast',
        darkTitle: 'Dark contrast',
      },
      menu: {
        open: 'Open menu',
      },
    },
  },
  es: {
    translation: {
      brand: {
        name: 'Almuerzo con Dios',
        subtitle: 'Comunión • Música • Esperanza',
      },
      nav: {
        home: 'Inicio',
        projects: 'Nuestros Proyectos',
        foundation: 'Fundación AGGAPE',
        evangelisticProject: 'Proyecto Evangelístico',
        churchOnStreets: 'La Iglesia en las Calles',
        invitations: 'Descargas de invitaciones',
        donations: 'Donaciones',
        youtubeMusic: 'Música en YouTube',
        musicDownloads: 'Descargas de música',
        contact: 'Contacto',
      },
      language: {
        label: 'Idioma',
        portuguese: 'Portugués',
        english: 'Inglés',
        spanish: 'Español',
        french: 'Francés',
        german: 'Alemán',
      },
      contrast: {
        light: 'Activar contraste claro',
        dark: 'Activar contraste oscuro',
        lightTitle: 'Contraste claro',
        darkTitle: 'Contraste oscuro',
      },
      menu: {
        open: 'Abrir menú',
      },
    },
  },
  fr: {
    translation: {
      brand: {
        name: 'Déjeuner avec Dieu',
        subtitle: 'Communion • Musique • Espérance',
      },
      nav: {
        home: 'Accueil',
        projects: 'Nos Projets',
        foundation: 'Fondation AGGAPE',
        evangelisticProject: 'Projet Évangélique',
        churchOnStreets: "L'Église dans les Rues",
        invitations: "Téléchargements d'invitations",
        donations: 'Dons',
        youtubeMusic: 'Musiques sur YouTube',
        musicDownloads: 'Téléchargements de musiques',
        contact: 'Contact',
      },
      language: {
        label: 'Langue',
        portuguese: 'Portugais',
        english: 'Anglais',
        spanish: 'Espagnol',
        french: 'Français',
        german: 'Allemand',
      },
      contrast: {
        light: 'Activer le contraste clair',
        dark: 'Activer le contraste sombre',
        lightTitle: 'Contraste clair',
        darkTitle: 'Contraste sombre',
      },
      menu: {
        open: 'Ouvrir le menu',
      },
    },
  },
  de: {
    translation: {
      brand: {
        name: 'Mittagessen mit Gott',
        subtitle: 'Gemeinschaft • Musik • Hoffnung',
      },
      nav: {
        home: 'Startseite',
        projects: 'Unsere Projekte',
        foundation: 'AGGAPE Stiftung',
        evangelisticProject: 'Evangelistisches Projekt',
        churchOnStreets: 'Die Kirche auf den Straßen',
        invitations: 'Einladungen herunterladen',
        donations: 'Spenden',
        youtubeMusic: 'Musik auf YouTube',
        musicDownloads: 'Musik herunterladen',
        contact: 'Kontakt',
      },
      language: {
        label: 'Sprache',
        portuguese: 'Portugiesisch',
        english: 'Englisch',
        spanish: 'Spanisch',
        french: 'Französisch',
        german: 'Deutsch',
      },
      contrast: {
        light: 'Hellen Kontrast aktivieren',
        dark: 'Dunklen Kontrast aktivieren',
        lightTitle: 'Heller Kontrast',
        darkTitle: 'Dunkler Kontrast',
      },
      menu: {
        open: 'Menü öffnen',
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es', 'fr', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'almoco-com-deus-language',
    },
  })

export default i18n
