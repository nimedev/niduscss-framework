# niduscss-utils-align
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-align.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-align

> Vertical align utilies for niduscss framework.

## Installation

```console
$ npm install niduscss-utils-align
```

## Usage

Import styles:

styles.css:

```css
/* Utilities
   ========================================================================== */
@import "niduscss-utils-align";

/* Other styles */
```

Use mixins in css files

```css
/* Container */
.Container {
  @mixin u-alignContainer;

  /* Import the vertical centering ghost from align utils */
  &::before {
    @mixin u-alignGhost;
  }
}
```

Use in html files

```html
<div class="u-alignContainer">
  <span class="u-alignItem--centered">item 1</span>
  <span class="u-alignItem--centered">item 2</span>
</div>
```

## [Changelog](CHANGELOG.md)