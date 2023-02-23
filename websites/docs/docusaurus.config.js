// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FullCSS',
  tagline: '',
  url: 'https://docs.fullcss.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fullcss', // Usually your GitHub org/user name.
  projectName: 'FullCSS', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      ko: {
        htmlLang: 'ko-KR',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/fullcss/react',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'FullCSS',
        logo: {
          alt: 'FullCSS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/motivation.i18n',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/fullcss/react',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro/motivation.i18n',
              },
              {
                label: 'Installation',
                to: '/docs/intro/installation.i18n',
              },
              {
                label: 'Example of @fullcss/emotion',
                href: 'https://emotion.fullcss.org',
              },
              {
                label: 'Example of @fullcss/styled-components',
                href: 'https://styled-components.fullcss.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fullcss/react',
              },
            ],
          },
          {
            title: 'Libraries',
            items: [
              {
                label: '@fullcss/emotion',
                href: 'https://www.npmjs.com/package/@fullcss/emotion',
              },
              {
                label: '@fullcss/styled-components',
                href: 'https://www.npmjs.com/package/@fullcss/styled-components',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jonghyeon Ko and the FullCSS authors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
