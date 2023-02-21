---
title: webpack-patcher-plugin
sidebar_label: Details
sidebar_position: 1
slug: /
---

:::info TL;DR
The plugin is designed to fix the behavior of the docusaurus application that was stored in the **node_modules** folder.
already connected to the "@docusaurus-tde/app" package.
:::

Because the Docusaurus, as a tool, assumes that configuration files will not be stored in **node_modules**
we had some issues during starting and building documentation, so we need to patch the Webpack config.
This plugin is already integrated into our generic Docusaurus application, so you don't need to worry about it.
