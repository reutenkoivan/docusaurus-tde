import type { RuntimeHookType } from '@docusaurus-tde/di'

export const configureThemeConfig: RuntimeHookType = (config, { props, context }) => {
  const { lodash } = context.utils
  const themeConfig = props.theme

  if (!themeConfig) {
    return config
  }

  if (themeConfig.announcementBar) {
    lodash.set(config, 'themeConfig.announcementBar', themeConfig.announcementBar)
  }

  if (themeConfig.colorMode) {
    lodash.set(config, 'themeConfig.colorMode.defaultMode', themeConfig.colorMode)
    lodash.set(config, 'themeConfig.colorMode.disableSwitch', true)
  }

  return config
}
