import assert from 'assert'
import type { RuntimeHookType } from '@docusaurus-tde/di'

export const setGtag: RuntimeHookType = (config, { props }) => {
  const { trackingID, anonymizeIP = true } = props

  assert.ok(trackingID, '"trackingID" is not defined in "@docusaurus-tde/gtag-hook" props!')

  if (!config.plugins) {
    config.plugins = []
  }

  config.plugins.push(['@docusaurus/plugin-google-gtag', { trackingID, anonymizeIP }])

  return config
}
