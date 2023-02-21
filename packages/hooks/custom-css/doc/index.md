---
title: custom-css-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Integrate custom css file into the docusaurus-tde build.
:::

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/custom-css-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/custom-css-hook"
```
</TabItem>
</Tabs>

#### 2. Connect the hook
For the hook to work, you need a css file in which you can override the standard styling settings, for example, create an empty file
`custom.css` next to `docusaurus-tde.config.js`.

#### 3. Connect the hook
```javascript title="docusaurus-tde.config.js"
module.exports = {
    hooks: [
      ['@docusaurus-tde/custom-css-hook', { source: './custom.css' }],
    ]
}
```

### [Configuration](https://docusaurus.io/docs/styling-layout#global-styles):
Example of custom css file:

```css title="custom.css"
:root {
  --ifm-color-primary: #25c2a0;
}

html[data-theme='dark'] {
  --ifm-color-primary: rgb(33, 175, 144);
}

.navbar__logo {
  min-height: 2.5rem;
}
```
