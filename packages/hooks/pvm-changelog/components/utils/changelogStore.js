import { NotificationManager } from 'react-notifications'

export class ChangelogStore {
  constructor(pvmChangelog, meta) {
    this.meta = meta
    this.changelog = pvmChangelog
    this.releases = this.changelog.releases
    this.boundaryReleases = this.changelog.boundaryReleases
    this.filters = {
      packageName: null,
      boundaryVersions: false,
    }
    this.dispatchers = {
      notify: NotificationManager,
    }
  }

  filterReleases({ packageName, boundaryVersions } = {}) {
    if (boundaryVersions !== undefined) {
      this.filters.boundaryVersions = boundaryVersions
    }

    if (boundaryVersions === undefined) {
      this.filters.packageName = packageName === undefined ? null : packageName
    }

    if (this.filters.boundaryVersions) {
      return this.changelog.releases.filter((release) => {
        for (const { name, version } of release.packages) {
          const isTargetPackage = name === this.filters.packageName || this.filters.packageName === null

          if (isTargetPackage && this.boundaryReleases[name].includes(version)) {
            return true
          }
        }

        return false
      })
    }

    return this.changelog.releases.filter(({ packages }) =>
      packages.some(({ name }) => name === this.filters.packageName || this.filters.packageName === null)
    )
  }
}
