---
title: custom-css-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Добавляет кастомный css файл в сборку.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/custom-css-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/custom-css-hook"
```
</TabItem>
</Tabs>

#### 2. Создание файла
Для работы хука необходим css файл в котором можно переопределять стандартные настройки стилизации, для примера создадим пустой файл
`custom.css` рядом с `pwa-doc.config.js`.

#### 3. Регистрация хука
```javascript title="pwa-doc.config.js"
module.exports = {
    hooks: [
      ['@pwa-doc/custom-css-hook', { source: './custom.css' }],
    ]
}
```

### [Конфигурация](https://docusaurus.io/docs/styling-layout#global-styles):
Пример:

```css title="custom.css"
:root {
  --ifm-color-primary: #25c2a0;
}

html[data-theme='dark'] {
  --ifm-color-primary: rgb(33, 175, 144);
}

.navbar__logo {
  min-height: 2.5rem;
}
```
