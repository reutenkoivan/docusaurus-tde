import glob from 'glob'
import lodash from 'lodash'
import fetch from 'node-fetch'
import { Signales } from 'signales'
import { Constants, copyFile, mkdir, writeFile } from '@pwa-doc/utils'
import type docusaurusTypes from '@docusaurus/types'
import type { pwaDocDI } from '../types'

const logger = new Signales({
  scope: 'pwa-doc',
  disabled: !process.env.PWA_DOC_DEBUG,
})

const defaultContext: pwaDocDI.hooks.defaultContext = {
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
  config: docusaurusTypes.Config,
  hooks: pwaDocDI.hooks.filledSettings[]
): docusaurusTypes.Config => {
  return hooks.reduce((patchedConfig,  hookSetting: pwaDocDI.hooks.filledSettings) => {
    const { name, runtime, props } = hookSetting

    const localContext = {
      logger: logger.scope(name),
    }

    const context: pwaDocDI.hooks.context = lodash.merge(defaultContext, localContext)

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

export const applyAsyncHooks = async (hooks: pwaDocDI.hooks.filledSettings[], hookScope: 'before' | 'after'): Promise<void> => {
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
