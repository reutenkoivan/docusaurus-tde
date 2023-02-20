import { Constants } from '@docusaurus-tde/utils'

const constants = new Constants()

const webpackPatcher = (_config, { ignoreNodeModulesExclude = ['@docusaurus-tde'] }): any => {
    return {
        name: 'webpack-patcher',
        configureWebpack(config: any): any {
            const rule = config.module.rules.find(({ exclude }: any) => {
                return exclude && exclude.name === 'excludeJS'
            })

            const exclude = (fileName: string): boolean => {
                return !ignoreNodeModulesExclude.some(namespace => fileName.includes(namespace))
            }

            return {
                module: {
                    rules: [
                        {
                            ...rule,
                            exclude,
                        },
                    ],
                },
            }
        },
      getPathsToWatch(): string[] {
        return [constants.configPath]
      },
    }
}

export default webpackPatcher
