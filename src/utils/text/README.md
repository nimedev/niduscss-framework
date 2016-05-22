# niduscss-utils-text
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-text.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-text

> Text utilies for niduscss framework.

## Installation

```console
$ npm install niduscss-utils-text
```

## Usage

Import styles:

styles.css:

```css
/* Utilities
   ========================================================================== */
@import "niduscss-utils-text";

/* Other styles */
```

Use mixins in css files

```css
label {
  /* import ellipsis hack from text utils */
  @mixin u-textEllipsis;
}
```

Use in html files

```html
<h3 class="u-textEllipsis">Heading</h3>
```

## [Changelog](CHANGELOG.md)