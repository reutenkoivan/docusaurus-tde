import path from 'path'
import fs, { WriteFileOptions } from 'fs'
import { mkdir } from './mkdir'

type writeFileData = string | NodeJS.ArrayBufferView

export const writeFile = (targetPath: string, data: writeFileData, options?: WriteFileOptions): void => {
  mkdir(path.dirname(targetPath))
  fs.writeFileSync(targetPath, data, options)
}
