import glob from 'glob'
import lodash from 'lodash'
import fetch from 'node-fetch'
import { Signales } from 'signales'
import { Constants, copyFile, mkdir, writeFile } from '@docusaurus-tde/utils'
import type { ContextType, DefaultContextType, FilledHookContractType, DocusaurusConfigType } from '../types'

const logger = new Signales({
  scope: 'docusaurus-tde',
  disabled: !process.env.DOCUSAURUS_TDE_DEBUG,
})

const defaultContext: DefaultContextType = {
  constants: new Constants(),
  utils: {
    copyFile,
    mkdir,
    writeFile,
    lodash,
    glob,
  },
}

export const applyRuntimeHooks = (
  config: DocusaurusConfigType,
  hooks: FilledHookContractType[]
): DocusaurusConfigType => {
  return hooks.reduce((patchedConfig,  hookSetting: FilledHookContractType) => {
    const { name, runtime, props } = hookSetting

    const localContext = {
      logger: logger.scope(name),
    }

    const context: ContextType = lodash.merge(defaultContext, localContext)

    if (context.constants.isLoggerEnabled) {
      context.logger.enable()
    }

    context.logger.info('settings:', hookSetting)

    return runtime.reduce((conf, func) => func(conf, { props, context }), patchedConfig)
  }, config)
}

const defaultAsyncContext = lodash.merge(defaultContext, {
  utils: {
    fetch,
  },
})

export const applyAsyncHooks = async (hooks: FilledHookContractType[], hookScope: 'before' | 'after'): Promise<void> => {
  for (const hookSetting of hooks) {
    const localContext = {
      logger: logger.scope(hookSetting.name),
    }

    const context = lodash.merge(defaultAsyncContext, localContext)

    if (context.constants.isLoggerEnabled) {
      context.logger.enable()
    }

    for (const hook of hookSetting[hookScope]) {
      await hook(hookSetting.props, context)
    }
  }
}
