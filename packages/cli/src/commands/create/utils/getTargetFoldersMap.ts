import path from 'path'
import { Collector } from '@tinkoff-monorepo/pkgs-collector-workspaces'
import { askFolderFlow, askTargetPackages } from '../../utils'

type folderMapType = {
  root: string;
  dir: string;
  name?: string;
}

export const getTargetFoldersMap = async (hooks): Promise<folderMapType[]> => {
  const folderFlow = await askFolderFlow(hooks)

  if (folderFlow.includes('**')) {
    const docRootName = folderFlow.split('/').pop()
    const { allPkgs } = await Collector.collect()

    const targetPackages = await askTargetPackages(allPkgs)

    return targetPackages.reduce((res, isInclude, index) => {
      if (isInclude) {
        const packageData = allPkgs[index]

        res.push({
          name: packageData.name,
          root: packageData.absPath,
          dir: docRootName,
        })
      }

      return res
    }, [])
  }

  const dirPath = path.resolve(folderFlow).split('/')
  const dirName = dirPath.pop()

  return [
    {
      root: dirPath.join('/'),
      dir: dirName,
    },
  ]
}
