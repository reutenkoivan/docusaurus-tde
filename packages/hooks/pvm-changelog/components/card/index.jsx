import React from 'react'
import Markdown from 'react-markdown'
import copyToClipboard from 'copy-to-clipboard'
import { createPackageClassNameGetter } from '../utils/getPackageClassName'
import styles from './card.module.css'


const getPackageClassName = createPackageClassNameGetter(styles)

const Packages = ({ packages, store }) => {
  const metaPackages = store.meta.packages.filter((pack) => store.changelog.lastVersions[pack.name])

  const copyValue = (e) => {
    if (e.target.nodeName === 'SPAN') {
      const targetText = e.target.innerText

      copyToClipboard(targetText)
      store.dispatchers.notify.success('Добавлено в буфер!', targetText, 1500)
    }
  }

  return (
    <div className={styles.packagesContainer} onClick={copyValue}>
      {packages.map((pack) => {
        const colorIndex = metaPackages.findIndex(({ name }) => pack.name === name)

        if (pack.type === 'broken') {
          return (
            <div title={pack.description} className={`${styles.packageTagBase} ${styles.packageTagColorBroken}`}>
              {pack.name} {pack.version}
            </div>
          )
        }

        return (
          <div className={getPackageClassName(colorIndex)}>
            <span>{pack.name}</span>
            <span className={styles.version}>{pack.version}</span>
          </div>
        )
      })}
    </div>
  )
}

export const ChangelogCard = ({ release, store }) => {
  const { title, time, description, packages, skipHeadingsFromDescription } = release

  return (
    <>
      <h1 className={`${styles.title} ${styles.link}`} id={title}>
        <a href={`#${title}`}>{title}</a>
      </h1>

      <div>
        <i>{time}</i>
      </div>

      <div className={styles.descriptionRoot}>
        {skipHeadingsFromDescription ? <></> : <strong>Описание:</strong>}
        <Markdown>{description}</Markdown>
      </div>

      {skipHeadingsFromDescription ? <></> : <strong>Пакеты:</strong>}
      <Packages packages={packages} store={store} time={time} />
    </>
  )
}
