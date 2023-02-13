import type { pwaDocDI } from '@pwa-doc/di'
import { registerCustomCss } from './registerCustomCss'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'custom-css-hook',
  version: packageJson.version,
  runtime: [
    registerCustomCss,
  ],
}

export default hookSettings
