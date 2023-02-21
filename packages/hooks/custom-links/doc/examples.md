---
title: custom-links-hook/examples
sidebar_label: Examples
---

### Displaying a single category in the header:

```javascript
const linksMap = {
  default: {
    title: 'Useful links',
    items: [
      {
        label: 'Awesome library',
        href: 'https://github.com/reutenkoivan/docusaurus-tde'
      }
    ]
  }
}

module.exports = {
  hooks: [
    ['@docusaurus-tde/custom-links-hook', { linksMap }],
  ]
}
```

### Displaying a single category in the footer:

```javascript
const linksMap = {
  useful: {
    title: 'Useful links',
    items: [
      {
        label: 'Awesome library',
        href: 'https://github.com/reutenkoivan/docusaurus-tde'
      }
    ]
  }
}

module.exports = {
  hooks: [
    ['@docusaurus-tde/custom-links-hook', { linksMap, viewType: 'footer' }],
  ]
}
```

### Displaying multiple categories in the header:

```javascript
const linksMap = {
  useful: {
    title: 'Useful links',
    items: [
      {
        label: 'Awesome library',
        href: 'https://github.com/reutenkoivan/docusaurus-tde'
      }
    ]
  },
  other: {
    title: 'Other links',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com'
      }
    ]
  }
}

module.exports = {
  hooks: [
    ['@docusaurus-tde/custom-links-hook', { linksMap }],
  ]
}
```
