import type { pwaDocDI } from '@docusaurus-tde/di'
import { enableLogs } from './before/enableLogs'
import { insertDebugPlugin } from './runtime/insertDebugPlugin'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'debug-hook',
  version: packageJson.version,
  before: [
    enableLogs,
  ],
  runtime: [
    insertDebugPlugin,
  ],
}

export default hookSettings
