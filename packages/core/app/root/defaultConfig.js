const lightCodeTheme = require('prism-react-renderer/themes/vsLight')
const darkCodeTheme = require('prism-react-renderer/themes/vsDark')

const searchTranslations = {
  'search_placeholder': 'Search',
  'see_all_results': 'See all results',
  'no_results': 'No results.',
  'search_results_for': 'Search results for "{{ keyword }}"',
  'search_the_documentation': 'Search the documentation',
  'count_documents_found': '{{ count }} document found',
  'count_documents_found_plural': '{{ count }} documents found',
  'no_documents_were_found': 'No documents were found',
}

const docusaurusConfig = () => ({
  title: 'Default title',
  baseUrl: '/',
  url: 'https://s3-website.tinkoff.ru',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'defaults/favicon.ico',
  projectName: 'Default Project',
  themeConfig: {
    navbar: {
      title: 'Default title',
      logo: {
        alt: 'Logo',
        src: 'defaults/logo.svg',
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    ['@docusaurus-tde/webpack-patcher-plugin', { ignoreNodeModulesExclude: ['@docusaurus-tde'] }],
  ],
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: [require.resolve('./index.css')],
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexPages: true,
        indexBlog: false,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        docsDir: [],
        translations: searchTranslations,
      },
    ],
  ],
})

module.exports = {
  docusaurusConfig,
}
