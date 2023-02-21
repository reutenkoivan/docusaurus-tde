import type { HookContractType } from '@docusaurus-tde/di'
import { registerReactPages } from './runtime/registerReactPages'

const packageJson = require('../package.json')

const hookSettings: HookContractType = {
  name: 'react-pages-hook',
  version: packageJson.version,
  runtime: [
    registerReactPages,
  ],
}

export default hookSettings
