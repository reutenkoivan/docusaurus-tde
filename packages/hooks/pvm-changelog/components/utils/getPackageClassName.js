const getIndex = (range, pick) => {
  if (pick > range) {
    return pick % range
  }

  return pick
}

export const createPackageClassNameGetter = (styles) => (num) => {
 return `${styles[`packageTagColor-${getIndex(16, num)}`]} ${styles.packageTagBase}`
}
