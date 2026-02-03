import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Memphis & Misraim Rites',
  tagline: 'Historical Analysis by Albert Pike & William L. Cummings',
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
      title: 'Memphis & Misraim',
      logo: {
        alt: 'Memphis & Misraim Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'memphistSidebar',
          position: 'left',
          label: 'Memphis & Misraim',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bridgeToLightSidebar',
          position: 'left',
          label: 'Мост към Светлината',
        },
        {
          type: 'dropdown',
          label: 'PDF',
          position: 'left',
          items: [
            {
              to: '/pdf-viewer',
              label: 'Memphis & Misraim PDF',
            },
            {
              to: '/bridge-to-light-pdf',
              label: 'Bridge to Light PDF',
            },
          ],
        },
        {
          to: '/print-all',
          label: 'Print All',
          position: 'left',
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
          title: 'Document',
          items: [
            {
              label: 'Introduction',
              to: '/',
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
      copyright: `Original publication: Heredom, Volume 9, 2001. Authors: Albert Pike, 33° & William L. Cummings, 33°. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
