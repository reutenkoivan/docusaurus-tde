---
title: content-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Connects the directory with the documentation files.
:::

After the hook registration, the `*.md[x]` files in the directory will be added to the documentation application as separate pages
and for each of them a route will be generated depending on the path in the file system relative to the root directory
and the file name.

Because the route generation is automatic, it is best to avoid using other than Latin letters in file and directory names,
if you want to apply custom display settings, you need to use [formatting from content](/cookbook/cheat-sheet).

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/content-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/content-hook"
```
</TabItem>
</Tabs>

#### 2. Connect the hook
```javascript title="docusaurus-tde.config.js"
const path = require('path')

module.exports = {
    hooks: [
      ['@docusaurus-tde/content-hook', { contentDir: path.join(__dirname, 'content') }],
    ]
}
```

#### 3. Initialize the directory structure.
Execute the command

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn docusaurus-tde create --structure
```
</TabItem>

<TabItem value="npm">

```shell
npm run docusaurus-tde create --structure
```
</TabItem>
</Tabs>

#### 4. Start the application.
Execute the command

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn docusaurus-tde start
```
</TabItem>

<TabItem value="npm">

```shell
npm run docusaurus-tde start
```
</TabItem>
</Tabs>

### Available hook options:
```typescript
type contentHookProps = {
  contentDir: string;
  id?: string; // 'default'
  routeBasePath?: string; // '/'
  showLastUpdateAuthor?: boolean; // true
  showLastUpdateTime?: boolean; // true
}
```
