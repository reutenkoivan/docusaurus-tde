import { start } from '@docusaurus/core/lib'
import { Constants } from '@docusaurus-tde/utils'
import { callHooks } from './utils'

const constants = new Constants()

export const docStart = async (config: Record<string, any>): Promise<void> => {
  await callHooks(config, 'before')

  await start(constants.root, {})
}
