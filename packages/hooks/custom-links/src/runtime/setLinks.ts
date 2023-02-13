import type { pwaDocDI } from '@pwa-doc/di'
import { createDropdown } from './utils/createDropdown'

export const setLinks: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { viewType = 'header', linksMap } = props

  if (viewType === 'footer') {
    const footerLinks = context.utils.lodash.get(config, 'themeConfig.footer.links', [])

    context.utils.lodash.set(config, 'themeConfig.footer.links', footerLinks.concat(Object.values(linksMap)))

    return config
  }

  const dropdownList = createDropdown(linksMap)
  const navbarItems = context.utils.lodash.get(config, 'themeConfig.navbar.items', [])

  context.utils.lodash.set(config, 'themeConfig.navbar.items', navbarItems.concat(dropdownList))

  return config
}
