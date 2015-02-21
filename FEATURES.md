### Routing

- [x] React Router v0.11
- [x] Page Title Updates on both server and client

### Isomorphic

- [x] Server-side rendering
- [x] Server-side routing

### ES6

- [x] babel-loader with minimal runtime dependency footprint
- [x] Server-side `require("babel/register");` ES6 polyfill

### Flux & Data Fetching

- [x] Flux architecture
- [x] Uses `fetch()` polyfill on both server and client
- [ ] Immutable data stuctures using [Immutable.js](https://github.com/facebook/immutable-js)

### Development & design workflow

- [x] "Hot-loaded" javascript builds (live-reload with no refresh, components maintain state)
- [ ] CSS in JS

### CSS

- [x] normalize.css to fix cross-browser inconsistencies

### Testing & Linting

- [x] ESLint configured to support JSX and ES6
- [x] Jest configured to support JSX
- [x] Flow configured for weak mode inferred type checking
- [x] .editorconfig file with sane defaults
- [x] Continuous Integration via CircleCI
- [ ] CI integration with BrowserStack

### Deployment & Builds

- [x] Minimized JS build with dead code elimination (`webpack -p`)
- [ ] Docker container configuration
- [ ] Cache busting
- [ ] Bundle splitting per-route

### Internationalization

- [ ] react-intl

### SEO

- [ ] Open Graph and other domain-specific meta tags via [react-side-effect](https://github.com/gaearon/react-side-effect)

### Accessibility

- [ ] Console warning in dev if elements aren't visible to screen readers, via [react-a11y](https://github.com/rackt/react-a11y).
