import fs from 'fs'
import path from 'path'
import { writeFile } from '@docusaurus-tde/utils'

import { logger, askAllow } from '../../utils'

import { aggregateHooks, getTargetFoldersMap } from '../utils'

import { getDocHead } from './getDocHead'
import { bodyTemplate } from './bodyTemplate'

export const structure = async ({ config }): Promise<void> => {
  const hooks = aggregateHooks(config)
  const initList = await getTargetFoldersMap(hooks)

  if (!initList.length) {
    logger.info('There are no target folders!')
  }

  for (const { name, root, dir } of initList) {
    const data = [getDocHead(name), bodyTemplate].join('\n')
    const filePath = path.join(root, dir, 'index.md')

    if (fs.existsSync(filePath)) {
      if (!await askAllow(`File ${path.basename(filePath)} is already exist. Override?`)) {
        continue
      }

      logger.info(`Overriding ${filePath}`)
    }

    writeFile(filePath, data)
  }
}
