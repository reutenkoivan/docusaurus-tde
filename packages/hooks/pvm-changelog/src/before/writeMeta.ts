import path from 'path'
import { Collector } from '@tinkoff-monorepo/pkgs-collector-workspaces'

import type { pwaDocDI } from '@pwa-doc/di'

import { metaFileName } from '../constants'

export const writeMeta: pwaDocDI.asyncHook = async (props, context) => {
  const metaStore = {
    packages: [],
  }

  const { allPkgs } = await Collector.collect()

  for (const { meta } of allPkgs) {
    metaStore.packages.push({
      name: meta.name,
      lastVersion: meta.version,
      brokenVersions: meta['broken-versions'] || [],
    })
  }

  const outputFilePath = path.join(context.constants.customStatic, metaFileName)

  context.utils.writeFile(outputFilePath, JSON.stringify(metaStore))
}
