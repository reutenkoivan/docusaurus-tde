import inquirer from 'inquirer'
import tablePrompt from 'inquirer-table-prompt'

export const prompt = inquirer
  .createPromptModule()
  .registerPrompt('table', tablePrompt)
