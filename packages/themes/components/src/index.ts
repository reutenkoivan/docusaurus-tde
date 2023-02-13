import path from 'path'

const componentsTheme = (): any => {
  return {
    name: 'components-theme',

    getPathsToWatch(): string | string[] {
      return [path.resolve(__dirname, '..', 'lib', 'theme', '**')]
    },

    getThemePath(): string {
      return path.resolve(__dirname, '..', 'lib', 'theme')
    },

    getTypeScriptThemePath(): string {
      return path.resolve(__dirname, 'theme')
    },
  }
}

export default componentsTheme
