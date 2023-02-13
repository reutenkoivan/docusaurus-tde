---
title: Публикация
sidebar_position: 3
---

:::danger **Проблема:**
Генерация роутов приложения происходит в отдельном окружении от раздачи статических файлов!

Из-за этого **если** при деплое статики существует базовый pathname - то все сгенерированные роуты будут неправильными.
:::

Если рассматривать эту проблему на примере **ded-pwa** - большинство статический файлов
деплоятся в **s3** по эндпоинту
* `https://s3-website.tinkoff.ru`**`/pfp-static/${CI_PROJECT_NAME}/${CI_COMMIT_REF_SLUG}/`** - для МРа
* `https://pwa.s3-website.tinkoff.ru`**`/${CI_PROJECT_NAME}/`** - при релизе

Как видно в эндпоинтах существует разный pathname который еще и отличается того что
используется при локальной разработке (_`http://localhost:3000`**`/`**_).

### Какое решение?

:::tip
Используйте конфигурируемый из окружения параметр базового pathname!
:::

Для локальной разработки ничего конфигурировать не нужно,
но для CI необходимо настроить динамическую конфигурацию pathname.

#### 1. Настраиваем конфиг:
Добавляем настройку `baseUrl` в pwa-doc конфиг

```javascript
module.exports = {
  baseUrl: process.env.BASE_URL,
}
```

#### 2. Создаем джобу:
Пример сборки документации в МРе:

```yaml
build:docs-mr:
  image: $NODE_IMAGE
  variables:
    # Конфигурируем значение в конфиге.
    BASE_URL: "/pfp-static/${CI_PROJECT_NAME}/${CI_COMMIT_REF_SLUG}/"
  script:
    - yarn pwa-doc build
  artifacts:
    paths:
      - public
```

Пример сборки документации при релизе:

```yaml
build:docs-release:
  image: $NODE_IMAGE
  variables:
    # Конфигурируем значение в конфиге.
    BASE_URL: "/${CI_PROJECT_NAME}/"
  script:
    - yarn pwa-doc build
  artifacts:
    paths:
      - public
```
