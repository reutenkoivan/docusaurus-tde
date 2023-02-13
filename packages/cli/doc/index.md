---
title: cli
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Пакет с cli командами и основными зависимостями pwa-doc.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/cli"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/cli"
```
</TabItem>
</Tabs>

#### 2. Создание файла конфига
Создайте директорию `docs` в корне репозитория, а в ней `pwa-doc.config.js`

#### 3. Настройка конфига
```javascript title="docs/pwa-doc.config.js"
module.exports = {
  navbar: {
    channel: {
      id: '<channel id>', // (1)
    },
    gitlab: {
      url: 'https://gitlab.tcsbank.ru/ded-pwa/<repo name>', // (2)
    },
  },
}
```
1. ID вашего публичного slack-канала (можно скопировать в нижней части вкладки about).
2. Ссылка на ваш репозиторий.

#### 4. Запуск документации
Выполните команду

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn pwa-doc start
```
</TabItem>

<TabItem value="npm">

```shell
npm run pwa-doc start
```
</TabItem>
</Tabs>

После сборки должна быть доступна **пустая** **документация** по ссылке [http://localhost:3000](http://localhost:3000/)

:::caution
Если у вас возникнут трудности с запуском - можете смело обращаться в [#pwa-sdet-support](slack://channel?id=C02TVB8P5PU&team=T2V37EATG).
:::

### Команды:
Запуск приложения документации в режиме разработки:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn pwa-doc start
```
</TabItem>

<TabItem value="npm">

```shell
npm run pwa-doc start
```
</TabItem>
</Tabs>

Параметры:
* **`--config <configPath = './docs/pwa-doc.config.js'>`**
* **`--help`**

---

Сборка документации в директорию `<root>/public`:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn pwa-doc build
```
</TabItem>

<TabItem value="npm">

```shell
npm run pwa-doc build
```
</TabItem>
</Tabs>

Параметры:
* **`--config <configPath = './docs/pwa-doc.config.js'>`**
* **`--help`**

---

Раздача собранной документации из `<root>/public`:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn pwa-doc serve
```
</TabItem>

<TabItem value="npm">

```shell
npm run pwa-doc serve
```
</TabItem>
</Tabs>


Параметры:
* **`--config <configPath = './docs/pwa-doc.config.js'>`**
* **`--help`**

---

Создание файлов документации:

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn pwa-doc create
```
</TabItem>

<TabItem value="npm">

```shell
npm run pwa-doc create
```
</TabItem>
</Tabs>


Параметры:
* **`--config <configPath = './docs/pwa-doc.config.js'>`**
* **`--structure`** - Инициализация структуры документации.
* **`--migration`** - Создание файла миграции.
* **`--help`**
