import type DocusaurusConfig from '@docusaurus/types'

export const getSearchThemeConfig = (config: DocusaurusConfig.Config): undefined | DocusaurusConfig.PluginConfig => {
  return config.themes.find(theme => {
    if (Array.isArray(theme)) {
      return theme[0] === '@easyops-cn/docusaurus-search-local'
    }

    return theme === '@easyops-cn/docusaurus-search-local'
  })
}
