import assert from 'assert'
import type { pwaDocDI } from '@pwa-doc/di'

const gitlabUrlConfigPath = 'navbar.gitlab.url'

export const setNavbarItems: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { lodash } = context.utils

  const gitlabUrl = lodash.get(props, gitlabUrlConfigPath)
  const slackDescription = lodash.get(props, 'navbar.channel.ariaLabel', 'Поддержка')

  assert.ok(gitlabUrl, `Configuration "${gitlabUrlConfigPath}" is not defined!`)

  const { url, id } = lodash.get(props, 'navbar.channel', {})

  assert.ok(url || id, 'Configuration "navbar.channel" does not have "url" or "id" property!')

  const slackUrl = url || `slack://channel?id=${id}&team=T2V37EATG`

  const userItems = lodash.get(props, 'navbar.items', [])

  lodash.set(config, 'themeConfig.navbar.items', [
    ...userItems,
    {
      position: 'right',
      href: gitlabUrl,
      className: 'header-gitlab-link',
      'aria-label': 'Репозиторий',
    },
    {
      position: 'right',
      href: slackUrl,
      className: 'header-slack-link',
      'aria-label': slackDescription,
    },
  ])

  return config
}
