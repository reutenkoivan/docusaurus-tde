import type { pwaDocDI } from '@pwa-doc/di'

export const registerStaticFolder: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { staticDirectories = [] } = props

  if (staticDirectories.length) {
    config.staticDirectories = [
      context.constants.staticRoot,
      ...staticDirectories,
    ]
  }

  return config
}
