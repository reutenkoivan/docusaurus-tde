import type { RuntimeHookType } from '@docusaurus-tde/di'

export const registerStaticFolder: RuntimeHookType = (config, { props, context }) => {
  const { staticDirectories = [] } = props

  if (staticDirectories.length) {
    config.staticDirectories = [
      context.constants.staticRoot,
      ...staticDirectories,
    ]
  }

  return config
}
