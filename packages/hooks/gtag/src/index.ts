import type { pwaDocDI } from '@pwa-doc/di'
import { setGtag } from './runtime/setGtag'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'gtag-hook',
  version: packageJson.version,
  runtime: [
    setGtag,
  ],
}

export default hookSettings
