import type { pwaDocDI } from '@pwa-doc/di'

export const enableLogs: pwaDocDI.asyncHook = (props) => {
  if (props.logs) {
    process.env.PWA_DOC_DEBUG = '1'
  }
}
