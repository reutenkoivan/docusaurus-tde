import type { pwaDocDI } from '@docusaurus-tde/di'
import { updateConfig } from './runtime/updateConfig'
import { createLinksArtifact } from './before/createLinksArtifact'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'other-documentations-hook',
  version: packageJson.version,
  before: [
    createLinksArtifact,
  ],
  runtime: [
    updateConfig,
  ],
}

export default hookSettings
