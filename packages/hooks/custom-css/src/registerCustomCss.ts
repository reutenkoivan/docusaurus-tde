import fs from 'fs'
import path from 'path'
import assert from 'assert'
import type { pwaDocDI } from '@pwa-doc/di'

export const registerCustomCss: pwaDocDI.runtimeHook = (config, { props, context }) => {
  assert.ok(props.source, 'Prop "source" does not set!')
  const isAbsolute = path.isAbsolute(props.source)
  const cssPath = isAbsolute ? props.source : path.resolve(context.constants.configDir, props.source)

  assert.ok(fs.existsSync(cssPath), `Can not require source by path: ${cssPath}`)

  const theme = config.themes.find((processingPreset) => {
    if (Array.isArray(processingPreset)) {
      return processingPreset[0] === '@docusaurus/theme-classic'
    }

    return false
  })

  assert.ok(theme, 'Theme "@docusaurus/theme-classic" is not defined!')

  const customCss = context.utils.lodash.get(theme, '[1].customCss', [])

  customCss.push(cssPath)

  context.utils.lodash.set(theme, '[1].customCss', customCss)

  return config
}
