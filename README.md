# faraway-test

**Реализованы следующие задачи:**

- Using a third party API as a data source (example: Star Wars API https://swapi.dev/),
  implement a SPA application (React or Vue) consisting of two pages.
  On the main page, display a list or cards of characters, add the possibility of pagination to the list.
  Implement a page with detailed information on the selected character.

Pros:
+ Using TypeScript
+ Neat layout
+ Using UI framework (Material, Ant, Bootstrap, etc.)
  As an extra challenge:
+ To work with data, use storage (Vuex, Redux, etc.)
+ Subscribe to update the storage status
+ Add character search field by API (or local filter)
  Our considerations for evaluation:
- When evaluating the task, take into account, in general, the functional approach and data immutability in the frontend (filter, map, reduce)
- Take into account how accurately the re-render will work when editing (so as not to re-render the entire data array and not to sag in performance)
- If React is chosen, the actual approach is to use hooks.<br>


## Используемые технологии
- React
- TypeScript
- Redux / React-router-dom v6
- публичные API - https://swapi.dev/

## Использование локально

Экспорт проекта локально на компьютер:

```
git clone https://github.com/evgeny3322/faraway-test.git
```

Для установки зависимостей:

```
yarn
```

Для запуска на localhost:3000

```
yarn start
```

## Demo

Посмотреть приложение в действии можно на [Link](https://evgeny3322.github.io/faraway-test/)