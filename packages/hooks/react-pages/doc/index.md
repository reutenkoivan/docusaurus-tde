---
title: react-pages-hook
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Allows you to integrate pages written as react components.
:::

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/react-pages-hook"
```

</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/react-pages-hook"
```

</TabItem>
</Tabs>

#### 2. Create react-based pages
##### 2.1 Create a directory for the React pages.
For example, you can create `<root>/docs/react-pages`:

```shell
mkdir docs/react-pages
```

##### 2.2 Create an `<root>/docs/react-pages/*.js[x]`.
Better to start with `index.jsx` file, because the name is equal to "`index`" - for it will be generated a route "`/`",
which will lead to the display of this page when you go to the root route of the documentation. _(You got the main page!)_

```shell
touch docs/react-pages/index.jsx
```

##### 2.3 Create the React component.
Create some react component in `index.jsx` and make **default export** for it!

```jsx
import React from 'react'
import Layout from '@theme/Layout'

const MainPage = () => {
  return (
    <Layout>
      <h1>My React Page</h1>
    </Layout>
  )
}

export default MainPage

```

#### 3. Connect the hook

```javascript title="docusaurus-tde.config.js"
const path = require('path')

module.exports = {
    hooks: [
      ['@docusaurus-tde/react-pages-hook', { root: path.join(__dirname, 'react-pages') }]
    ]
}
```

### Hook configuration

```typescript
type reactPagesHookProps = {
  root: string;
  routeBasePath?: string; // default: '/'
  include?: string[]; // default: undefined
  exclude?: string[]; // default: undefined
}
```
