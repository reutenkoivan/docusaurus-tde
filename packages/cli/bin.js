#!/usr/bin/env node
'use strict'

const path = require('path')
const assert = require('assert')
const commander = require('commander')
const { logger } = require('@docusaurus-tde/di')
const { requireConfig } = require('@docusaurus-tde/di')

const { docBuild, docStart, docServe, create } = require('./lib')
const { defaultConfigPath } = require('./lib/constants')

const packageJson = require('./package.json')

const cli = new commander.Command().version(packageJson.version)

cli
  .description('Build documentation.')
  .command('build')
  .option('--config <configPath>', 'Path to the docusaurus-tde config.', defaultConfigPath)
  .action(async ({ config }) => {
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await docBuild(userConfig)
    } catch (e) {
      logger.error(e)
      process.exit(1)
    }
  })

cli
  .description('Start the development server of the documentation.')
  .command('start')
  .option('--config <configPath>', 'Path to the docusaurus-tde config.', defaultConfigPath)
  .action(async ({ config }) => {
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await docStart(userConfig)
    } catch (e) {
      logger.error(e)
      process.exit(1)
    }
  })

cli
  .description('Serve the static files.')
  .command('serve')
  .option('--config <configPath>', 'Path to the docusaurus-tde config.', defaultConfigPath)
  .action(async ({ config }) => {
    process.env.DOCUSAURUS_TDE_DOC_COFIG_PATH = path.resolve(config)
    const userConfig = requireConfig(path.resolve(config))

    try {
      await docServe(userConfig)
    } catch (e) {
      logger.error(e)
      process.exit(1)
    }
  })

cli
  .description('Create the file structure of the documentation.')
  .command('create')
  .option('--config <configPath>', 'Path to the docusaurus-tde config.', defaultConfigPath)
  .option('--structure', 'Initialize the documentation.', false)
  .option('--migration', 'Initialize the migration guide file.', false)
  .action(async ({ config, structure, migration }) => {
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
      logger.error(e)
      process.exit(1)
    }
  })

cli.parse(process.argv)
