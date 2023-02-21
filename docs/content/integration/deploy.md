---
title: Deploy
sidebar_position: 3
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::danger
Route generation in the application is performed in a separate environment from the distribution of static files!

This why **if** during the static deployment there is a base pathname - then all generated routes will be wrong!
:::

### So what to do?

:::tip
Use the configurable environment parameter for the base pathname!
:::

For local development, nothing needs to be configured,
but for CI you need to configure a dynamic configuration for pathname.

#### 1. Configure the baseUrl in the docusaurus-tde config

```javascript
module.exports = {
  baseUrl: process.env.BASE_URL,
}
```

#### 2. Modify the CI configuration:

<Tabs groupId="ci">
<TabItem value="GitHub">

```yaml
jobs:
  build-documentation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies.
        run: npm install # or "yarn install", or load from cache

      - name: Build documentation.
        env:
          BASE_URL: "/${{ github.repository }}/"
        run: npm run docusaurus-tde build # or yarn docusaurus-tde build
```

</TabItem>

<TabItem value="GitLab">

```yaml
build:documentation:
  image: $NODE_IMAGE
  variables:
    # set the base url for the current project
    BASE_URL: "/${CI_PROJECT_NAME}/"
  script:
    - npm install # or "yarn install", or load from cache
    - npm run docusaurus-tde build # or yarn docusaurus-tde build
```

</TabItem>
</Tabs>
