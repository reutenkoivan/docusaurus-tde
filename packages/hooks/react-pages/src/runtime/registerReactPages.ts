import path from 'path'
import assert from 'assert'
import type { RuntimeHookType } from '@docusaurus-tde/di'

export const registerReactPages: RuntimeHookType = (config, { props, context }) => {
  const { root, routeBasePath = '/' } = props

  assert.ok(root, 'Prop "root" is not defined!')

  const pluginSettings = {
    id: root.split('/').pop(),
    path: path.relative(context.constants.root, root),
    routeBasePath,
  }

  config.plugins.push(['@docusaurus/plugin-content-pages', pluginSettings])

  return config
}
