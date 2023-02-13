const { Constants } = require('@pwa-doc/utils')
const {
  requireHooks,
  requireConfig,
  applyRuntimeHooks,
} = require('@pwa-doc/di')

const { docusaurusConfig } = require('./defaultConfig')

const constants = new Constants()
const userConfig = requireConfig(constants.configPath)

const hookList = [
  ['@pwa-doc/app', userConfig],
  ...(userConfig.hooks || []),
]

module.exports = applyRuntimeHooks(docusaurusConfig(), requireHooks(hookList))
