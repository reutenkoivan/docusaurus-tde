import path from 'path'
import assert from 'assert'
import type { pwaDocDI } from '@pwa-doc/di'
import { artifactName } from '../constants'

const componentsRoot = path.join(__dirname, '..', '..', 'components')

export const updateConfig: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { viewType = 'header', button = {} } = props

  assert.ok(viewType === 'header' || viewType === 'footer', '"viewType" property is not equal to "header" or "footer"!')

  const artifactPath = path.join(context.constants.customStatic, artifactName)
  const linksMap = require(artifactPath)

  if (viewType === 'footer') {
    const footerLinks = context.utils.lodash.get(config, 'themeConfig.footer.links', [])

    context.utils.lodash.set(config, 'themeConfig.footer.links', footerLinks.concat(Object.values(linksMap)))

    return config
  }

  const otherDocsPageSettings = {
    id: 'external-links',
    path: path.relative(context.constants.root, componentsRoot),
    routeBasePath: '/',
    include: ['external-links.jsx'],
  }

  config.plugins.push(['@docusaurus/plugin-content-pages', otherDocsPageSettings])

  const items = context.utils.lodash.get(config, 'themeConfig.navbar.items', [])
  const navbarButton = {
    to: 'external-links',
    label: button.label || 'Внешние ссылки',
    position: button.position || 'right',
    className: 'header-external-links',
    'aria-label': 'Внешние ссылки',
  }

  context.utils.lodash.set(config, 'themeConfig.navbar.items', [navbarButton, ...items])

  if (!config.customFields) {
    config.customFields = {}
  }

  config.customFields.otherDocumentations = props

  return config
}
