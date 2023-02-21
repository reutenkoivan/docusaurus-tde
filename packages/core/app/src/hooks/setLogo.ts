import path from 'path'
import type { RuntimeHookType } from '@docusaurus-tde/di'

export const setLogo: RuntimeHookType = (config, { context, props }) => {
    if (!props.logo) {
        return config
    }

    const userLogoPath = path.resolve(context.constants.configDir, props.logo)
    const targetPath = path.join(context.constants.customStatic, path.basename(userLogoPath))

    context.utils.copyFile(userLogoPath, targetPath)
    context.utils.lodash.set(config, 'themeConfig.navbar.logo.src', path.relative(context.constants.staticRoot, targetPath))

    return config
}
