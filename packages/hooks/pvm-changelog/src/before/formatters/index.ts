import { getBoundaryReleases } from './get-boundary-releases'
import { getLastVersions } from './get-last-versions'
import { formatTitle } from './formatTitle'
import { formatTime } from './formatTime'
import { formatPackages } from './formatPackages'

export const makeChangelogData = ({ releaseList, metaStore }): any => {
  const boundaryReleases = getBoundaryReleases(releaseList)
  const lastVersions = getLastVersions(releaseList)

  const releases = releaseList.map((release) => {
    release.packages = formatPackages(release.packages, metaStore)
    release.title = formatTitle(release.title)

    if (!release.time) {
      release.time = formatTime(release.created_at)
    }

    return release
  })

  return {
    releases,
    boundaryReleases,
    lastVersions,
  }
}
