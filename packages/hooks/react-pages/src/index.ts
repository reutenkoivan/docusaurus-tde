import type { pwaDocDI } from '@pwa-doc/di'
import { registerReactPages } from './runtime/registerReactPages'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'react-pages-hook',
  version: packageJson.version,
  runtime: [
    registerReactPages,
  ],
}

export default hookSettings
