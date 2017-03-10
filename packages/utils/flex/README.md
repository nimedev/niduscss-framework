# niduscss-utils-flex
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-flex.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-flex

> Flexbox utilies for niduscss framework.

## Installation

```console
$ npm install niduscss-utils-flex
```

## Usage

Import styles:

styles.css:

```css
/* Utilities
   ========================================================================== */
@import "niduscss-utils-flex";

/* Other styles */
```

Use in html files

```html
<!-- Flexbox row -->
<div class="Flex">
  <div class="Flex-item--20"></div>
  <div class="Flex-item--80"></div>
</div>

<!-- Flexbox column -->
<div class="Flex--colum">
  <div class="Flex-item--70"></div>
  <div class="Flex-item--30"></div>
</div>
```

## [Changelog](CHANGELOG.md)