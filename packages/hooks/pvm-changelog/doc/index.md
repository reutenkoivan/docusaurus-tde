---
title: pvm-changelog-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Позволяет интегрировать changelog основанный на данных о релизе pvm.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/pvm-changelog-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/pvm-changelog-hook"
```
</TabItem>
</Tabs>

#### 2. Регистрация хука
```javascript title="pwa-doc.config.js"

module.exports = {
    hooks: [
      '@pwa-doc/pvm-changelog-hook',
    ]
}
```

### Конфигурация:
```typescript
type pvmChangelogHookProps = {
  mergeReleaseList: Array<{
    title: string;
    created_at: string;
    description: string;
    packages: Array<{ name: string; version: string; updateReason: string; }>
    type: string;
  }>; // []
}
```
