export interface BookAuthor {
  name: string;
  credentials?: string;
}

export interface BookConfig {
  id: string;
  slug: string;
  title: string;
  titleBg?: string;
  subtitle?: string;
  subtitleBg?: string;
  authors: BookAuthor[];
  year?: number;
  source?: string;
  language: 'bilingual' | 'bg' | 'en';
  docsPath: string;
  docsBgPath?: string;
  pdfPath?: string;
  coverImage?: string;
  sidebarId: string;
  position: number;
  hasPrintVersion: boolean;
  description?: string;
  descriptionBg?: string;
}

export const books: BookConfig[] = [
  {
    id: 'memphis-misraim',
    slug: '/memphis/introduction',
    title: 'The Spurious Rites of Memphis and Misraim',
    titleBg: 'Фалшивите обреди на Мемфис и Мицраим',
    authors: [
      { name: 'Albert Pike', credentials: '33°' },
      { name: 'William L. Cummings', credentials: '33°' },
    ],
    year: 2001,
    source: 'Heredom, Volume 9, 2001',
    language: 'bilingual',
    docsPath: 'memphis',
    docsBgPath: 'memphis-bg',
    pdfPath: '/pdf/9.Memphis.pdf',
    sidebarId: 'memphistSidebar',
    position: 1,
    hasPrintVersion: true,
    description: 'Historical analysis of the spurious Rites of Memphis and Misraim',
    descriptionBg: 'Историческо изследване на фалшивите обреди на Мемфис и Мицраим',
  },
  {
    id: 'bridge-to-light',
    slug: '/bg/bridge-to-light/predgovor',
    title: 'A Bridge to Light',
    titleBg: 'Мост към Светлината',
    subtitle: 'A Study in Masonic Ritual & Philosophy',
    subtitleBg: 'Изследване на масонския ритуал и философия',
    authors: [{ name: 'Rex R. Hutchens', credentials: '33°' }],
    year: 2021,
    language: 'bg',
    docsPath: 'bridge-to-light-bg',
    pdfPath: '/pdf/bridge-to-light.pdf',
    sidebarId: 'bridgeToLightSidebar',
    position: 2,
    hasPrintVersion: true,
    description: 'A comprehensive study of the Scottish Rite degrees',
    descriptionBg: 'Изчерпателно изследване на степените на Шотландския обред',
  },
];

export function getBookById(id: string): BookConfig | undefined {
  return books.find((b) => b.id === id);
}

export function getBookBySlug(slug: string): BookConfig | undefined {
  return books.find((b) => b.slug === slug || slug.startsWith(b.slug));
}

export function getAllBooks(): BookConfig[] {
  return [...books].sort((a, b) => a.position - b.position);
}

export function getBilingualBooks(): BookConfig[] {
  return books.filter((b) => b.language === 'bilingual');
}

export function getBulgarianBooks(): BookConfig[] {
  return books.filter((b) => b.language === 'bg');
}

export function getEnglishBooks(): BookConfig[] {
  return books.filter((b) => b.language === 'en');
}
