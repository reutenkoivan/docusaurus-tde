import assert from 'assert'
import type { pwaDocDI } from '@docusaurus-tde/di'

const repositoryURLConfigPath = 'navbar.repository.url'

export const setNavbarItems: pwaDocDI.runtimeHook = (config, { props, context }) => {
  const { lodash } = context.utils

  const repositoryURL = lodash.get(props, repositoryURLConfigPath)
  const supportDescription = lodash.get(props, 'navbar.support.ariaLabel', 'Support')

  assert.ok(repositoryURL, `Configuration "${repositoryURLConfigPath}" is not defined!`)

  const { url: supportURL } = lodash.get(props, 'navbar.support', {})

  assert.ok(supportURL, 'Configuration "navbar.support" does not have "url" property!')

  const userItems = lodash.get(props, 'navbar.items', [])

  lodash.set(config, 'themeConfig.navbar.items', [
    ...userItems,
    {
      position: 'right',
      href: repositoryURL,
      className: 'header-github-link',
      'aria-label': 'Repository',
    },
    {
      position: 'right',
      href: supportURL,
      className: 'header-support-link',
      'aria-label': supportDescription,
    },
  ])

  return config
}
