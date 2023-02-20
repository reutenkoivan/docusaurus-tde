#!/usr/bin/env node
'use strict'

const path = require('path')
const assert = require('assert')
const commander = require('commander')
// Const { logger } = require('@delivery-ci/core')
const { requireConfig } = require('@docusaurus-tde/di')

const { pwaDocBuild, pwaDocStart, pwaDocServe, create } = require('./lib')
const { defaultConfigPath } = require('./lib/constants')

const packageJson = require('./package.json')

const cli = new commander.Command().version(packageJson.version)

cli
  .description('Собрать документацию в public.')
  .command('build')
  .option('--config <configPath>', 'Путь к docusaurus-tde конфигу.', defaultConfigPath)
  .action(async ({ config }) => {
    // Logger.header(`docusaurus-tde ${packageJson.version}`)
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await pwaDocBuild(userConfig)
    } catch (e) {
      // Logger.signal.error(e)
      process.exit(1)
    }
  })

cli
  .description('Запустить сервер который отслеживает изменения в файлах документации.')
  .command('start')
  .option('--config <configPath>', 'Путь к docusaurus-tde конфигу.', defaultConfigPath)
  .action(async ({ config }) => {
    // Logger.header(`docusaurus-tde ${packageJson.version}`)
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await pwaDocStart(userConfig)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      // Logger.signal.error(e)
      process.exit(1)
    }
  })

cli
  .description('Запустить сервер который раздает статику из public.')
  .command('serve')
  .option('--config <configPath>', 'Путь к docusaurus-tde конфигу.', defaultConfigPath)
  .action(async ({ config }) => {
    // Logger.header(`docusaurus-tde ${packageJson.version}`)
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await pwaDocServe(userConfig)
    } catch (e) {
      // Logger.signal.error(e)
      process.exit(1)
    }
  })

cli
  .description('Создание структуры файлов документации.')
  .command('create')
  .option('--config <configPath>', 'Путь к docusaurus-tde конфигу.', defaultConfigPath)
  .option('--structure', 'Создать структуру документации', false)
  .option('--migration', 'Создать миграцию', false)
  .action(async ({ config, structure, migration }) => {
    // Logger.header(`docusaurus-tde ${packageJson.version}`)
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      const optionsCount = [structure, migration].filter(Boolean).length

      assert.ok(optionsCount === 1, `Required exactly one option, get ${optionsCount}!`)

      if (structure) {
        await create.structure({ config: userConfig })
      }

      if (migration) {
        await create.migration({ config: userConfig })
      }
    } catch (e) {
      // Logger.signal.error(e)
      process.exit(1)
    }
  })

cli.parse(process.argv)
