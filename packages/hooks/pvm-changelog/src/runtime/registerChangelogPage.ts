import path from 'path'
import type { pwaDocDI } from '@pwa-doc/di'

export const registerChangelogPage: pwaDocDI.runtimeHook = (config, { context }) => {
  const componentsRoot = path.dirname(require.resolve('@pwa-doc/pvm-changelog-hook/components'))

  const changelogPageSettings = {
    id: 'changelog',
    path: path.relative(context.constants.root, componentsRoot),
    routeBasePath: '/',
    include: ['changelog.jsx'],
  }

  config.plugins?.push(['@docusaurus/plugin-content-pages', changelogPageSettings])

  const button = {
    to: 'changelog',
    label: 'Changelog',
    position: 'right',
  }

  const items = context.utils.lodash.get(config, 'themeConfig.navbar.items', [])

  context.utils.lodash.set(config, 'themeConfig.navbar.items', [button, ...items])

  return config
}
