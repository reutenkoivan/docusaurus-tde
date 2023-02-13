/* eslint-disable import/no-unresolved */
import React, { useEffect, useState, useMemo } from 'react'

import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/IconExternalLink'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import docMap from '@pwa-doc/app/root/static/custom/external-links.json'
import style from './main.module.css'


const splitEvery = (perChunk, inputArray) => {
  if (!perChunk) {
    return [inputArray]
  }

  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}

const Card = ({ title, items, startKey, columnClassname }) => {
  return <div className={columnClassname}>
    <div className={`card shadow--lw ${style.card}`}>
      {title &&
        <div className='card__header'>
          <h3>{title}:</h3>
        </div>
      }
      <div className='card__body'>
        <ul>
          {items.map(({ label, href }, index) => {
            return (<li key={`uniqLinkKey${startKey + index}`}>
              <Link to={href} className={style.link}>
                {label}{!isInternalUrl(href) && <IconExternalLink />}
              </Link>
            </li>)
          })}
        </ul>
      </div>
    </div>
  </div>
}

const Row = ({ children }) => {
  return (<div className='row margin-vert--lg'>
    {children}
  </div>)
}

const ExternalLinks = () => {
  const { siteConfig } = useDocusaurusContext()
  const { numberOfColumns, source, commandLinks = [] } = siteConfig?.customFields?.otherDocumentations || {}
  const [docList, setDocList] = useState(Object.values(docMap))

  const documentations = useMemo(() => {
    return [].concat(docList, commandLinks)
  }, [commandLinks, docList])

  const columnClassname = useMemo(() => {
    let className = 'col'

    // Только от 1-4 колонок
    if ([1, 2, 3, 4].includes(numberOfColumns)) {
      className += ` col--${12/numberOfColumns}`
    }

    return className
  }, [numberOfColumns])

  useEffect(() => {
    const { url, options = {} } = source || {}

    if (url) {
      fetch(url, options)
        .then(response => response.json())
        .then(data => setDocList(Object.values(data)))
        // eslint-disable-next-line no-console
        .catch(error => console.log(error))
    }
  }, [siteConfig])

  const rows = splitEvery(
    numberOfColumns,
    documentations.map(({ title, items }, index) => {
      return (
        <Card
          key={`uniqCardKey${index}`}
          title={title}
          items={items}
          startKey={index * documentations.length}
          columnClassname={columnClassname}
        />)
    })
  ).map((row, index) => (
    <Row key={`uniqRowKey${index}`}>{row}</Row>)
  )

  return (
    <Layout title='other-documentations'>
      <div className={style.header}>
        <h1 className='hero__title text--center'>Ссылки на другие документации</h1>
      </div>
      <div className='container'>
        {rows}
      </div>
    </Layout>
  )
}

export default ExternalLinks
