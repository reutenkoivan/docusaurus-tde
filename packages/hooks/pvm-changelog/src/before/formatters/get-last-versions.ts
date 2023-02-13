export const getLastVersions = (releases): any => {
  const packsBuff = {}

  for (const { packages } of releases) {
    for (const { name, version } of packages) {
      const [major, minor, patch] = version.split('.').map(Number)

      if (!packsBuff[name]) {
        packsBuff[name] = {
          minor,
          major,
          patch,
          version: `${major}.${minor}.${patch}`,
        }
      }

      const majorMax = packsBuff[name].major
      const minorMax = packsBuff[name].minor
      const patchMax = packsBuff[name].patch

      const moreThanCurrentMaxMajor = major > majorMax
      const moreThanCurrentMaxMinor = major === majorMax && minor > minorMax
      const moreThanCurrentMaxPatch = major === majorMax && minor === minorMax && patch > patchMax

      if (moreThanCurrentMaxMajor || moreThanCurrentMaxMinor || moreThanCurrentMaxPatch) {
        packsBuff[name] = {
          minor,
          major,
          patch,
          version: `${major}.${minor}.${patch}`,
        }
      }
    }
  }

  return packsBuff
}
