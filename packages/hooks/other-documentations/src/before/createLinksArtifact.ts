import path from 'path'
import assert from 'assert'
import type { pwaDocDI } from '@docusaurus-tde/di'

import { artifactName } from '../constants'

export const createLinksArtifact: pwaDocDI.asyncHook = async ({ source }, context) => {
  const outputFile = path.join(context.constants.customStatic, artifactName)

  context.logger.debug(`Output file-path: "${outputFile}".`)

  let data = {}

  try {
    if (source) {
      assert.ok(typeof source === 'object', 'Property "source" is not assignable to type "{ url: string; options: object }".')
      context.logger.debug(JSON.stringify(source))

      const { url, options = {} } = source
      const response = await context.utils.fetch(url, options)

      data = await response.json()
    }
  } catch (e) {
    context.logger.error(e)
  }

  context.utils.writeFile(outputFile, JSON.stringify(data, null, 2))
}
