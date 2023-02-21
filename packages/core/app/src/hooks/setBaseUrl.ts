import type { RuntimeHookType } from '@docusaurus-tde/di'

export const setBaseUrl: RuntimeHookType = (config, { props, context }) => {
    if (!props.baseUrl) {
        return config
    }

    context.utils.lodash.set(config, 'baseUrl', props.baseUrl)

    return config
}
