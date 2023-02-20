import type { pwaDocDI } from '@docusaurus-tde/di'

export const registerContentFolder: pwaDocDI.runtimeHook = (config, { props }) => {
  const { contentDir, id = 'default', routeBasePath = '/', showLastUpdateAuthor = true, showLastUpdateTime = true } = props

  const docScope = {
    id,
    path: contentDir,
    routeBasePath,
    showLastUpdateAuthor,
    showLastUpdateTime,
  }

  config.plugins?.push(['@docusaurus/plugin-content-docs', docScope])

  return config
}
