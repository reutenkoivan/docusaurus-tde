import { prompt } from '../prompt'

export const askTargetPackages = async (allPkgs): Promise<Array<true | undefined>> => {
  const res = await prompt([
    {
      type: 'table',
      name: 'targetPackages',
      message: 'Choose folders:',
      rows: allPkgs.map(({ name }, i) => {
        return {
          name,
          value: i,
        }
      }),
      columns: [
        {
          name: 'Include',
          value: true,
        },
        {
          name: 'Exclude',
          value: undefined,
        },
      ],
    },
  ])

  return res.targetPackages
}
