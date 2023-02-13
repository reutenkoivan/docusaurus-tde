export const formatPackages = (packages, metaStore): any => {
  return packages.map((releasedPackage) => {
    const metaPack = metaStore.packages.find(({ name }) => name === releasedPackage.name)

    if (metaPack) {
      const { brokenVersions } = metaPack

      for (const [version, description] of brokenVersions) {
        if (version === releasedPackage.version) {
          return {
            ...releasedPackage,
            type: 'broken',
            description,
          }
        }
      }
    }

    return releasedPackage
  })
}
