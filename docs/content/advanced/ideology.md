---
title: How does it work?
sidebar_label: How does it work
sidebar_position: 1
---

### Context

If you want to understand the principles of work of docusaurus-tde, you need to know that this system consists of 2 components:

* The docusaurus application.
* Additional code that configures the docusaurus application.

In the standard use of docusaurus, the documentation is assumed to be in a separate directory with a config, dependencies and
content necessary for building the application. About Docusaurus itself you can read on the [official website](https://docusaurus.io/).

As for me, it was not convenient to configure similar documentation for each new project, so it was decided to
move the management of dependencies and configuration to a separate tool, the main goal was to leave only the content generation for the user.
(As a spoiler, we did not completely remove the configuration from the user, and they still configure the view of the documentation
with the help of files describing the structure of the content - `_category_.yml`)

The main advantage of docusaurus-tde is that it does not need a separate directory for storing dependencies, which means
understanding the final repository and the scripts used in it becomes easier.
Also, it's simpler to configure the CI/CD pipeline, because you don't need to manage the dependencies for your application
and the documentation separately.

### About the "extra code" which configures the docusaurus application

All the code which created over the docusaurus is a set of functions that modify the config from the file
`node_modules/@docusaurus-tde/app/root/docusaurus.config.js`

In order to structure this process, was created the mechanic of hooks. Hook - it's a structure that consists
of pipelines of functions that can prepare some data or configure the Docusaurus config.

```typescript
interface HookContract {
  name: string;
  version: string;
  before?: Array<Function>;
  runtime?: Array<Function>;
  after?: Array<Function>;
}
```

As you can see in the interface of the hook, there are 3 sets of functions: **before**, **runtime** and **after**.
These sets correspond to the three events that may occur during the start/build of the documentation.
In other words, if the developer needs to **run a function before** building the documentation - he puts it in
the **before** queue, for other events the same.

> If you want to know more about how hooks work - read [this article](creating-hooks).

In final we have a clos

As a result, we got a full-fledged system that allows you to hide data preparation and complex configuration from
the user behind the declarative interface.
