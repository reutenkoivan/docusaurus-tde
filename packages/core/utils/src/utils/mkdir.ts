import fs from 'fs'

export const mkdir = (dirpath: string): void => {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true })
  }
}
