import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import type { pwaDocDI } from '@pwa-doc/di'

import { changelogFileName } from '../constants'
import { makeChangelogData } from './formatters'

export const writeChangelogData: pwaDocDI.asyncHook = ({ mergeReleaseList = [] }, context) => {
  const metaFilePath = path.join(context.constants.customStatic, 'metaData.json')
  const metaStore = JSON.parse(fs.readFileSync(metaFilePath).toString())

  const releaseList = []

  execSync('pvm releases download', { cwd: context.constants.customStatic })
  const releaseListFilePath = path.join(context.constants.customStatic, 'releaseList.json')

  if (fs.existsSync(releaseListFilePath)) {
    const pvmReleaseList = JSON.parse(fs.readFileSync(releaseListFilePath).toString())

    releaseList.push(...pvmReleaseList)
  } else {
    context.logger.error(`${releaseListFilePath} is not exist!`)
    process.exit(1)
  }

  if (mergeReleaseList.length) {
    releaseList.push(...mergeReleaseList)
  }

  const changelogData = makeChangelogData({ releaseList, metaStore })
  const outputFilePath = path.join(context.constants.customStatic, changelogFileName)

  context.utils.writeFile(outputFilePath, JSON.stringify(changelogData))
}
