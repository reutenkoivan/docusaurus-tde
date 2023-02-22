const { signale } = require('signales')

const pickSettings = require('./utils/pickSettings')
const updatePackages = require('./utils/updatePackages')
const getWorkspacePackages = require('./utils/getWorkspacePackages')
const increasePackageVersion = require('./utils/increasePackageVersion')
const { pathMap } = require('./constants')

const settings = pickSettings()

Promise.resolve(pathMap)
  .then(getWorkspacePackages)
  .then(workspacePackages => {
    return increasePackageVersion(workspacePackages, { releaseType: settings.options.releaseType })
  })
  .then(newVersionsWorkspaceStore => {
    return updatePackages(newVersionsWorkspaceStore, { indent: settings.options.indent })
  })
  .then(commandResults => {
    signale.debug('Updated packages content: ', commandResults)
    process.exit(0)
  })
  .catch(error => {
    signale.error(error)
    process.exit(1)
  })
