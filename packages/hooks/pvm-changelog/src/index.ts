import type { pwaDocDI } from '@pwa-doc/di'
import { writeMeta } from './before/writeMeta'
import { writeChangelogData } from './before/writeChangelogData'
import { registerChangelogPage } from './runtime/registerChangelogPage'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'pvm-changelog-hook',
  version: packageJson.version,
  before: [
    writeMeta,
    writeChangelogData,
  ],
  runtime: [
    registerChangelogPage,
  ],
}

export default hookSettings
