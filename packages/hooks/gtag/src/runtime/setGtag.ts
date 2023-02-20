import assert from 'assert'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const setGtag: pwaDocDI.runtimeHook = (config, { props }) => {
  const { trackingID, anonymizeIP = true } = props

  assert.ok(trackingID, '"trackingID" is not defined in "@docusaurus-tde/gtag-hook" props!')

  if (!config.plugins) {
    config.plugins = []
  }

  config.plugins.push(['@docusaurus/plugin-google-gtag', { trackingID, anonymizeIP }])

  return config
}
