import type { HookContractType } from '@docusaurus-tde/di'
import { registerCustomCss } from './registerCustomCss'

const packageJson = require('../package.json')

const hookSettings: HookContractType = {
  name: 'custom-css-hook',
  version: packageJson.version,
  runtime: [
    registerCustomCss,
  ],
}

export default hookSettings
