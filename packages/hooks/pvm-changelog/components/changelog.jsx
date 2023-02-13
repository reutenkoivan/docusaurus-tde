import Layout from '@theme/Layout'
import React, { useState } from 'react'
import { NotificationContainer } from 'react-notifications'

import changelogData from '@pwa-doc/app/root/static/custom/changelogData.json'
import metaData from '@pwa-doc/app/root/static/custom/metaData.json'

import { ChangelogCard, ChangelogStore, Controls } from '@pwa-doc/pvm-changelog-hook/components'

import '@pwa-doc/pvm-changelog-hook/components/notification/notify.css'
import styles from '@pwa-doc/pvm-changelog-hook/components/changelog.module.css'

const Changelog = () => {
  const [store] = useState(new ChangelogStore(changelogData, metaData))
  const [releases, setReleases] = useState(store.releases)

  store.dispatchers.setReleases = setReleases

  return (
    <Layout title='Changelog'>
        <div className={styles.changelogRoot}>
          <Controls store={store} />
          <main>
          <div className={styles.changelogListRoot}>
            {releases.map((release) => {
              return (
                <div key={release.key}>
                  <ChangelogCard release={release} store={store} />
                </div>
              )
            })}
          </div>
          </main>
        </div>
        <NotificationContainer />
    </Layout>
  )
}

export default Changelog
