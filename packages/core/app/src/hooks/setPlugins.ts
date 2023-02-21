import type { RuntimeHookType } from '@docusaurus-tde/di'

export const setPlugins: RuntimeHookType = (config, { props }) => {
  if (props.plugins) {
    config.plugins.push(...props.plugins)
  }

  return config
}
