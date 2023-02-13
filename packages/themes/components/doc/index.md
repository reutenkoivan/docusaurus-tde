---
sidebar_position: 1
slug: /
title: "@pwa-doc/components-theme"
sidebar_label: Описание
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Позволяет расширить список компонентов доступных внутри страниц документации.
:::

После регистрации темы внутри `*.md[x]` файлов и react страниц будут доступны кастомные компоненты по алиасу `@theme/externalComponents/*`.

### Интеграция:

#### 1. Добавление зависимости.

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/components-theme"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/components-theme"
```
</TabItem>
</Tabs>

#### 2. Регистрация темы.
```javascript title="pwa-doc.config.js"
module.exports = {
    themes: [
      '@pwa-doc/components-theme',
    ]
}
```

### Доступные компоненты:
* **BrowserWindow**
```markdown
import BrowserWindow from '@theme/externalComponents/BrowserWindow';
```

