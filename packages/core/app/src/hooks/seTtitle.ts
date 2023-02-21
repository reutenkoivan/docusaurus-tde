import type { RuntimeHookType } from '@docusaurus-tde/di'

const getCopyright = (title: string): string => {
  const meta = 'Built with <a href="https://github.com/reutenkoivan/docusaurus-tde/">@docusaurus-tde</a> and <a href="https://docusaurus.io/">Docusaurus</a>'

  return `${meta}. ${new Date().getFullYear()} ${title} © All rights reserved.`
}

export const setTitle: RuntimeHookType = (config, { props, context }) => {
    if (!props.title) {
        return config
    }

    const { lodash } = context.utils

    lodash.set(config, 'title', props.title)
    lodash.set(config, 'themeConfig.navbar.title', props.title)
    lodash.set(config, 'themeConfig.footer.copyright', getCopyright(props.title))

    return config
}
