import type { RuntimeHookType } from '@docusaurus-tde/di'

export const setThemes: RuntimeHookType = (config, { props }) => {
  if (!config.themes) {
    config.themes = []
  }

  if (props.themes) {
    config.themes.push(...props.themes)
  }

  return config
}
