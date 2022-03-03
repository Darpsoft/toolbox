# Toolbox Demo APP IOS / ANDROID
This application has a login system where you can enter with any email and with any password, there is no validation system.

After entering the system, you will be able to see the carousels according to the type.

The entire project is built with the best practices at the Git level, branches were created according to the features and they were merged, the commits follow a pattern with [Commit Lint,](https://commitlint.js.org/#/ "Commit Lint,") in this way it is more readable.

Several design patterns were also used in this project, such as:

> Flux 
> Custom Hooks
> Render Props
> Extendible Styles
> Compound Component
> State Reducer
> Etc

## Starting 🚀

_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._

### Pre requirements 📋

_What things do you need to install the software and how to install them_

```
yarn
```

### Create files for the environment 🔩
The following files should be created in the root of the project


> .env.development
> .env.production

with the following content

    URL_API = https://echo-serv.tbxnet.com
    

### Installation 🔧

_A series of step-by-step examples that tells you what you must run to have a development environment running_

_Install the project packages_

```
yarn
```

_To compile in ios_

```
yarn ios
```

_To compile in android_

```
yarn android
```

### Credentials 📋

_You can enter any credentials, for example:_

**Email:** `pedro@toolbox.com`
**Password:** `Test1235`

### Encoding style ⌨️

_Clean project structure oriented to functional programming by components where folders are divided according to the type of file to be worked on. In the case of reducer, they are divided between folders for better handling (actions, constants, sagas and reducer) _

### Linter used 📦

_The style ** eslint standard ** with prettier was used to maintain a style in the project, rules were assigned according to my tastes._

## Built with 🛠️

_ Tools used in the project _

- [husky](https://typicode.github.io/husky) - Modern native Git hooks made easy
- [lint-staged](https://github.com/okonet/lint-staged#readme) - Lint files staged by git
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint#readme) - Lint your commit messages
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage#readme) - An asynchronous, unencrypted, persistent, key-value storage system for React Native. I used it to save user session and application settings.
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler/) - Provides native-driven gesture management APIs for building best possible touch-based experiences in React Native.
- [@react-navigation/native](https://reactnavigation.org) - Library to navigate between screens
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context#readme) - To handle safe areas and use dimension hooks
- [lodash](https://lodash.com/) - Provides utility functions for programming tasks
- [react-hook-form](https://www.react-hook-form.com) - To work with form validations.
- [react-native-config](https://github.com/luggit/react-native-config) - To simulate working with environment variables
- [react-native-paper](https://callstack.github.io/react-native-paper) - Library with collection of customizable UI components
- [react-native-svg](https://github.com/react-native-community/react-native-svg) - To be able to use SVG in the application and to be able to manipulate them
- [react-native-vector-icons](https://github.com/leecade/react-native-swiper#readme) - To work with Icons
- [react-native-video](https://github.com/react-native-community/react-native-video#readme) - Library to play video
- [react-redux](https://github.com/reduxjs/react-redux) - To manage the application state
- [redux](http://redux.js.org) - State manager
- [redux-saga](https://redux-saga.js.org/) - Middleware to make requests

## Versioned 📌

I used [standard-version](https://github.com/conventional-changelog/standard-version#readme) for versioning. For all available versions, see [CHANGELOG](https://github.com/Darpsoft/toolbox/blob/master/CHANGELOG.md).

## Author ✒️

- **Pedro Fuentes** - _Programación y Documentación_ - [Darpsoft](https://github.com/Darpsoft)

---

⌨️ con ❤️ por [Pedro Fuentes](https://github.com/Darpsoft) 😊
