import type { pwaDocDI } from '@docusaurus-tde/di'

export const enableLogs: pwaDocDI.asyncHook = (props) => {
  if (props.logs) {
    process.env.PWA_DOC_DEBUG = '1'
  }
}
