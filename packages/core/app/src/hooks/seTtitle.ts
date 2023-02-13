import type { pwaDocDI } from '@pwa-doc/di'

const getCopyright = (title: string): string => {
  const meta = 'Built with <a href="https://pwa.s3-website.tinkoff.ru/pwa-doc/">@pwa-doc</a> and <a href="https://docusaurus.io/">Docusaurus</a>'

  return `Copyright © ${new Date().getFullYear()} <a href="https://status.tcsbank.ru/">Tinkoff</a> ${title}. ${meta}.`
}

export const setTitle: pwaDocDI.runtimeHook = (config, { props, context }) => {
    if (!props.title) {
        return config
    }

    const { lodash } = context.utils

    lodash.set(config, 'title', props.title)
    lodash.set(config, 'themeConfig.navbar.title', props.title)
    lodash.set(config, 'themeConfig.footer.copyright', getCopyright(props.title))

    return config
}
