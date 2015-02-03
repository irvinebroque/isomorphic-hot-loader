[![Circle CI](https://circleci.com/gh/irvinebroque/isomorphic-hot-loader.svg?style=svg)](https://circleci.com/gh/irvinebroque/isomorphic-hot-loader)

# Isomorphic React + React-Router + React-Hot-Loader

This is a demo app that demonstrates a minimal viable implementation of combining the following awesome projects:

- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [react-router v0.11](https://github.com/rackt/react-router)
- Isomorphic / Server-side rendering of [React v0.12](http://facebook.github.io/react/blog/2014/10/28/react-v0.12.html)

I spent a fair bit of time banging my head against the wall trying to get webpack configured correctly here, and haven't yet touched on how to deal with production and builds yet. Hopefully it helps people get new projects started -- I love React and react-hot-loader and react-router are two of the absolute best community modules that I've seen.

## Install

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
