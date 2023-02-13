const path = require('path')
const { dropdownBuilder } = require('./dropdownBuilder')

module.exports = {
  logo: './logo.png',
  title: 'pwa-doc',
  baseUrl: process.env.BASE_URL,
  navbar: {
    channel: {
      id: 'C02TVB8P5PU',
    },
    gitlab: {
      url: 'https://gitlab.tcsbank.ru/ded-pwa/pwa-doc',
    },
  },
  themes: [
    '@pwa-doc/components-theme',
  ],
  hooks: [
    ['@pwa-doc/debug-hook', { enabled: !process.env.CI, logs: !!process.env.CI }],
    ['@pwa-doc/content-hook', { contentDir: path.join(__dirname, 'content') }],
    ['@pwa-doc/custom-css-hook', { source: './custom.css' }],
    ['@pwa-doc/package-documentation-hook', { dropdownBuilder }],
    '@pwa-doc/other-documentations-hook',
    '@pwa-doc/pvm-changelog-hook',
  ],
}
