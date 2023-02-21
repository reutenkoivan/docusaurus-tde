---
title: gtag-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Adds the Google Analytics to the documentation.
:::

### Integration:

#### 1. Add dependency

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

#### 2. Connect the hook
```javascript title="docusaurus-tde.config.js"

module.exports = {
    hooks: [
      ['@docusaurus-tde/gtag-hook', { trackingID: '<trackingID>' }],
    ]
}
```

### Hook configuration:
```typescript
type gtagHookProps = {
  trackingID: string;
  anonymizeIP?: boolean; // default: true
}
```
