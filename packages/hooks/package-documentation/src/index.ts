import type { HookContractType } from '@docusaurus-tde/di'
import { updateConfig } from './runtime/updateConfig'

const packageJson = require('../package.json')

const hookSettings: HookContractType = {
  name: 'package-documentation-hook',
  version: packageJson.version,
  runtime: [
    updateConfig,
  ],
}

export default hookSettings
