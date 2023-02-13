import fs from 'fs'
import path from 'path'
import { writeFile } from '@pwa-doc/utils'
import { aggregateHooks, getTargetFoldersMap } from '../utils'
import { askAllow, askMigrationMeta, logger } from '../../utils'

import { bodyTemplate } from './bodyTemplate'
import { getMigrationHead } from './getMigrationHead'
import { categoryTemplate } from './categoryTemplate'

export const migration = async ({ config }): Promise<void> => {
  const hooks = aggregateHooks(config)
  const initList = await getTargetFoldersMap(hooks)

  if (!initList.length) {
    logger.info('There are no target folders!')
  }

  for (const { name, root, dir } of initList) {
    const migrationMeta = await askMigrationMeta(name, root)

    const migrationFileData = [getMigrationHead(`${migrationMeta.from} ➡ ${migrationMeta.to}`), bodyTemplate].join('\n')
    const migrationFilePath = path.join(root, dir, 'migrations', `${migrationMeta.from}-${migrationMeta.to}.md`)

    if (fs.existsSync(migrationFilePath)) {
      if (!await askAllow(`File ${path.basename(migrationFilePath)} is already exist. Override?`)) {
        continue
      }

      logger.info(`Overriding ${migrationFilePath}`)
    }

    writeFile(migrationFilePath, migrationFileData)

    const categoryFilePath = path.join(root, dir, 'migrations', '_category_.yml')

    if (fs.existsSync(categoryFilePath)) {
      continue
    }

    writeFile(categoryFilePath, categoryTemplate)
  }
}
