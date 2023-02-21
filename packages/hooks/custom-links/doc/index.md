---
title: custom-links-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Integrates the map of links into the header or footer of the documentation.
:::

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/custom-links-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/custom-links-hook"
```
</TabItem>
</Tabs>

#### 2. Create a map of links
**custom-links-hook** uses the map of links with the following structure:
```typescript
type linksMap = {
    [category: string]: {
      title: string;
      items: Array<{ label: string; href: string; }>,
    }
}
```

#### 3. Connect the hook
```javascript title="docusaurus-tde.config.js"
const linksMap = require('./linksMap')

module.exports = {
    hooks: [
      ['@docusaurus-tde/custom-links-hook', { linksMap }],
    ]
}
```

### Hook configuration:
```typescript
type contentHookProps = {
  linksMap: linksMap;
  viewType?: 'header' | 'footer' // default: 'header'
}
```
