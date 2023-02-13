import type { pwaDocDI } from '@pwa-doc/di'

export const setBaseUrl: pwaDocDI.runtimeHook = (config, { props, context }) => {
    if (!props.baseUrl) {
        return config
    }

    context.utils.lodash.set(config, 'baseUrl', props.baseUrl)

    return config
}
