// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JSXCSS',
  tagline: '',
  url: 'https://jsxcss.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jsxcss', // Usually your GitHub org/user name.
  projectName: 'JSXCSS', // Usually your repo name.

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
          editUrl: 'https://github.com/jsxcss/react',
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
        title: 'JSXCSS',
        logo: {
          alt: 'JSXCSS Logo',
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
            href: 'https://github.com/jsxcss/react',
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
                label: 'Example of @jsxcss/emotion',
                href: 'https://emotion.jsxcss.org',
              },
              {
                label: 'Example of @jsxcss/styled-components',
                href: 'https://styled-components.jsxcss.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jsxcss/react',
              },
            ],
          },
          {
            title: 'Libraries',
            items: [
              {
                label: '@jsxcss/emotion',
                href: 'https://www.npmjs.com/package/@jsxcss/emotion',
              },
              {
                label: '@jsxcss/styled-components',
                href: 'https://www.npmjs.com/package/@jsxcss/styled-components',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jonghyeon Ko and the JSXCSS authors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
