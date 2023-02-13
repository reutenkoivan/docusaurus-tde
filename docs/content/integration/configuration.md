---
title: Конфигурация
sidebar_position: 2
---

В pwa-doc существуют _**2 типа компонентов**_:

1. _Системные компоненты_ - конфигурируются через параметры конфига.
2. _Компоненты расширения функциональности_ - конфигурируются через интеграцию хуков.

Системные компоненты это часть стандартной настройки сборки документации,
а значит они поставляются вместе с базовыми зависимостями pwa-doc. Для их конфигурации нужно
просто настроить параметры в конфиге **`pwa-doc.config.js`**

```typescript
interface PwaDocConfig {
  logo?: string;
  title?: string;
  baseUrl?: string;
  navbar: {
    channel: {
      // Один из параметров обязателен!
      id?: string;
      url?: string;
    },
    gitlab: {
      url: string;
    },
    items?: Array<{
      /* https://docusaurus.io/docs/api/themes/configuration#navbar-items */
      to: string;
      href: string;
      label: string;
      type?: string;
      className?: string;
      'aria-label'?: string;
      activeBasePath?: string;
      position?: 'left' | 'right';
    }>
  }
  theme?: {
    colorMode?: 'light' | 'dark';
    announcementBar?: {
      /* https://docusaurus.io/docs/api/themes/configuration#announcement-bar */
      id: string;
      content: string;
      backgroundColor?: string;
      textColor?: string;
      isCloseable?: string;
    }
  }
  themes?: Array<string | [string] | [string, Record<string, any>]>
  /* https://docusaurus.io/docs/using-plugins */
  plugins?: Array<string | [string] | [string, Record<string, any>]>
  hooks?: Array<string | [string] | [string, any]>
}
```

Для интеграции дополнительной функциональности нужно:
1. Установить pwa-doc совместимый хук в зависимости
2. Зарегистрировать хук в pwa-doc конфиг

### Примеры:

```js
module.exports = {
  logo: './logo.png',
  title: 'pwa-doc',
  navbar: {
    channel: {
      id: 'C02TVB8P5PU',
    },
    gitlab: {
      url: 'https://gitlab.tcsbank.ru/ded-pwa/pwa-doc',
    },
  },
}
```

```js
module.exports = {
  navbar: {
    channel: {
      url: 'https://tinkoff.slack.com/archives/C02TVB8P5PU',
    },
    gitlab: {
      url: 'https://gitlab.tcsbank.ru/ded-pwa/pwa-doc',
    },
  },
  hooks: [
    ['@pwa-doc/content-hook', { contentDir: path.join(__dirname, 'content') }],
  ],
}
```
