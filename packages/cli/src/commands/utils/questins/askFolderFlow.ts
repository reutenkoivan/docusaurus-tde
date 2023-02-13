import path from 'path'
import { prompt } from '../prompt'

export const askFolderFlow = async ({ contentHook = [], packageDocumentationHook = [] }): Promise<any> => {
  const res = await prompt([
    {
      type: 'list',
      name: 'folderFlow',
      message: 'Target folder:',
      choices: [
        ...contentHook.map(({ contentDir }) => path.resolve(contentDir)),
        ...packageDocumentationHook.map(({ docRootName = 'doc' }) => path.resolve('**', docRootName)),
      ].map(folderPath => folderPath.replace(process.cwd(), '.')),
    },
  ])

  return res.folderFlow
}
