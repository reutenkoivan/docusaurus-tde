---
title: Configuration
sidebar_position: 2
---

In docusaurus-tde there are two types of components:

1. _System components_ - they are configured through the docusaurus-tde config.
2. _Custom components_ - they are connected as hooks in the docusaurus-tde config.

The system components are part of the standard documentation build configuration,
which means they are shipped with the basic docusaurus-tde dependencies.
To configure them, you just need to set the parameters in the **`docusaurus-tde.config.js`** config.

```typescript
interface DocConfig {
  logo?: string;
  title?: string;
  baseUrl?: string;
  navbar: {
    support: {
      url: string;
    },
    repository: {
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

If you want to add additional functionality, you need to:
1. Install the docusaurus-tde compatible hook in the dependencies
2. Register the hook in the docusaurus-tde config

### Example:

```js
module.exports = {
  logo: './logo.png',
  title: 'docusaurus-tde',
  navbar: {
    support: {
      url: 'https://github.com/reutenkoivan/docusaurus-tde/issues',
    },
    repository: {
      url: 'https://github.com/reutenkoivan/docusaurus-tde',
    },
  },
}
```

```js
const path = require('path')

module.exports = {
  navbar: {
    support: {
      url: 'https://github.com/reutenkoivan/docusaurus-tde/issues',
    },
    repository: {
      url: 'https://github.com/reutenkoivan/docusaurus-tde',
    },
  },
  hooks: [
    ['@docusaurus-tde/content-hook', { contentDir: path.join(__dirname, 'content') }],
  ],
}
```
