const { Constants } = require('@docusaurus-tde/utils')
const {
  requireHooks,
  requireConfig,
  applyRuntimeHooks,
} = require('@docusaurus-tde/di')

const { docusaurusConfig } = require('./defaultConfig')

const constants = new Constants()
const userConfig = requireConfig(constants.configPath)

const hookList = [
  ['@docusaurus-tde/app', userConfig],
  ...(userConfig.hooks || []),
]

module.exports = applyRuntimeHooks(docusaurusConfig(), requireHooks(hookList))
