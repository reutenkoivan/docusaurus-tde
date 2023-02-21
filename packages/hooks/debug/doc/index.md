---
title: debug-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Allows to integrate the debug page into the documentation.<br/>
Uses the [@docusaurus/plugin-debug](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-debug).
:::

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/debug-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/debug-hook"
```
</TabItem>
</Tabs>

#### 2. Connect the hook
```javascript title="docusaurus-tde.config.js"

module.exports = {
    hooks: [
      /*
        If enabled during the build stage in the CI - in the search results,
        you will see the content from the debug page.
      */
      ['@docusaurus-tde/debug-hook', { enabled: !process.env.CI, logs: !!process.env.CI }],
    ]
}
```

### Hook configuration:
```typescript
type debugHookProps = {
  enabled?: boolean; // default: true
  logs?: boolean; // default: false
}
```
