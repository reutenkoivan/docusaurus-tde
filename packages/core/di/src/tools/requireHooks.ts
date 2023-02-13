import assert from 'assert'
import { pwaDocDI } from '../types'

const createHookSetting = (hookPath: string, props: Record<string, any> = {}): pwaDocDI.hooks.filledSettings => {
  const moduleExport = require(hookPath)

  const hookSettings: pwaDocDI.hooks.settings = moduleExport.name && moduleExport.version
    ? moduleExport
    : moduleExport.default

  assert.ok(
    hookSettings.name && hookSettings.version,
    `Hook have broken contract! Current: ${JSON.stringify(hookSettings)}`
  )

  const emptyHooks = {
    before: [],
    runtime: [],
    after: [],
  }

  return Object.assign(emptyHooks, hookSettings, { props })
}

export const requireHooks = (hookConfigList): any => {
  return hookConfigList.map((hookData) => {
    if (Array.isArray(hookData)) {
      const [hookPath, props = {}] = hookData

      return createHookSetting(hookPath, props)
    }

    return createHookSetting(hookData)
  })
}
