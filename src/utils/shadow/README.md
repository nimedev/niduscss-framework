# niduscss-utils-shadow
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-shadow.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-shadow

> Utilies to use shadows effects with css for niduscss framework.

## Installation

```console
$ npm install niduscss-utils-shadow
```

## Usage

Import styles:

styles.css:

```css
/* Utilities
   ========================================================================== */
@import "niduscss-utils-shadow";

/* Other styles */
```

Use mixins in css files

```css
header {
  /* Import mixin from shadow utils */
  @mixin u-shadowRight;
}
```

Use in html files

```html
<!-- Bottom shadow in a header -->
<header class="u-shadowBotton"></header>

<!-- Shadow frame level 2 -->
<div class="u-shadowFrame-2"></div>
```

## [Changelog](CHANGELOG.md)