---
title: gtag-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Добавляет в сборку гугл-аналитику.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/gtag-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/gtag-hook"
```
</TabItem>
</Tabs>

#### 2. Регистрация хука
```javascript title="docusaurus-tde.config.js"

module.exports = {
    hooks: [
      ['@docusaurus-tde/gtag-hook', { trackingID: '<trackingID>' }],
    ]
}
```

### Конфигурация:
```typescript
type gtagHookProps = {
  trackingID: string;
  anonymizeIP?: boolean; // true
}
```
