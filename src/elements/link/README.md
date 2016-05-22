# niduscss-elements-link
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-elements-link.svg
[npm-url]: https://npmjs.org/package/niduscss-elements-link

> Default style used in links elements for niduscss framework.

## Installation

```console
$ npm install niduscss-elements-link
```

## Usage

Import styles:

styles.css:

```css
/* Elements
   ========================================================================== */
@import "niduscss-elements-link";

/* Other styles */
```

Use de mixin noneDecoration to remove link decoration of links:

```css
nav a {
  @mixin noneDecoration;
}
```

## [Changelog](CHANGELOG.md)