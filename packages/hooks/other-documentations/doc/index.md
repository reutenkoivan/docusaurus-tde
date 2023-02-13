---
title: other-documentations-hook
sidebar_label: Описание
sidebar_position: 1
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Позволяет добавить в сборку ссылки на другие документации pwa.
:::

### Интеграция:

#### 1. Добавление зависимости

<Tabs groupId="package-manager">
<TabItem value="yarn">

```shell
yarn add -WD "@pwa-doc/other-documentations-hook"
```
</TabItem>

<TabItem value="npm">

```shell
npm i "@pwa-doc/other-documentations-hook"
```
</TabItem>
</Tabs>

#### 2. Регистрация хука
```javascript title="pwa-doc.config.js"

module.exports = {
    hooks: [
      ['@pwa-doc/other-documentations-hook', { source: { url: 'https://pwa.s3-website.tinkoff.ru/pwa-doc/custom/external-links.json' } }],
    ]
}
```

### Конфигурация:
```typescript
type otherDocumentationsHookProps = {
  source?: {
      url: string;
      options?: Record<string, any>; // {}
  };
  button?: {
    label?: string; // 'Другие документации'
    position?: 'left' | 'right'; // 'right'
  };
  // Количество столбцов в ряду. По умолчанию бесконечное количество в ряду
  numberOfColumns?: 1 | 2 | 3 | 4;
  // Секция ссылок от команды
  commandLinks?: {
    title: string;
    links: Record<'label' | 'href', string>;
  };
}
```
