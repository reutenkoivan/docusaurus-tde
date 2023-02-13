const nameToKey = (name: string): string => name.split('/').pop()
.split('-')
.reduce((acc, keyPart) => acc + keyPart[0].toUpperCase() + keyPart.slice(1))

export const aggregateHooks = ({ hooks = [] }): Record<string, Record<string, any>> => {
  const res = {}

  for (const hookData of hooks) {
    const [name, settings = {}] = Array.isArray(hookData) ? hookData : [hookData]
    const key = nameToKey(name)

    if (!res[key]) {
      res[key] = []
    }

    res[key].push(settings)
  }

  return res
}
