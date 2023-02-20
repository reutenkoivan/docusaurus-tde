---
title: package-documentation-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Позволяет инкапсулировать в пакет его документацию.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/package-documentation-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/package-documentation-hook"
```
</TabItem>
</Tabs>

#### 2. Регистрация хука
```javascript title="docusaurus-tde.config.js"

module.exports = {
    hooks: [
      '@docusaurus-tde/package-documentation-hook',
    ]
}
```

### Конфигурация:
```typescript
type linkType = {
  label: string;
  route: string;
  location: string;
}

type packageDocumentationHookProps = {
  docRootName?: string; // 'doc'
  showLastUpdateAuthor?: boolean; // true
  showLastUpdateTime?: boolean; // true
  dropdownBuilder?: (links: linkType[], props: Required<packageDocumentationHookProps>) => Array<{
    type: 'dropdown',
    label: string;
    items: Array<{ label: string; to: string }>;
  }>
}
```
