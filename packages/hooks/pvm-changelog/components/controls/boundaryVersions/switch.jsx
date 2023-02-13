import React from 'react'
import switchStyles from './switch.module.css'

const BoundaryVersions = ({ store }) => {
  const setFilter = (e) => {
    store.dispatchers.setReleases(store.filterReleases({ boundaryVersions: e.target.checked }))
  }

  return (
    <div className={switchStyles.root}>
      <div>Только граничные версии:</div>
      <input
        type='checkbox'
        name='toggle'
        id='toggle-button'
        className={switchStyles.toggleButton}
        onClick={setFilter}
      />
    </div>
  )
}

export default BoundaryVersions
