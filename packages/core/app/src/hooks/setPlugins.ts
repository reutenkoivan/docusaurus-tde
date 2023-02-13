import type { pwaDocDI } from '@pwa-doc/di'

export const setPlugins: pwaDocDI.runtimeHook = (config, { props }) => {
  if (props.plugins) {
    config.plugins.push(...props.plugins)
  }

  return config
}
