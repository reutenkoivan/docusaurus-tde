---
title: Требования к МРу
sidebar_position: 2
---

## Название

:::caution Внимание!
Название МРа должно быть оформлено в соответствии с **[Conventional Commits](https://www.conventionalcommits.org/)**!
:::

### Примеры:

| Заголовок МРа                                                | Тип релиза | Группа в changelog |
|--------------------------------------------------------------|------------|--------------------|
| Увеличен размер текста в выпадающих списках navbar.          | patch      | Other              |
| feat(cli): PFPFORMOPS-2183 - Реализована генерация шаблонов. | minor      | 🚀 Features         |
| feat(di)!: PFPFORMOPS-2239 - Зафиксирован контракт хуков.    | major      | 🚀 Features         |
| fix(cli): Добавлена зависимость на @pwa-doc/app.             | patch      | 🐛 Bug Fixes        |

### Виды групп
| Тип             | Вид в чейнджлоге            |
|-----------------|-----------------------------|
| <все остальные> | Other                       |
| build           | 🧰 Build System              |
| ci              | ⚙️ Continuous Integration    |
| docs            | 📝 Documentation             |
| feat            | 🚀 Features                  |
| fix             | 🐛 Bug Fixes                 |
| perf            | 🏃‍♀️ Performance Improvements |
| refactor        | 🛠️ Code Refactoring          |
| revert          | ↩️ Reverts                   |
| style           | 💅 Styles                    |
| test            | 🧪 Tests                     |

### Детали
* Major релиз задается через восклицательный знак, или текст BREAKING CHANGE, с дальнейшим описанием в теле коммита.
* Minor задается через тип коммита feat и только через него.
* Все остальные коммиты будут давать тип релиза patch.
* Коммит, который не определяет свой тип (группу) или имеет неизвестный тип, попадает в группу Other.

