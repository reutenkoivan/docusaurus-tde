import fs from 'fs'

export const requireConfig = (configPath: string): Record<string, any> => {
  if (fs.existsSync(configPath)) {
    return require(configPath)
  }

  return {}
}
