import type { pwaDocDI } from '@docusaurus-tde/di'

export const setThemes: pwaDocDI.runtimeHook = (config, { props }) => {
  if (!config.themes) {
    config.themes = []
  }

  if (props.themes) {
    config.themes.push(...props.themes)
  }

  return config
}
