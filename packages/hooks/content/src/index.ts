import { pwaDocDI } from '@docusaurus-tde/di'
import { connectToSearch } from './runtime/connectToSearch'
import { registerContentFolder } from './runtime/registerContentFolder'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: 'content-hook',
  version: packageJson.version,
  runtime: [
    registerContentFolder,
    connectToSearch,
  ],
}

export default hookSettings
