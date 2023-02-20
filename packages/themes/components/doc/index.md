---
sidebar_position: 1
slug: /
title: "@docusaurus-tde/components-theme"
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
yarn add -WD "@docusaurus-tde/components-theme"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/components-theme"
```
</TabItem>
</Tabs>

#### 2. Регистрация темы.
```javascript title="docusaurus-tde.config.js"
module.exports = {
    themes: [
      '@docusaurus-tde/components-theme',
    ]
}
```

### Доступные компоненты:
* **BrowserWindow**
```markdown
import BrowserWindow from '@theme/externalComponents/BrowserWindow';
```

