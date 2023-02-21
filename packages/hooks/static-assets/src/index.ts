import type { HookContractType } from '@docusaurus-tde/di'
import { registerStaticFolder } from './runtime/registerStaticFolder'

const packageJson = require('../package.json')

const hookSettings: HookContractType = {
  name: 'static-assets-hook',
  version: packageJson.version,
  runtime: [
    registerStaticFolder,
  ],
}

export default hookSettings
