---
title: Как создать хук?
sidebar_label: Как создать хук
sidebar_position: 2
---

> Если вам не хватает текущей функциональности docusaurus-tde - значит вы готовы создать свой собственный хук!

## Создание хука в docusaurus-tde.

### 1. Создать пакет

1. Создайте директорию по имени вашего хука (`./packages/hooks/<hook-name>`)
2. Создайте package.json

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
  "publishConfig": {
    "access": "public",
    "registry": "https://nexus-new.tcsbank.ru/repository/npm-hosted/"
  },
  "repository": {
    "type": "git",
    "url": "https://gitlab.tcsbank.ru/ded-pwa/docusaurus-tde.git"
  }
}
```

3. Создайте корневой файл

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

### 2. Написать код хука

Внутри вашего пакета у нас нет жестких требований к структуре, но мы рекомендуем разделять хуки в разные директории в
зависимости от времени их выполнения _(before, runtime, after)._

:::tip Внимание!
**docusaurus-tde гарантирует**, что хуки для каждого из ивентов будут выполнены согласно их порядку при регистрации в контракте!

_Это дает вам больше возможностей при распределении бизнес логики._
:::

#### Before

Before функции - это функции генерации артефактов документации.

:::tip
Это то самое место если вам нужно:
* Делать запросы.
* Парсить файловую систему.
* Обрабатывать ввод пользователя.
:::

```typescript title='<hook-name>/src/before/<hook-function-name>.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const hookFunctionName: pwaDocDI.asyncHook = (props, context) => {
 /* Ваш замечательный код */
}
```

#### Runtime

Runtime функции созданы для того, чтоб модифицировать docusaurus конфиг.

:::info
Архитектурно подразумевается что при реализации runtime-хуков вы будете только подключать @docusaurus-tde или docusaurus плагины
и конфигурировать их согласно пользовательским настройкам.
:::

```typescript title='<hook-name>/src/runtime/<hook-function-name>.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const hookFunctionName: pwaDocDI.runtimeHook = (config, { props, context }) => {
  /* Ваш невероятный код */
  return config
}
```

#### After

:::tip
Эти функции подходят для:
* Отправки уведомлений.
* Анализа собранной статики.
:::

:::caution Внимание!
**After функции выполняются только после успешного завершения команды _docusaurus-tde build!_**
:::

```typescript title='<hook-name>/src/after/<hook-function-name>.ts'
import type { pwaDocDI } from '@docusaurus-tde/di'

export const hookFunctionName: pwaDocDI.asyncHook = (props, context) => {
  /* Ваш неповторимый код */
}
```

### 3. Описать контракт хука
После написания бизнес-логики хука все функции нужно зарегистрировать в контракте в зависимости от их назначения.
Поля _`before`_, _`runtime`_ и _`after`_ опциональны и если у вас нет, например, функций для ивента _after_ - в контракте
можно не указывать для него пустой массив.

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

### 4. Проверить результат в docusaurus-tde

Чтоб удостовериться, что все работает так как и задумывалось нужно собрать документацию docusaurus-tde
с каждым из пользовательских сценариев.

### 5. Написать документацию

За основу можете взять документацию из любого существующего хука.

---

## Создание хука в вашем репозитории.

### 1. Создать корневой файл хука

```javascript
module.exports = {
  name: '<hook-name>-hook',
  version: 'latest'
}
```

### 2. Написать код хука

```javascript
// before/after
const asyncHookFunctionName = async (props, context) => {
  /* Ваш креативный код */
}

// runtime
const syncHookFunctionName = (config, { props, context }) => {
  /* Ваш волшебный код */
  return config
}

module.exports = {
  asyncHookFunctionName,
  syncHookFunctionName,
}
```

### 3. Подключить код хука

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

### 4. Подключить хук в конфиг

```javascript title='./docs/docusaurus-tde.config.js'
module.exports = {
  /* --- Другие параметры --- */
  hooks: [
    [
      require.resolve('./path-to-hook-main-file'),
      { prop1: 'value1', prop2: 'value2' }
    ]
  ]
}
```
