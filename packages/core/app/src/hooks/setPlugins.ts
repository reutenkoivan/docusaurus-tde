import type { pwaDocDI } from '@docusaurus-tde/di'

export const setPlugins: pwaDocDI.runtimeHook = (config, { props }) => {
  if (props.plugins) {
    config.plugins.push(...props.plugins)
  }

  return config
}
