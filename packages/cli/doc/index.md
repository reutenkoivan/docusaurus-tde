---
title: cli
sidebar_label: Details
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
The package contains the cli commands and the main dependencies of the docusaurus-tde.
:::

### Integration:

#### 1. Add dependency

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@docusaurus-tde/cli"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@docusaurus-tde/cli"
```
</TabItem>
</Tabs>

#### 2. Create a config
Create a directory `docs` in the root of the repository, and in it `docusaurus-tde.config.js`

#### 3. Configure the config
```javascript title="docs/docusaurus-tde.config.js"
module.exports = {
  navbar: {
    support: {
      url: '<link>', // link to the support page
    },
    repository: {
      url: '<link>', // link to the repository
    },
  }
}
```

#### 4. Start the documentation
Execute the following command in the root of the repository:

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

After the build, the documentation should be available at [http://localhost:3000](http://localhost:3000/).
For now, the documentation will be empty.

### Commands:
Running the documentation app in development mode:

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

Parameters:
* **`--config <configPath = './docs/docusaurus-tde.config.js'>`**
* **`--help`**

---

Build the documentation app to the `<root>/build` directory:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn docusaurus-tde build
```
</TabItem>

<TabItem value="npm">

```shell
npm run docusaurus-tde build
```
</TabItem>
</Tabs>

Parameters:
* **`--config <configPath = './docs/docusaurus-tde.config.js'>`**
* **`--help`**

---

Hosting the documentation app from the `<root>/build` directory:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn docusaurus-tde serve
```
</TabItem>

<TabItem value="npm">

```shell
npm run docusaurus-tde serve
```
</TabItem>
</Tabs>


Parameters:
* **`--config <configPath = './docs/docusaurus-tde.config.js'>`**
* **`--help`**

---

Create a template file for the documentation:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn docusaurus-tde create
```
</TabItem>

<TabItem value="npm">

```shell
npm run docusaurus-tde create
```
</TabItem>
</Tabs>


Parameters:
* **`--config <configPath = './docs/docusaurus-tde.config.js'>`**
* **`--structure`** - Initialize the structure of the documentation.
* **`--migration`** - Initialize the migration guide.
* **`--help`**
