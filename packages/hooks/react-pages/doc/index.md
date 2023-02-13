---
title: react-pages-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Позволяет интегрировать страницы написанные как react компоненты.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/react-pages-hook"
```

</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/react-pages-hook"
```

</TabItem>
</Tabs>

#### 2. Создание страниц
##### 2.1 Создайте корневую директорию для всех react-based страниц.
Для примера можно создать `<root>/docs/react-pages`.

```shell
mkdir docs/react-pages
```

##### 2.2 Создайте файл `<root>/docs/react-pages/*.js[x]`.
Для начала лучше создать `index.jsx` файл, из-за того что имя равно "`index`" - для него будет сгенерирован роут "`/`",
что приведет к отображению этой страницы при переходе на корневой роут документации. _(Вы получили главную страницу!)_

```shell
touch docs/react-pages/index.jsx
```

##### 2.3 Создайте react-компонент.
Создайте любой react-компонент внутри `index.jsx` и сделайте для него **default export**!

```jsx
import React from 'react'
import Layout from '@theme/Layout'

const MainPage = () => {
  return (
    <Layout>
      <h1>Это главная страница!</h1>
    </Layout>
  )
}

export default MainPage

```

#### 3. Регистрация хука

```javascript title="pwa-doc.config.js"
const path = require('path')

module.exports = {
    hooks: [
      ['@pwa-doc/react-pages-hook', { root: path.join(__dirname, 'react-pages') }]
    ]
}
```

### Конфигурация:

```typescript
type reactPagesHookProps = {
  root: string;
  routeBasePath?: string; // '/'
}
```
