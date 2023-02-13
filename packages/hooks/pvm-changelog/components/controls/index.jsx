import React, { useState } from 'react'
import copyToClipboard from 'copy-to-clipboard'

import cardStyles from '../card/card.module.css'
import { createPackageClassNameGetter } from '../utils/getPackageClassName'
import style from './controls.module.css'
import BoundaryVersions from './boundaryVersions/switch'


const getPackageClassName = createPackageClassNameGetter(cardStyles)

export const Controls = ({ store }) => {
  const [lastLinkTarget, setNewLinkTarget] = useState(null)
  const {
    meta: { packages },
    changelog: { lastVersions },
  } = store

  const filterReleases = (packageName) => (e) => {
    if (lastLinkTarget) {
      lastLinkTarget.classList.remove(style.active)
    }

    if (packageName) {
      const nextLink = e.target.parentNode

      nextLink.classList.add(style.active)
      setNewLinkTarget(nextLink)
    }

    store.dispatchers.setReleases(store.filterReleases({ packageName }))
  }

  const copyVersion = (packageName, lastVersion) => () => {
    copyToClipboard(lastVersion)
    store.dispatchers.notify.success('Версия скопирована в буфер!', packageName, 1500)
  }

  return (
    <div className={style.controlsRoot}>
      <div className={style.controlsTitle}>
        <strong>Фильтр / Последняя версия:</strong>
      </div>
      {packages
        .filter((pack) => lastVersions[pack.name])
        .map((pack, index) => {
          return (
            <div className={style.selectPackageContainer}>
              <a href='#' className={style.name} onClick={filterReleases(pack.name)}>
                {pack.name}
              </a>
              <button
                className={`${getPackageClassName(index)} ${style.version}`}
                onClick={copyVersion(pack.name, lastVersions[pack.name].version)}
              >
                {lastVersions[pack.name].version}
              </button>
            </div>
          )
        })}
      <div className={style.resetFilterContainer}>
        <button onClick={filterReleases()} className={style.resetButton}>
          Очистить фильтр
        </button>
      </div>
      <hr />
      <BoundaryVersions store={store} />
    </div>
  )
}
