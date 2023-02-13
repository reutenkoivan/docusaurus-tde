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
yarn add -WD "@pwa-doc/gtag-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/gtag-hook"
```
</TabItem>
</Tabs>

#### 2. Регистрация хука
```javascript title="pwa-doc.config.js"

module.exports = {
    hooks: [
      ['@pwa-doc/gtag-hook', { trackingID: '<trackingID>' }],
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
