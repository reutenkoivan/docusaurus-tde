import path from 'path'
import { Constants } from '@pwa-doc/utils'
import { serve } from '@docusaurus/core/lib'
import { callHooks } from './utils'

const constants = new Constants()

export const pwaDocServe = async (config: Record<string, any>): Promise<void> => {
  await callHooks(config, 'before')

  await serve(constants.root, {
    dir: path.resolve('public'),
    port: '3000',
    build: false,
    host: 'localhost',
    config: path.join(constants.root, 'docusaurus.config.js'),
  })
}
