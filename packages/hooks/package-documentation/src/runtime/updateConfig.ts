import fs from 'fs'
import path from 'path'

import type { pwaDocDI } from '@pwa-doc/di'
import type { categoryType } from '../types'
import { defaultDropdownBuilder } from './utils/defaultDropdownBuilder'
import { getSearchThemeConfig } from './utils/getSearchThemeConfig'

export const updateConfig: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { docRootName = 'doc', showLastUpdateAuthor = true, showLastUpdateTime = true, dropdownBuilder = defaultDropdownBuilder } = props

  const pattern = path.resolve('**', docRootName)
  const docRoots = context.utils.glob.sync(pattern, { ignore: '**/node_modules/**' })
  const links = []

  for (const docRootPath of docRoots) {
    const relPath = path.relative(process.cwd(), docRootPath)
    const packageRoot = relPath
      .split('/')
      .slice(0, -1)
      .join('/')
    const packageJsonPath = path.join(packageRoot, 'package.json')

    if (!fs.existsSync(packageJsonPath)) {
      continue
    }

    const id = packageRoot.split('/').pop()

    const docScope = {
      id,
      routeBasePath: id,
      path: path.relative(context.constants.root, docRootPath),
      showLastUpdateAuthor,
      showLastUpdateTime,
    }

    config.plugins.push(['@docusaurus/plugin-content-docs', docScope])

    const searchTheme = getSearchThemeConfig(config)

    if (searchTheme) {
      searchTheme[1].docsDir.push(docScope.path)
    }

    links.push({
      label: require(path.resolve(packageJsonPath)).name,
      route: docScope.routeBasePath,
      location: docScope.path,
    })
  }

  if (!links.length) {
    return config
  }

  const menuList: categoryType[] = dropdownBuilder(links, props)

  const navbarItems = context.utils.lodash.get(config, 'themeConfig.navbar.items', [])

  context.utils.lodash.set(config, 'themeConfig.navbar.items', menuList.concat(navbarItems))

  return config
}
