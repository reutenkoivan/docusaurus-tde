import type { pwaDocDI } from '@pwa-doc/di'
import { updateConfig } from './runtime/updateConfig'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'package-documentation-hook',
  version: packageJson.version,
  runtime: [
    updateConfig,
  ],
}

export default hookSettings
