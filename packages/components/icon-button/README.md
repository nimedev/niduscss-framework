# niduscss-components-icon-button
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-components-icon-button.svg
[npm-url]: https://npmjs.org/package/niduscss-components-icon-button

> Base styles to create icon buttons for niduscss framework.


## Installation

```console
$ npm install niduscss-components-icon-button
```


## Usage

Import styles:

styles.css:

```css
/* Components
   ========================================================================== */
@import "niduscss-components-icon-button";

/* Other styles */
```

Use in html files

```html
<!-- icon button with SVG menu icon -->
<button class="IconButton">
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
</button>

<!-- Disabled icon button -->
<button class="IconButton IconButton--disabled">
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
</button>
```


## [Changelog](CHANGELOG.md)
