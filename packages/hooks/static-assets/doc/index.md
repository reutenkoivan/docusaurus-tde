---
title: static-assets-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Registers a directory with media files.
:::

After the hook registration, you can use files from the directory in the `*.md[x]` files and the React pages by their name.

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/static-assets-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/static-assets-hook"
```
</TabItem>
</Tabs>

#### 2. Create directory.
Create a directory `<root>/docs/assets` on the same level as `docusaurus-tde.config.js`.

#### 3. Add files.
Create any file in the `assets` directory (for clarity, you can use an image).

#### 4. Connect the hook
```javascript title="docusaurus-tde.config.js"
const path = require('path')

module.exports = {
    hooks: [
      ['@docusaurus-tde/static-assets-hook', { staticDirectories: [path.join(__dirname, 'assets')] }],
    ]
}
```

#### 5. Use files.
* Connect the file in the documentation using his name.
* Run the documentation server

For example, if you added an image to the `assets` directory with the name `logo.png`, you can display it:

```markdown
![logo](/logo.png)
```

### Hook configuration:
```typescript
type staticAssetsHookProps = {
  staticDirectories: string[];
}
```
