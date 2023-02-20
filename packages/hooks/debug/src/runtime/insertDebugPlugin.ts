import { Signales } from 'signales'
import type { pwaDocDI } from '@docusaurus-tde/di'

const logger = new Signales({
  types: {
    info: {
      color: 'yellow',
      label: 'debug-page:',
      logLevel: 'info',
      badge: '',
    },
  },
})

export const insertDebugPlugin: pwaDocDI.runtimeHook = (config, { props }) => {
  const { enabled = true } = props

  if (enabled) {
    config.plugins.push('@docusaurus/plugin-debug')
    logger.info('http://localhost:3000/__docusaurus/debug')
  }

  return config
}
