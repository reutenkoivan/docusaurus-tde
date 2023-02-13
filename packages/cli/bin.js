#!/usr/bin/env node
'use strict'

const path = require('path')
const assert = require('assert')
const commander = require('commander')
const { logger } = require('@delivery-ci/core')
const { requireConfig } = require('@pwa-doc/di')

const { pwaDocBuild, pwaDocStart, pwaDocServe, create } = require('./lib')
const { defaultConfigPath } = require('./lib/constants')

const packageJson = require('./package.json')

const cli = new commander.Command().version(packageJson.version)

cli
  .description('Собрать документацию в public.')
  .command('build')
  .option('--config <configPath>', 'Путь к pwa-doc конфигу.', defaultConfigPath)
  .action(async ({ config }) => {
    logger.header(`pwa-documentation ${packageJson.version}`)
    process.env.PWA_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await pwaDocBuild(userConfig)
    } catch (e) {
      logger.signal.error(e)
      process.exit(1)
    }
  })

cli
  .description('Запустить сервер который отслеживает изменения в файлах документации.')
  .command('start')
  .option('--config <configPath>', 'Путь к pwa-doc конфигу.', defaultConfigPath)
  .action(async ({ config }) => {
    logger.header(`pwa-documentation ${packageJson.version}`)
    process.env.PWA_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await pwaDocStart(userConfig)
    } catch (e) {
      logger.signal.error(e)
      process.exit(1)
    }
  })

cli
  .description('Запустить сервер который раздает статику из public.')
  .command('serve')
  .option('--config <configPath>', 'Путь к pwa-doc конфигу.', defaultConfigPath)
  .action(async ({ config }) => {
    logger.header(`pwa-documentation ${packageJson.version}`)
    process.env.PWA_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await pwaDocServe(userConfig)
    } catch (e) {
      logger.signal.error(e)
      process.exit(1)
    }
  })

cli
  .description('Создание структуры файлов документации.')
  .command('create')
  .option('--config <configPath>', 'Путь к pwa-doc конфигу.', defaultConfigPath)
  .option('--structure', 'Создать структуру документации', false)
  .option('--migration', 'Создать миграцию', false)
  .action(async ({ config, structure, migration }) => {
    logger.header(`pwa-documentation ${packageJson.version}`)
    process.env.PWA_DOC_COFIG_PATH = path.resolve(config)
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
      logger.signal.error(e)
      process.exit(1)
    }
  })

cli.parse(process.argv)
