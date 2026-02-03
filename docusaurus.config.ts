import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Encyclopaedia Encyclopaedicae',
  tagline: 'Historical Masonic Texts & Translations',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment config
  url: 'https://djok.github.io',
  baseUrl: '/Vaccinum-contra-Falsa/',
  organizationName: 'djok',
  projectName: 'Vaccinum-contra-Falsa',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg'],
    localeConfigs: {
      en: { label: 'English' },
      bg: { label: 'Български' },
    },
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        language: ['en'],
        indexBlog: false,
        indexDocs: true,
        indexPages: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/print-all', to: '/print/memphis-misraim' },
          { from: '/pdf-viewer', to: '/pdf/memphis-misraim' },
          { from: '/bridge-to-light-pdf', to: '/pdf/bridge-to-light' },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    navbar: {
      title: 'Encyclopaedia',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Library',
          position: 'left',
          items: [
            {
              to: '/library',
              label: 'All Books / Всички книги',
            },
            {
              type: 'docSidebar',
              sidebarId: 'memphistSidebar',
              label: 'Memphis & Misraim',
            },
            {
              type: 'docSidebar',
              sidebarId: 'bridgeToLightSidebar',
              label: 'Мост към Светлината',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Tools',
          position: 'left',
          items: [
            {
              to: '/pdf/memphis-misraim',
              label: 'Memphis PDF',
            },
            {
              to: '/pdf/bridge-to-light',
              label: 'Bridge to Light PDF',
            },
            {
              to: '/print/memphis-misraim',
              label: 'Print Memphis',
            },
            {
              to: '/print/bridge-to-light',
              label: 'Print Bridge to Light',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/djok/Vaccinum-contra-Falsa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Library',
          items: [
            {
              label: 'All Books',
              to: '/library',
            },
            {
              label: 'Memphis & Misraim',
              to: '/memphis/introduction',
            },
            {
              label: 'Мост към Светлината',
              to: '/bg/bridge-to-light/predgovor',
            },
          ],
        },
        {
          title: 'Source',
          items: [
            {
              label: 'Scottish Rite Research Society',
              href: 'https://scottishriteresearch.com',
            },
            {
              label: 'Heredom Journal',
              href: 'https://scottishriteresearch.com/heredom/',
            },
          ],
        },
      ],
      copyright: `Historical Masonic texts and translations. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
