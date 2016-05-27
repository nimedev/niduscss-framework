# niduscss-lib-mixins
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-lib-mixins.svg
[npm-url]: https://npmjs.org/package/niduscss-lib-mixins

> Common mixins for niduscss framework.

## Installation

```console
$ npm install niduscss-lib-mixins
```

## Usage

Import styles:

styles.css:

```css
/* Libraries
   ========================================================================== */
@import "niduscss-lib-mixins";

/* Other styles */
```
*Note: Be sure that the import is before all styles to use the mixins*

### Align mixins

```css
/* Container */
.Container {
  @mixin u-alignContainer;

  /* Import the vertical centering ghost mixin */
  &::before {
    @mixin u-alignGhost;
  }
}
```

### Link mixins
Use de mixin noneDecoration to remove link decoration of links:

```css
nav a {
  @mixin noneDecoration;
}
```

### Responsive mixins

```css
/* Define the custom media querie */
@custom-media --small-viewport (min-width: 37.5rem);

/* Import the mixin */
@mixin respondTo --small-viewport {
  height: 2rem;
}
```

### Shadow mixins

```css
header {
  /* Import the mixin */
  @mixin u-shadowRight;
}
```

### Text mixins

```css
label {
  /* import ellipsis hack mixin */
  @mixin u-textEllipsis;
}
```

## [Changelog](CHANGELOG.md)