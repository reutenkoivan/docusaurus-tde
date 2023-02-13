---
title: custom-links-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Добавляет ссылки на сторонние сайты.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/custom-links-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/custom-links-hook"
```
</TabItem>
</Tabs>

#### 2. Создание контракта
**custom-links-hook** принимает объект который имплементирует следующий контракт:
```typescript
type linksMap = {
    [category: string]: {
      title: string;
      items: Array<{ label: string; href: string; }>,
    }
}
```

#### 3. Регистрация хука
```javascript title="pwa-doc.config.js"

const linksMap = require('./linksMap')

module.exports = {
    hooks: [
      ['@pwa-doc/custom-links-hook', { linksMap }],
    ]
}
```

### Конфигурация:
```typescript
type linksMap = {
  [category: string]: {
    title: string;
    items: Array<{ label: string; href: string; }>,
  }
}

type contentHookProps = {
  linksMap: linksMap;
  viewType?: 'header' | 'footer' // 'header'
}
```
