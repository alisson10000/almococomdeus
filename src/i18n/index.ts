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
        biography: 'Biografia',
        projects: 'Nossos Projetos',
        foundation: 'Fundação AGGAPE',
        evangelisticProject: 'Projeto Evangelístico',
        churchOnStreets: 'A Igreja nas Ruas',
        invitations: 'Convites downloads',
        donations: 'Doações',
        music: 'Músicas',
        youtubeMusic: 'Músicas no YouTube',
        musicDownloads: 'Músicas downloads',
        contact: 'Fale Conosco',
      },
      language: {
        label: 'Idioma',
        portuguese: 'Português',
        italian: 'Italiano',
        english: 'Inglês',
        spanish: 'Espanhol',
        french: 'Francês',
        german: 'Alemão',
        russian: 'Russo',
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
        biography: 'Biography',
        projects: 'Our Projects',
        foundation: 'AGGAPE Foundation',
        evangelisticProject: 'Evangelistic Project',
        churchOnStreets: 'The Church on the Streets',
        invitations: 'Invitation downloads',
        donations: 'Donations',
        music: 'Music',
        youtubeMusic: 'Music on YouTube',
        musicDownloads: 'Music downloads',
        contact: 'Contact Us',
      },
      language: {
        label: 'Language',
        portuguese: 'Portuguese',
        italian: 'Italian',
        english: 'English',
        spanish: 'Spanish',
        french: 'French',
        german: 'German',
        russian: 'Russian',
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
        biography: 'Biografía',
        projects: 'Nuestros Proyectos',
        foundation: 'Fundación AGGAPE',
        evangelisticProject: 'Proyecto Evangelístico',
        churchOnStreets: 'La Iglesia en las Calles',
        invitations: 'Descargas de invitaciones',
        donations: 'Donaciones',
        music: 'Música',
        youtubeMusic: 'Música en YouTube',
        musicDownloads: 'Descargas de música',
        contact: 'Contacto',
      },
      language: {
        label: 'Idioma',
        portuguese: 'Portugués',
        italian: 'Italiano',
        english: 'Inglés',
        spanish: 'Español',
        french: 'Francés',
        german: 'Alemán',
        russian: 'Ruso',
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
        biography: 'Biographie',
        projects: 'Nos Projets',
        foundation: 'Fondation AGGAPE',
        evangelisticProject: 'Projet Évangélique',
        churchOnStreets: "L'Église dans les Rues",
        invitations: "Téléchargements d'invitations",
        donations: 'Dons',
        music: 'Musiques',
        youtubeMusic: 'Musiques sur YouTube',
        musicDownloads: 'Téléchargements de musiques',
        contact: 'Contact',
      },
      language: {
        label: 'Langue',
        portuguese: 'Portugais',
        italian: 'Italien',
        english: 'Anglais',
        spanish: 'Espagnol',
        french: 'Français',
        german: 'Allemand',
        russian: 'Russe',
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
        biography: 'Biografie',
        projects: 'Unsere Projekte',
        foundation: 'AGGAPE Stiftung',
        evangelisticProject: 'Evangelistisches Projekt',
        churchOnStreets: 'Die Kirche auf den Straßen',
        invitations: 'Einladungen herunterladen',
        donations: 'Spenden',
        music: 'Musik',
        youtubeMusic: 'Musik auf YouTube',
        musicDownloads: 'Musik herunterladen',
        contact: 'Kontakt',
      },
      language: {
        label: 'Sprache',
        portuguese: 'Portugiesisch',
        italian: 'Italienisch',
        english: 'Englisch',
        spanish: 'Spanisch',
        french: 'Französisch',
        german: 'Deutsch',
        russian: 'Russisch',
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
  it: {
    translation: {
      brand: {
        name: 'Pranzo con Dio',
        subtitle: 'Comunione • Musica • Speranza',
      },
      nav: {
        home: 'Inizio',
        biography: 'Biografia',
        projects: 'I nostri progetti',
        foundation: 'Fondazione AGGAPE',
        evangelisticProject: 'Progetto evangelistico',
        churchOnStreets: 'La Chiesa nelle strade',
        invitations: 'Download inviti',
        donations: 'Donazioni',
        music: 'Musica',
        youtubeMusic: 'Musica su YouTube',
        musicDownloads: 'Download musica',
        contact: 'Contattaci',
      },
      language: {
        label: 'Lingua',
        portuguese: 'Portoghese',
        italian: 'Italiano',
        english: 'Inglese',
        spanish: 'Spagnolo',
        french: 'Francese',
        german: 'Tedesco',
        russian: 'Russo',
      },
      contrast: {
        light: 'Attiva contrasto chiaro',
        dark: 'Attiva contrasto scuro',
        lightTitle: 'Contrasto chiaro',
        darkTitle: 'Contrasto scuro',
      },
      menu: {
        open: 'Apri menu',
      },
    },
  },
  ru: {
    translation: {
      brand: {
        name: 'Обед с Богом',
        subtitle: 'Общение • Музыка • Надежда',
      },
      nav: {
        home: 'Главная',
        biography: 'Биография',
        projects: 'Наши проекты',
        foundation: 'Фонд AGGAPE',
        evangelisticProject: 'Евангелизационный проект',
        churchOnStreets: 'Церковь на улицах',
        invitations: 'Скачать приглашения',
        donations: 'Пожертвования',
        music: 'Музыка',
        youtubeMusic: 'Музыка на YouTube',
        musicDownloads: 'Скачать музыку',
        contact: 'Связаться с нами',
      },
      language: {
        label: 'Язык',
        portuguese: 'Португальский',
        italian: 'Итальянский',
        english: 'Английский',
        spanish: 'Испанский',
        french: 'Французский',
        german: 'Немецкий',
        russian: 'Русский',
      },
      contrast: {
        light: 'Включить светлый контраст',
        dark: 'Включить темный контраст',
        lightTitle: 'Светлый контраст',
        darkTitle: 'Темный контраст',
      },
      menu: {
        open: 'Открыть меню',
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
    supportedLngs: ['pt', 'it', 'en', 'es', 'fr', 'de', 'ru'],
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
