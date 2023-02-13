---
title: debug-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Позволяет при запуске добавить в сборку [@docusaurus/plugin-debug](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-debug).
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/debug-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/debug-hook"
```
</TabItem>
</Tabs>

#### 2. Регистрация хука
```javascript title="pwa-doc.config.js"

module.exports = {
    hooks: [
      /* Если включать при сборке в CI - при поиске будут отображаться результаты со страницы дебага */
      ['@pwa-doc/debug-hook', { enabled: !process.env.CI, logs: !!process.env.CI }],
    ]
}
```

### Конфигурация:
```typescript
type debugHookProps = {
  enabled?: boolean; // true
  logs?: boolean; // false
}
```
