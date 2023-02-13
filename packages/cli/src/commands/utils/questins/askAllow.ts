import { prompt } from '../prompt'

export const askAllow = async (message: string): Promise<boolean> => {
  const res = await prompt([
    {
      type: 'confirm',
      name: 'isAllow',
      message,
      default: false,
    },
  ])

  return res.isAllow
}
