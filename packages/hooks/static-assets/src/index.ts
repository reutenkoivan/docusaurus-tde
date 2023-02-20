import type { pwaDocDI } from '@docusaurus-tde/di'
import { registerStaticFolder } from './runtime/registerStaticFolder'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'static-assets-hook',
  version: packageJson.version,
  runtime: [
    registerStaticFolder,
  ],
}

export default hookSettings
