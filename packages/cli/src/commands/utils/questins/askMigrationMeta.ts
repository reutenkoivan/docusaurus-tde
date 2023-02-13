import { prompt } from '../prompt'

type migrationMetaType = {
  from: string;
  to: string;
}

const semVerInputValidator = (input: string): boolean => {
  return input.match('.').length !== 3 && input.match(/\d+/g).length === 3
}

export const askMigrationMeta = async (name: string, root: string): Promise<migrationMetaType> => {
  const res = await prompt([
    {
      type: 'input',
      name: 'from',
      message: `${name || root}: Migrating from version:`,
      validate: semVerInputValidator,
    },
    {
      type: 'input',
      name: 'to',
      message: `${name || root}: Migrating to version:`,
      validate: semVerInputValidator,
    },
  ])

  return {
    from: res.from,
    to: res.to,
  }
}
