const categoryMap = {
  hooks: 'Hooks',
  themes: 'Themes',
  plugins: 'Plugins',
  unknown: 'Other packages',
}

const dropdownBuilder = (links) => {
  const dropdownList = Object.keys(categoryMap).reduce((acc, key) => {
    acc[key] = []

    return acc
  }, {})

  for (const { route, location, label } of links) {
    const categoryKey = location.split('/').find(dir => dir in categoryMap) || 'unknown'

    dropdownList[categoryKey].push({
      to: route,
      label,
    })
  }

  return Object.entries(dropdownList).reduce((acc, [key, items]) => {
    if (items.length) {
      acc.push({
        type: 'dropdown',
        label: categoryMap[key],
        items,
      })
    }

    return acc
  }, [])
}

exports.dropdownBuilder = dropdownBuilder
