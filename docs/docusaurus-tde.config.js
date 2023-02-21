const path = require('path')
const { dropdownBuilder } = require('./utils/dropdownBuilder')

module.exports = {
  logo: './logo.png',
  title: 'docusaurus-tde',
  baseUrl: process.env.BASE_URL,
  navbar: {
    support: {
      url: 'https://github.com/reutenkoivan/docusaurus-tde/issues',
    },
    repository: {
      url: 'https://github.com/reutenkoivan/docusaurus-tde',
    },
  },
  themes: [
    '@docusaurus-tde/components-theme',
  ],
  hooks: [
    ['@docusaurus-tde/debug-hook', { enabled: !process.env.CI, logs: !!process.env.CI }],
    ['@docusaurus-tde/content-hook', { contentDir: path.join(__dirname, 'content') }],
    ['@docusaurus-tde/custom-css-hook', { source: './custom.css' }],
    ['@docusaurus-tde/package-documentation-hook', { dropdownBuilder }],
  ],
}
