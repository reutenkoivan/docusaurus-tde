import type { HookContractType } from '@docusaurus-tde/di'

import { setLogo } from './hooks/setLogo'
import { setTitle } from './hooks/seTtitle'
import { setBaseUrl } from './hooks/setBaseUrl'
import { setNavbarItems } from './hooks/setNavbarItems'
import { setPlugins } from './hooks/setPlugins'
import { setThemes } from './hooks/setThemes'
import { configureThemeConfig } from './hooks/configureThemeConfig'

const packageJson = require('../package.json')

const hookSettings: HookContractType = {
  name: 'system-hooks',
  version: packageJson.version,
  runtime: [
    setLogo,
    setTitle,
    setBaseUrl,
    setNavbarItems,
    setPlugins,
    setThemes,
    configureThemeConfig,
  ],
}

export default hookSettings
