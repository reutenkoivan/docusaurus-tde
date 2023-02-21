---
sidebar_position: 1
slug: /
title: "components-theme"
sidebar_label: Details
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Provides a set of custom components for the docusaurus documentation.
:::

After the theme registration, you can use custom components in the `*.md[x]` files and the React pages by alias `@theme/externalComponents/*`.

### Integration:

#### 1. Add dependency

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

#### 2. Connect the theme
```javascript title="docusaurus-tde.config.js"
module.exports = {
    themes: [
      '@docusaurus-tde/components-theme',
    ]
}
```

### Available components:
* **BrowserWindow**
```markdown
import BrowserWindow from '@theme/externalComponents/BrowserWindow';
```
