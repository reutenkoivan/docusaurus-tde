import path from 'path'
import { Constants } from '@docusaurus-tde/utils'
import { build } from '@docusaurus/core/lib'
import { callHooks } from './utils'

const constants = new Constants()

export const docBuild = async (config: Record<string, any>): Promise<void> => {
  await callHooks(config, 'before')
  await build(constants.root, { outDir: path.resolve('public') })
  await callHooks(config, 'after')
}
