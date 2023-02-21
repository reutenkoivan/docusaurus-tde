---
title: package-documentation-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Allows you to encapsulate the documentation of the package in a package.
:::

### Integration:

#### 1. Add dependency

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

#### 2. Connect the hook
```javascript title="docusaurus-tde.config.js"

module.exports = {
    hooks: [
      '@docusaurus-tde/package-documentation-hook',
    ]
}
```

### Hook configuration:
```typescript
type linkType = {
  label: string;
  route: string;
  location: string;
}

type packageDocumentationHookProps = {
  docRootName?: string; // default: 'doc'
  showLastUpdateAuthor?: boolean; // default: true
  showLastUpdateTime?: boolean; // default: true
  dropdownBuilder?: (links: linkType[], props: Required<packageDocumentationHookProps>) => Array<{
    type: 'dropdown',
    label: string;
    items: Array<{ label: string; to: string }>;
  }>
}
```
