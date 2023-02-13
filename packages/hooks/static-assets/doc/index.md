---
title: static-assets-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Регистрирует директорию с медиа-фалами.
:::

После регистрации директории все файлы внутри будут добавлены в приложение документации и станут доступны по своему имени из любой страницы

### Интеграция:

#### 1. Добавление зависимости.

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/static-assets-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/static-assets-hook"
```
</TabItem>
</Tabs>

#### 2. Создание директории.
Создайте директорию `<root>/docs/assets` на одном уровне с `pwa-doc.config.js`.

#### 3. Добавление файла.
Создайте любой файл в директории `assets` (для наглядности можно использовать картинку).

#### 4. Регистрация хука.
```javascript title="pwa-doc.config.js"
const path = require('path')

module.exports = {
    hooks: [
      ['@pwa-doc/static-assets-hook', { staticDirectories: [path.join(__dirname, 'assets')] }],
    ]
}
```

#### 5. Проверка результата.
* Подключите в документацию ваш файл по его имени.
* Запустите сервер документации

Например, если вы в директорию `assets` добавили картинку с именем `logo.png`, то ее можно отобразить:
```markdown
![logo](/logo.png)
```

### Конфигурация:
```typescript
type staticAssetsHookProps = {
  staticDirectories: string[];
}
```
