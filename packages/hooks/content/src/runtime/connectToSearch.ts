import path from 'path'
import type DocusaurusConfig from '@docusaurus/types'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const connectToSearch: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { contentDir } = props

  const searchTheme: DocusaurusConfig.PluginConfig = config.themes.find(theme => {
    if (Array.isArray(theme)) {
      return theme[0] === '@easyops-cn/docusaurus-search-local'
    }

    return theme === '@easyops-cn/docusaurus-search-local'
  })

  if (searchTheme) {
    searchTheme[1].docsDir.push(path.relative(context.constants.root, contentDir))
  }

  return config
}
