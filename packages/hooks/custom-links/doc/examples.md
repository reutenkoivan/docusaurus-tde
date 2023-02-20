---
title: custom-links-hook/примеры
sidebar_label: Примеры
---

### Отображение одного дропдауна в хедере:

```javascript
const linksMap = {
  default: {
    title: 'Полезные ссылки',
    items: [
      {
        label: 'Prom client',
        href: 'https://github.com/siimon/prom-client'
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

### Отображение одной категории в футере:

```javascript
const linksMap = {
  useful: {
    title: 'Полезные ссылки',
    items: [
      {
        label: 'Prom client',
        href: 'https://github.com/siimon/prom-client'
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

### Отображение нескольких дропдаунов в хедере:

```javascript
const linksMap = {
  useful: {
    title: 'Полезные ссылки',
    items: [
      {
        label: 'Prom client',
        href: 'https://github.com/siimon/prom-client'
      }
    ]
  },
  other: {
    title: 'Менее полезные ссылки',
    items: [
      {
        label: 'Гитхаб',
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
