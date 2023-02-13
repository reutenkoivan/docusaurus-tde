export const getBoundaryReleases = (releases): any => {
  const packsBuff = {}

  for (const { packages } of releases) {
    for (const { name, version } of packages) {
      const [major, minor, patch] = version.split('.').map(Number)

      if (name in packsBuff) {
        if (major in packsBuff[name]) {
          if (minor in packsBuff[name][major]) {
            const buffedPatch = packsBuff[name][major][minor]

            packsBuff[name][major][minor] = buffedPatch && buffedPatch > patch ? buffedPatch : patch
          } else {
            packsBuff[name][major][minor] = patch
          }
        } else {
          packsBuff[name][major] = {
            [minor]: patch,
          }
        }
      } else {
        packsBuff[name] = {
          [major]: {
            [minor]: patch,
          },
        }
      }
    }
  }

  const targetReleases = Object.entries(packsBuff).map(([name, versObj]) => {
    const versions = Object.entries(versObj).map(([major, minorsObj]) => {
      const maxMinor = Object.keys(minorsObj)
        .sort((a, b) => Number(a) - Number(b))
        .pop()

      return `${major}.${maxMinor}.${minorsObj[maxMinor]}`
    })

    return { name, versions }
  })

  return targetReleases.reduce((acc, { name, versions }) => {
    acc[name] = versions

    return acc
  }, {})
}
