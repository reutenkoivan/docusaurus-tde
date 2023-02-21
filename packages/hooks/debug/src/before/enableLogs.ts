import type { AsyncHookType } from '@docusaurus-tde/di'

export const enableLogs: AsyncHookType = (props) => {
  if (props.logs) {
    process.env.DOCUSAURUS_TDE_DEBUG = '1'
  }
}
