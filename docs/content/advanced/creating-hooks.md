---
title: How to create a hook?
sidebar_label: How to create a hook?
sidebar_position: 2
---

> If the current functionality of docusaurus-tde is not enough for you - then you are ready to create your own hook!

## Creating a hook in the docusaurus-tde repository.

### 1. Create a new package

1. Create a directory with the name of your hook (`./packages/hooks/<hook-name>`)
2. Create a package.json

```json title='./packages/hooks/<hook-name>/package.json'
{
  "name": "@docusaurus-tde/<hook-name>-hook",
  "version": "0.1.0",
  "license": "MIT",
  "main": "lib/index",
  "files": [
    "doc",
    "lib",
    "src"
  ],
  "dependencies": {
    "@docusaurus-tde/di": "^0.1.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/reutenkoivan/docusaurus-tde.git"
  }
}
```

3. Create a main file

```typescript title='<hook-name>/src/index.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

const packageJson = require('../package.json')

const hookSettings: pwaDocDI.hooks.settings = {
  name: '<hook-name>-hook',
  version: packageJson.version,
  before: [],
  runtime: [],
  after: [],
}

export default hookSettings
```

### 2. Create a hook

Inside your package we do not have strict requirements for the structure, but we recommend separating hooks
into different directories depending on the time of their execution _(before, runtime, after)._

:::tip Attention!
**docusaurus-tde guarantees**, that the hooks will be executed in the order in which they are specified in the config.

_It is useful to understand that, because the hooks can modify the docusaurus config._
:::

#### Before

Before pipeline was created for generating files and directories.

:::tip
This is the place if you need:
* Make a request to the server.
* Parse the file system.
* Read the user's input.
:::

```typescript title='<hook-name>/src/before/<hook-function-name>.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const hookFunctionName: pwaDocDI.asyncHook = (props, context) => {
 /* Your awesome code */
}
```

#### Runtime

Runtime pipeline was created for modifying the docusaurus config.

:::info
From the architectural point of view, it is assumed that when implementing runtime hooks, you will only connect @docusaurus-tde or docusaurus plugins
and configure them according to user settings.
:::

```typescript title='<hook-name>/src/runtime/<hook-function-name>.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const hookFunctionName: pwaDocDI.runtimeHook = (config, { props, context }) => {
  /* Your awesome code */

  return config
}
```

#### After

:::tip
This is the place if you need:
* Send a notification to the user.
* Analysis of created static files.
:::

:::caution
**After hooks are executed only after the successful build of the docusaurus-tde!**
:::

```typescript title='<hook-name>/src/after/<hook-function-name>.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const hookFunctionName: pwaDocDI.asyncHook = (props, context) => {
  /* Your awesome code */
}
```

### 3. Create the hook contract
After creating the hook, you need to register it in the contract. Fields _`before`_, _`runtime`_ and _`after`_ are optional
and if you do not have, for example, functions for the _after_ event - you can not specify it in the contract.

```typescript title='<hook-name>/src/index.ts'
import { hookFunctionName1 } from './before/<hook-function-name>.ts'
import { hookFunctionName2 } from './runtime/<hook-function-name>.ts'
import { hookFunctionName3 } from './after/<hook-function-name>.ts'

const hookSettings: pwaDocDI.hooks.settings = {
  name: '<hook-name>-hook',
  version: packageJson.version,
  before: [ hookFunctionName1 ],
  runtime: [ hookFunctionName2 ],
  after: [ hookFunctionName3 ],
}
```

### 4. Test the hook manually

To make sure that everything works as intended, you need to configure the docusaurus-tde documentation
with each of the user scenarios.

### 5. Create a documentation for the hook

As reference, you can use the documentation of any existing hook.

---

## Creating a hook outside the docusaurus-tde repository.

### 1. Create a hooks main file

```javascript
module.exports = {
  name: '<hook-name>-hook',
  version: 'latest'
}
```

### 2. Implement the hook

```javascript
// before/after
const asyncHookFunctionName = async (props, context) => {
  /* Your awesome code */
}

// runtime
const syncHookFunctionName = (config, { props, context }) => {
  /* Your awesome code */

  return config
}

module.exports = {
  asyncHookFunctionName,
  syncHookFunctionName,
}
```

### 3. Connect the hook to the main file

```javascript
const { asyncHookFunctionName, syncHookFunctionName } = require('./hooks')

module.exports = {
  name: '<hook-name>-hook',
  version: 'latest',
  before: [
    asyncHookFunctionName
  ],
  runtime: [
    syncHookFunctionName
  ]
}
```

### 4. Connect the hook to the docusaurus-tde config

```javascript title='./docs/docusaurus-tde.config.js'
module.exports = {
  /* --- Other params --- */
  hooks: [
    [
      require.resolve('./path-to-hook-main-file'),
      { prop1: 'value1', prop2: 'value2' }
    ]
  ]
}
```
