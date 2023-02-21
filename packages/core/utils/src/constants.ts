import path from 'path'

export class Constants {
  root: string
  staticRoot: string
  customStatic: string

  constructor() {
    this.root = path.dirname(require.resolve('@docusaurus-tde/app/root/docusaurus.config.js'))
    this.staticRoot = path.join(this.root, 'static')
    this.customStatic = path.join(this.root, 'static', 'custom')
  }

  get configPath(): string {
    return process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH || ''
  }

  get configDir(): string {
    return path.dirname(this.configPath)
  }

  get isLoggerEnabled(): boolean {
    return !!process.env.DOCUSAURUS_TDE_DEBUG
  }
}
