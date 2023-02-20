---
title: content-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Регистрирует директорию с файлами документации.
:::

После регистрации директории все `*.md[x]` файлы внутри будут добавлены в приложение документации как отдельные страницы
и для каждой из них будет сгенерирован роут в зависимости от пути в файловой системе относительно корневой директории
и имени файла.

Поскольку генерация роута происходит автоматически - стоит избегать использования кириллицы в именах файлов и директорий,
если вы хотите применить кастомные настройки отображения нужно воспользоваться [форматированием из контента](/cookbook/cheat-sheet).

### Интеграция:

#### 1. Добавление зависимости.

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

#### 2. Регистрация хука.
```javascript title="docusaurus-tde.config.js"
const path = require('path')

module.exports = {
    hooks: [
      ['@docusaurus-tde/content-hook', { contentDir: path.join(__dirname, 'content') }],
    ]
}
```

#### 3. Создание тестовой страницы.
Выполните команду

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

#### 4. Проверка результата.
Выполните команду

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

### Конфигурация:
```typescript
type contentHookProps = {
  contentDir: string;
  id?: string; // 'default'
  routeBasePath?: string; // '/'
  showLastUpdateAuthor?: boolean; // true
  showLastUpdateTime?: boolean; // true
}
```
