[![Circle CI](https://circleci.com/gh/irvinebroque/isomorphic-hot-loader.svg?style=svg)](https://circleci.com/gh/irvinebroque/isomorphic-hot-loader)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/irvinebroque/isomorphic-hot-loader)

**Goal:** To provide a starter project for React.js projects with sane defaults and community-driven best practices.

- [Features](/FEATURES.md)

## Install

[![Join the chat at https://gitter.im/irvinebroque/isomorphic-hot-loader](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/irvinebroque/isomorphic-hot-loader?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

1. Install [node.js](https://nodejs.org) (`brew install node`).
2. Install [Flow](http://flowtype.org/docs/getting-started.html#_) (`brew install flow`) for inferred type checking in development with no extra work.
3. Clone this repository
4. `npm install`

## Run it locally

`npm run dev`

Runs our server with [node-supervisor](https://github.com/isaacs/node-supervisor) to restart when any javascript changes, and a [webpack hot loader](https://github.com/gaearon/react-hot-loader) that pushes the compiled javascript bundle into the client via websockets, for fast incremental live-reload.

## CSS/JS Builds

`npm run build`

Runs [webpack](http://webpack.github.io) to generate a production build. This minifies the javascript and uses static analysis to perform dead code elimination, which reduces our total bundle considerably, especially when requiring large libraries like moment.js.

Which will generate the proper webpack bundle. Then run `npm run prod`.

## Tests

`npm run test`

Runs all [jest](https://facebook.github.io/jest/) unit tests within `__tests__` directories.

## Linting & Style Checking

`npm run lint`

Runs [eslint](https://github.com/eslint/eslint). The eslint config is stored as `"eslintConfig"` within `package.json`, and is configured to work with both ES6 and JSX.


### License

[MIT](/LICENSE.md)
