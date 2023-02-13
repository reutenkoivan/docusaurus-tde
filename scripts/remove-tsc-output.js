const path = require('path')
const glob = require('glob')

const removeDir = require('./utils/removeDir')
const removeFile = require('./utils/removeFile')

const tsConfigPattern = path.resolve('packages', '**', 'tsconfig.json')
const tsbuildinfoPattern = path.resolve('packages', '**', 'tsconfig.tsbuildinfo')

for (const tsConfigPath of glob.sync(tsConfigPattern, { ignore: '**/node_modules/**' })) {
  const { compilerOptions: { outDir } } = require(tsConfigPath)
  const dirpath = path.resolve(path.dirname(tsConfigPath), outDir)

  removeDir(dirpath)
}

for (const tsbuildinfo of glob.sync(tsbuildinfoPattern, { ignore: '**/node_modules/**' })) {
  removeFile(tsbuildinfo)
}
