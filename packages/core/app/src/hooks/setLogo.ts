import path from 'path'
import type { pwaDocDI } from '@pwa-doc/di'

export const setLogo: pwaDocDI.runtimeHook = (config, { context, props }) => {
    if (!props.logo) {
        return config
    }

    const userLogoPath = path.resolve(context.constants.configDir, props.logo)
    const targetPath = path.join(context.constants.customStatic, path.basename(userLogoPath))

    context.utils.copyFile(userLogoPath, targetPath)
    context.utils.lodash.set(config, 'themeConfig.navbar.logo.src', path.relative(context.constants.staticRoot, targetPath))

    return config
}
