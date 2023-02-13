import fs from 'fs'
import path from 'path'

export const copyFile = (from: string, to: string): void => {
    const dirpath = path.dirname(to)

    if (!fs.existsSync(dirpath)) {
        fs.mkdirSync(dirpath, { recursive: true })
    }

    fs.copyFileSync(from, to)
}
