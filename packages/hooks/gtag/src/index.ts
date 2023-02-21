import type { HookContractType } from '@docusaurus-tde/di'
import { setGtag } from './runtime/setGtag'

const packageJson = require('../package.json')

const hookSettings: HookContractType = {
  name: 'gtag-hook',
  version: packageJson.version,
  runtime: [
    setGtag,
  ],
}

export default hookSettings
