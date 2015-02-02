# Goal

An actively maintained starter project for building isomorphic web apps with React.js

### Routing

- [x] React Router v0.11
- [x] Page Title Updates on both server and client

### Isomorphic

- [x] Server-side rendering
- [x] Server-side routing

### Development & design workflow

- [x] "Hot-loaded" javascript builds (live-reload with no refresh, components maintain state)
- [ ] CSS in JS

### Testing & Linting

- [x] ESLint configured to support JSX and ES6
- [x] Jest configured to support JSX
- [x] Flow configured for weak mode inferred type checking
- [x] .editorconfig file with sane defaults
- [ ] Continuous Integration via CircleCI / TravisCI
- [ ] CI integration with BrowserStack

### Deployment & Builds

- [x] Minimized JS build with dead code elimination
- [ ] Docker configuration


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
