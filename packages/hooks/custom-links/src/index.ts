import type { pwaDocDI } from '@docusaurus-tde/di'
import { setLinks } from './runtime/setLinks'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'custom-links-hook',
  version: packageJson.version,
  runtime: [
    setLinks,
  ],
}

export default hookSettings
